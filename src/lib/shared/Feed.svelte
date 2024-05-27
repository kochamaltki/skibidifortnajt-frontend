<script lang="ts">
    import Post from "$components/Post.svelte";
	import { postStore } from "$stores/postStore";
	import { onMount } from "svelte";

	export let feedType = "new";
	export let timestamp: number|null = null;
	export let searchTerm = "";

	let fetching: boolean = false;
	let cooldown: boolean = false;
	let waiting: boolean = false;

	const sleep = (duration: number) => {
		return new Promise((r) => setTimeout(r, duration))
	};

	const fetchPosts = async () => {
		fetching = true;
		startCooldown();
		await postStore.addNewPosts(timestamp);
		fetching = false;
	}

	const startCooldown = async () => {
		cooldown = true;
		await sleep(500);
		cooldown = false;

		if(waiting) {
			fetchPosts();
			waiting = false;
		}
	};

	onMount(() => {
			postStore.changeEndpoint(feedType);
			postStore.search(searchTerm);
			postStore.addNewPosts(timestamp);
	});
</script>

<svelte:window 
	on:scroll={async () => {
		if(fetching) return;

		let scroll = window.innerHeight * 2 + window.scrollY;

		if(scroll >= document.body.offsetHeight) {
			if(cooldown) {
				waiting = true;
				return;
			}
			fetchPosts();
		}

	}}
/>

{#key feedType}
	<div class="container">
		{#each $postStore.posts.getItems() as post}
			<div class="post">
				<Post {...post} bind:likeCount={post.likeCount}/>
			</div>
		{/each}
	</div>
{/key}

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 20px;
	}

	.post {
		width: 800px;
	}
</style>
