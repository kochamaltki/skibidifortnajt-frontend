import { writable, get } from "svelte/store";
import apiUrl from "./apiUrl";

export function createPostStore(apiUrl: string) {
	const data = writable({
		posts: [],
		showCreatePostPrompt: false,
		currentOffset: 0,
		currentLimit: 5
	});

	async function getPosts(endpoint: string) {
		const value = get(data);
		console.log(value.currentOffset)
		const res = await fetch(apiUrl + "/api/get/posts/" + endpoint + "/" + value.currentLimit + "/" + value.currentOffset);
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
				currentOffset: value.currentOffset + post_arr.length
			}
		});

		return post_arr;
	}

	async function fetchNewPosts(endpoint: string = "all") {
		let post_arr = await getPosts(endpoint);
		if(post_arr.length == 0) return;

		const value = get(data);
		post_arr = [...value.posts, ...post_arr];

		data.update(d => {
			return {
				...d,
				posts: post_arr
			}
		});
	}

	async function fetchPosts(endpoint: string = "all") {
		let post_arr = await getPosts(endpoint);
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
		fetchNewPosts,
		addPost,
		toggleCreatePostPrompt
	};
}

export const postStore = createPostStore(apiUrl)
