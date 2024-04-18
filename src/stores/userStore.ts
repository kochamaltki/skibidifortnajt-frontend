import { writable } from "svelte/store";
import apiUrl from "./apiUrl";

export function createUserStore(apiUrl: string) {
	const store = writable({
		loggedIn:  false,
		username: "username",
		displayName: "displayName",
		description: "description",
		id: -1,
	});

	async function logInWithId(id: number) {
		let res = await fetch(apiUrl + "/api/get/profile/by-id/" + id);
		let data: any = await res.json();

		store.set({
			loggedIn: true,
			username: data.user_name,
			displayName: data.display_name,
			description: data.description,
			id: data.id
		});
	}

	async function logInWithUsername(username: string) {
		let res = await fetch(apiUrl + "/api/get/user/id/" + username);
		let id = await res.json();
			
		return logInWithId(id);
	}

	return {
		...store,
		logInWithId,
		logInWithUsername
	};
}


export const userStore = createUserStore(apiUrl);
