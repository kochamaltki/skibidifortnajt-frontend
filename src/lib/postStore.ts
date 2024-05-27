import { writable, get } from "svelte/store";
import apiUrl from "./apiUrl";

import type { Post } from "./post";
import { UniqueContainer } from "./uniqueContainer";

export function createPostStore(apiUrl: string) {
	const data = writable({
		posts: new UniqueContainer<Post, number>(),
		showCreatePostPrompt: false,
		currentOffset: 0,
		currentLimit: 5,
		currentEndpoint: "new",
		searchTerm: ""
	});

	function updateStore(newData: any) {
		data.update((d: any) => {
			return {
				...d,
				...newData
			}
		})
	}

	function search(searchTerm: string) {
		updateStore({searchTerm: searchTerm});
	}

	function changeEndpoint(endpoint: string) {
		updateStore({
				currentEndpoint: endpoint,
				posts: new UniqueContainer<Post, number>(),
				currentOffset: 0,
				currentLimit: 5,
				searchTerm: ""
			});
	}

	async function getPostFromId(id: number): Promise<Post> {
		const res = await fetch(apiUrl + "/api/get/posts/by-id/" + id);
		let d = await res.json();


		let response = await fetch(apiUrl + "/api/get/images/from-post/" + d.post_id);
		let images = (await response.json()).image_list.map((image: string) => {
			return apiUrl + "/api/get/image/" + image;
		});

		return {
			datePosted: d.date * 1000,
			content: d.body,
			likeCount: d.likes,
			postId: d.post_id,
			displayName: d.user_name,
			userId: d.user_id,
			images: images
		}
	}

	async function fetchPosts(timestamp: string) {
		const value = get(data);
		const res = await fetch(apiUrl + "/api/get/posts/" + value.currentEndpoint + "/" + value.currentLimit + "/" + value.currentOffset + "/" + timestamp);
		let d = await res.json();


		let post_arr = await Promise.all(d.post_list.map(async (post: any) => {
			let response = await fetch(apiUrl + "/api/get/images/from-post/" + post.post_id);
			let images = (await response.json()).image_list.map((image: string) => {
				return apiUrl + "/api/get/image/" + image;
			});

			return {
				datePosted: post.date * 1000,
				content: post.body,
				likeCount: post.likes,
				postId: post.post_id,
				displayName: post.user_name,
				userId: post.user_id,
				images: images
			}
		}));

		return post_arr;
	}

	async function addNewPosts(timestamp: number|null = null) {
		let post_arr;
		if(timestamp === null) {
			post_arr = await fetchPosts("");
		}
		else {
			post_arr = await fetchPosts(timestamp.toString());
		}

		if(post_arr.length == 0) return;

		const value = get(data);
		let realLength = 0;
		for(let post of post_arr) {
			if(value.posts.addItem(post, post.postId)) {
				realLength ++;
			}
		}

		updateStore({
				posts: value.posts,
				currentOffset: (value.currentOffset + realLength)
			});
	}

	async function addPost(body: string, tags: Array<string> = []): Promise<number> {
		let endpoint: string = apiUrl + "/api/post/add-post";
		let res = await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				body: body,
				tags: tags
			})
		});

		let post_id = await res.json();

		updateStore({showCreatePostPrompt: false});
		return post_id;
	};

	async function uploadFile(file: any): Promise<number> {
		let endpoint: string = apiUrl + "/api/post/upload/image";

		let formData = new FormData();
		formData.append('file', file);

		let res = await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			body: formData
		});

		let fileId = await res.json();
		return fileId;
	};

	async function addImageToPost(imageId: number, postId: number) {
		let endpoint: string = apiUrl + "/api/post/add-image-to-post";

		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				image_id: imageId,
				post_id: postId
			})
		});
	};

	function toggleCreatePostPrompt() {
		updateStore({showCreatePostPrompt: !get(data).showCreatePostPrompt});
	};

	return {
		...data,
		addNewPosts: addNewPosts,
		addPost,
		toggleCreatePostPrompt,
		uploadFile,
		addImageToPost,
		changeEndpoint,
		search,
		getPostFromId
	};
}

export const postStore = createPostStore(apiUrl)
