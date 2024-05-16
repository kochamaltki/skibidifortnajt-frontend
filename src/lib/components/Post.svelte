<script lang="ts">
	import { formatDistance } from 'date-fns'
	import { scale } from 'svelte/transition'
	import { elasticOut } from 'svelte/easing'
	import { onMount } from 'svelte';

	import Card from '$lib/shared/Card.svelte';
	import Clickable from '$lib/shared/Clickable.svelte';

	import apiUrl from '$stores/apiUrl';
	import { userStore } from '$stores/userStore';

	const formatter = Intl.NumberFormat("en", { notation: "compact" })

	const getProfilePictureFromId = (id: number) => {
		let index = id % 10;
		return `/images/altki/altka${index}.png`;
	}

	export let userId: number = -1;
	export let displayName: string = "Username";
	export let content: string = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.";
	export let profilePictureUrl: string = getProfilePictureFromId(userId);

	export let datePosted: number = 0;
	export let likeCount: number = 0;
	export let commentCount: number = 0;
	export let postId: number = -1;

	export let liked: boolean = false;

	let endpoint: string;
	let likes: string;

	$: likes = formatter.format(likeCount);

	const formatHashtags = (content: string) => {
		const regex = /(#\w+)/gi;

		let out = content
			.split(regex)
			.map(chunk => {
				if(chunk[0] == "#") {
					return {
						value: chunk,
						hashtag: true
					}
				}

				return {
					value: chunk.replace(/^ /, ""),
					hashtag: false
				}
		});

		console.log(out);
		return out;
	};

	const checkLiked = async () => {
		if($userStore.loggedIn) {
			let res = await fetch(apiUrl+`/api/get/like/${postId}/${$userStore.id}`);
			let data = await res.json();
			liked = data;
		}
		else {
			liked = false;
		}
	}

	onMount(checkLiked);
	$: $userStore.loggedIn, checkLiked();
	$: chunks = formatHashtags(content);

	const format = (date: number) => {
		return formatDistance(new Date(date), new Date(), { addSuffix: true });
	}

	const likePost = async () => {
		if($userStore.loggedIn) {
			await checkLiked();
			if(liked)
			{
				likeCount -= 1;
				endpoint = "unreact";
			}
			else
			{
				likeCount += 1;
				endpoint = "react";
			}

			await fetch(apiUrl+"/api/post/"+endpoint, {
				credentials: "include",
				method: "POST",
				headers: { 
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					post_id: postId
				})
			});
			
			liked = !liked;
		}
	}

	const copyPostUrl = () => {
		let path: string = `${window.location.origin}/post/${postId}`
		navigator.clipboard.writeText(path);
	}
</script>

<Card>
	<div class="container">
		<div class="top">
			<Clickable>
				<div class="profile">
					<img src="{profilePictureUrl}" alt="profile-pic" class="profile-pic">
					<div class="username">
						<h1>{displayName}</h1>
						<p>{format(datePosted)}</p>
					</div>
				</div>
			</Clickable>
			<div class="post-settings">
				<Clickable>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ellipsis-v"><path fill="#474c63" d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></svg>
				</Clickable>
			</div>
		</div>

		<h2>
			{#each chunks as chunk}
				{#if chunk.hashtag}
					<!-- <Clickable> -->
						<span class="hashtag">{chunk.value}</span>
					<!-- </Clickable> -->
				{:else}
					{chunk.value}
				{/if}
			{/each}
		</h2>

		<div class="bottom">
			<div class="left">
				<Clickable on:click={likePost}>
					<div class="stat" class:liked={liked}>
						{#if liked}
							<svg in:scale={{ duration: 1500, easing: elasticOut }} class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="heart"><path fill="#f0f0f0" d="M 20.16,5 C 17.969774,2.804069 14.505798,2.5323845 12,4.36 5.753384,-0.28619918 -1.684118,8.3544282 3.84,13.84 l 6.21,6.22 c 1.081955,1.064815 2.818045,1.064815 3.9,0 l 6.21,-6.22 c 2.430563,-2.445453 2.430563,-6.3945469 0,-8.84 z"></path></svg>
						{:else}
							<svg in:scale={{ duration: 1500, easing: elasticOut }} class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="heart"><path fill="#f0f0f0" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
						{/if}
						{likes}
					</div>
				</Clickable>
				<Clickable>
					<div class="stat">
						<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path fill="#f0f0f0" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
						{commentCount}
					</div>
				</Clickable>
			</div>
			<Clickable on:click={copyPostUrl}>
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share-alt"><path fill="#f0f0f0" d="M18,14a4,4,0,0,0-3.08,1.48l-5.1-2.35a3.64,3.64,0,0,0,0-2.26l5.1-2.35A4,4,0,1,0,14,6a4.17,4.17,0,0,0,.07.71L8.79,9.14a4,4,0,1,0,0,5.72l5.28,2.43A4.17,4.17,0,0,0,14,18a4,4,0,1,0,4-4ZM18,4a2,2,0,1,1-2,2A2,2,0,0,1,18,4ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"></path></svg>
			</Clickable>
		</div>
	</div>
</Card>

<style lang="scss">
	$white: #f0f0f0;
	$gray: #474c63;
	$accent: #ff4655;

	.hashtag {
		color: $accent;
	}

	h1 {
		color: $white;
		font-weight: 550;
		font-size: 24px;

		margin: 0;
	}

	h2 {
		white-space: pre-wrap;
		color: $white;
		font-weight: normal;
		font-size: 24px;
		
		margin: 0;
	}

	p {
		color: $gray;
		font-size: 20px;

		margin: 0;
	}

	.bottom {
		display: flex;
		justify-content: space-between;
	}

	.left {
		display: flex;
		gap: 20px;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.username {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile {
		display: flex;
		gap: 20px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.profile-pic {
		max-width: 60px;
		border-radius: 30px;
		user-select: none;
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 5px;

		color: $white;
	}

	.liked {
		color: $accent;
		filter: invert(52%) sepia(67%) saturate(5464%) hue-rotate(329deg) brightness(101%) contrast(102%);
	}

	.icon {
		width: 24px;
	}

	.bottom {
		font-size: 20px;
	}
</style>
