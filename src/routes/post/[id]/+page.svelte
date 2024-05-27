<script lang="ts">
    import type { PostPageData } from "./+page";
	import Post from "$components/Post.svelte";
	import { postStore } from "$lib/postStore";
	import { sideProfileStore } from "$lib/sideProfileStore";

    export let data: PostPageData;
	sideProfileStore.viewSideProfile(data.id);
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
