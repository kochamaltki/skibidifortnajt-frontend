<script lang="ts">
	import { onMount } from "svelte";
    import Post from "./Post.svelte";
	import apiUrl from "$stores/apiUrl";

	let posts: any[] = [];
	
	const fetchPosts = async () => {
		const res = await fetch(apiUrl + "/api/get/posts/all");
		let data = await res.json();

		posts = data.post_list.map((post: any) => {
			return {
				datePosted: post.date * 1000,
				content: post.body,
				likeCount: post.likes,
				postId: post.post_id
			}
		});
	};

	onMount(fetchPosts);
</script>

<div class="container">
	{#each posts as post}
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
