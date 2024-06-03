<script lang="ts">
    import type { PostPageData } from "./+page";
	import Post from "$components/Post.svelte";
	import { postStore } from "$lib/postStore";
	import { sideProfileStore } from "$lib/sideProfileStore";

    export let data: PostPageData;
	const fetchData = async () => {
		let post = await postStore.getPostFromId(data.id)
		sideProfileStore.viewSideProfile(post.userId);
	
		return post;
	}
</script>

<div class="container">
	{#await fetchData() then post}
		<Post {...post}/>
	{/await}
</div>

<style lang="scss">
	.container {
		 width: 800px;
	}
</style>
