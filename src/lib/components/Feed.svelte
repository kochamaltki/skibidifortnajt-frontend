<script lang="ts">
    import Post from "./Post.svelte";
	import { postStore } from "$stores/postStore";
	import { onMount } from "svelte";

	let fetching: boolean = false;

	onMount(postStore.fetchPosts);
</script>

<svelte:window 
	on:scroll={async () => {
		if(fetching) return;

		let scroll = window.innerHeight * 2 + window.scrollY;

		if(scroll >= document.body.offsetHeight) {
			fetching = true;
			await postStore.fetchNewPosts();
			fetching = false;
		}

	}}
/>

<div class="container">
	{#each $postStore.posts as post}
		<div class="post">
			<Post {...post} bind:likeCount={post.likes}/>
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
