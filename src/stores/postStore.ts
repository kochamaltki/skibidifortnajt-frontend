import { writable } from "svelte/store";
import apiUrl from "./apiUrl";
import { userStore } from "./userStore";

export function createPostStore(apiUrl: string) {
	const data = writable({
		posts: [],
		showCreatePostPrompt: false
	});

	async function fetchPosts(endpoint: string = "all") {
		const res = await fetch(apiUrl + "/api/get/posts/" + endpoint);
		let d = await res.json();

		let post_arr = d.post_list.map((post: any) => {
			return {
				datePosted: post.date * 1000,
				content: post.body,
				likeCount: post.likes,
				postId: post.post_id,
				displayName: post.user_name,
				userId: post.user_id
			}
		});

		data.update(d => {
			return {
				...d,
				posts: post_arr
			}
		});
	};

	async function addPost(body: string, tags: Array<string> = []) {
		let endpoint: string = apiUrl + "/api/post/add-post";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				body: body,
				tags: tags
			})
		})
		data.update(d => {
			return {
				...d,
				showCreatePostPrompt: false,
			};
		})

		fetchPosts();
	}

	function toggleCreatePostPrompt() {
		data.update(d => {
			return {
				...d,
				showCreatePostPrompt: !d.showCreatePostPrompt,
			};
		})
	}

	return {
		...data,
		fetchPosts,
		addPost,
		toggleCreatePostPrompt
	};
}

export const postStore = createPostStore(apiUrl)
