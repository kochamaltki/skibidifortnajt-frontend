<script lang="ts">
    import type { PostPageData } from "./+page";
	import Post from "$components/Post.svelte";
	import { postStore } from "$stores/postStore";

    export let data: PostPageData;
</script>

<div class="container">
	{#await postStore.getPostFromId(data.id) then post}
		<Post {...post}/>
	{/await}
</div>

<style lang="scss">
	.container {
		 width: 800px;
	}
</style>
