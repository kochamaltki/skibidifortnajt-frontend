import { writable, get } from "svelte/store";
import apiUrl from "./apiUrl";

interface Post {
	datePosted: number;
	content: string;
	likeCount: number;
	postId: number;
	displayName: string;
	userId: number;
	images: Array<string>;
}

class UniqueContainer<Type> {
	private items: Type[];
	private ids: Set<number>;

	constructor() {
		this.items = [];
		this.ids = new Set<number>();
	}

	public getItems(): Type[] {
		return this.items;
	}

	public addItem(item: Type, id: number): boolean {
		if(this.ids.has(id)) return false;

		this.items.push(item);
		this.ids.add(id);
		return true;
	}
}

export function createPostStore(apiUrl: string) {
	const data = writable({
		posts: new UniqueContainer<Post>(),
		showCreatePostPrompt: false,
		currentOffset: 0,
		currentLimit: 5
	});

	async function fetchPosts(endpoint: string) {
		const value = get(data);
		const res = await fetch(apiUrl + "/api/get/posts/" + endpoint + "/" + value.currentLimit + "/" + value.currentOffset);
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

	async function addNewPosts(endpoint: string = "new") {
		let post_arr = await fetchPosts(endpoint);
		if(post_arr.length == 0) return;

		const value = get(data);
		let realLength = 0;
		for(let post of post_arr) {
			if(value.posts.addItem(post, post.postId)) {
				realLength ++;
			}
		}

		data.update((d: any) => {
			return {
				...d,
				posts: value.posts,
				currentOffset: (value.currentOffset + realLength)
			}
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

		data.update(d => {
			return {
				...d,
				showCreatePostPrompt: false,
			};
		});

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
		data.update(d => {
			return {
				...d,
				showCreatePostPrompt: !d.showCreatePostPrompt,
			};
		});
	};

	return {
		...data,
		addNewPosts: addNewPosts,
		addPost,
		toggleCreatePostPrompt,
		uploadFile,
		addImageToPost
	};
}

export const postStore = createPostStore(apiUrl)
