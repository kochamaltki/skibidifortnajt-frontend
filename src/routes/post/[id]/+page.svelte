<script lang="ts">
    import type { PostPageData } from "./+page";
	import Post from "$components/Post.svelte";
	import Card from "$lib/shared/Card.svelte";
	import TextArea from "$lib/shared/TextArea.svelte";
	import Comment from "$components/Comment.svelte";

	import { postStore } from "$lib/postStore";
	import { sideProfileStore } from "$lib/sideProfileStore";
    import Clickable from "$lib/shared/Clickable.svelte";

    export let data: PostPageData;
	const fetchData = async () => {
		let post = await postStore.getPostFromId(data.id)
		sideProfileStore.viewSideProfile(post.userId);
	
		return post;
	}

	let commentInput = "";
</script>

<div class="container">
	{#await fetchData() then post}
		<Post {...post}/>
	{/await}
	<Card>
		<div class="content">
			<TextArea placeholder="Write a comment..." rows={1} bind:input={commentInput}>
				<Clickable slot="right" on:click={() => {alert("comment")}}>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path fill="#f0f0f0" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path></svg>
				</Clickable>
			</TextArea>
		</div>
	</Card>
	<!-- comment feed -->
	<Card>
		<div class="comments">
			<Comment/>
			<Comment/>
			<Comment/>
			<Comment/>
		</div>
	</Card>
</div>

<style lang="scss">
	.icon {
		width: 25px;
	}
	.container {
		 width: 800px;
		 display: flex;
		 flex-direction: column;
		 gap: 20px;
	}

	.content {
		display: flex;
	}

	.comments {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
