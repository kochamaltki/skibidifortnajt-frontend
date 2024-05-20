<script lang="ts">
    import Post from "./Post.svelte";
	import { postStore } from "$stores/postStore";
	import { onMount } from "svelte";

	let fetching: boolean = false;
	let cooldown: boolean = false;

	const sleep = (duration: number) => {
		return new Promise((r) => setTimeout(r, duration))
	};

	const startCooldown = async () => {
		if(cooldown) {
			return;
		}

		cooldown = true;
		await sleep(500);
		cooldown = false;
	};

	onMount(postStore.fetchPosts);
</script>

<svelte:window 
	on:scroll={async () => {
		if(fetching || cooldown) return;

		let scroll = window.innerHeight * 2 + window.scrollY;

		if(scroll >= document.body.offsetHeight) {
			fetching = true;
			startCooldown();
			await postStore.fetchNewPosts();
			fetching = false;
		}

	}}
/>

<div class="container">
	{#each $postStore.posts.getItems() as post}
		<div class="post">
			<Post {...post} bind:likeCount={post.likeCount}/>
		</div>
	{/each}
</div>

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
