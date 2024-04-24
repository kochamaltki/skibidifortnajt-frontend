<script lang="ts">
    import Post from "./Post.svelte";
	import { postStore } from "$stores/postStore";
	import { onMount } from "svelte";

	onMount(postStore.fetchPosts);
</script>

<div class="container">
	{#each $postStore.posts as post}
		<div class="post">
			<Post {...post}/>
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
