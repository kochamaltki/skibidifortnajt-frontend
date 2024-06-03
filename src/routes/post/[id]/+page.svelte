<script lang="ts">
    import type { PostPageData } from "./+page";
	import type { Comment_t } from "$lib/comment";
	import apiUrl from "$lib/apiUrl";

	import Post from "$components/Post.svelte";
	import Card from "$lib/shared/Card.svelte";
	import TextArea from "$lib/shared/TextArea.svelte";
	import Comment from "$components/Comment.svelte";
	import Clickable from "$lib/shared/Clickable.svelte";

	import { postStore } from "$lib/postStore";
	import { sideProfileStore } from "$lib/sideProfileStore";
    import { onMount } from "svelte";

    export let data: PostPageData;
	let comments: Array<Comment_t> = [];

	const fetchData = async () => {
		let post = await postStore.getPostFromId(data.id)
		sideProfileStore.viewSideProfile(post.userId);
	
		return post;
	}

	let commentInput = "";

	const fetchComments = async () => {
		let res = await fetch("http://localhost:8000/api/get/comments/" + data.id);
		let fetched = (await res.json()).comment_list;
		
		comments = fetched.map((comment: any) => {
			return {
				datePosted: comment.date * 1000,
				content: comment.body,
				commentId: comment.comment_id,
				displayName: comment.display_name,
				userId: comment.user_id,
				profilePicture: comment.pfp_image,
				username: comment.user_name
			}
		})
	}

	const addComment = async () => {
		let endpoint: string = apiUrl + "/api/post/comment";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				post_id: Number(data.id),
				body: commentInput
			})
		});

		commentInput = "";

		await fetchComments();
	}

	onMount(async () => {
		await fetchComments();
	})
</script>

<div class="container">
	{#await fetchData() then post}
		<Post {...post}/>
	{/await}
	<Card>
		<div class="content">
			<TextArea placeholder="Write a comment..." rows={1} bind:input={commentInput}>
				<Clickable on:click={addComment} slot="right">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path fill="#474c63" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path></svg>
				</Clickable>
			</TextArea>
		</div>
	</Card>
	<!-- comment feed -->
	<Card>
		<div class="comments">
			{#each comments as comment}
				<Comment {...comment}/>
			{/each}
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
