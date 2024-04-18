import { writable } from "svelte/store";
import apiUrl from "./apiUrl";

export function createUserStore(apiUrl: string) {
	const loginData = writable({
		loggedIn:  false,
		showLoginPrompt: false,
	});

	const userData = writable({
		username: "username",
		displayName: "displayName",
		description: "description",
		id: -1,
	});

	async function logInWithId(id: number) {
		let res = await fetch(apiUrl + "/api/get/profile/by-id/" + id);
		let data: any = await res.json();

		userData.set({
			username: data.user_name,
			displayName: data.display_name,
			description: data.description,
			id: data.id
		});

		loginData.set({
			loggedIn: true,
			showLoginPrompt: false
		})
	}

	async function logInWithUsername(username: string) {
		let res = await fetch(apiUrl + "/api/get/user/id/" + username);
		let id = await res.json();
			
		return logInWithId(id);
	}

	function toggleLoginPrompt() {
		loginData.update(data => {
			console.log(data.showLoginPrompt)
			return {...data, showLoginPrompt: !data.showLoginPrompt};
		})
	}

	return {
		...userData,
		...loginData,
		logInWithId,
		logInWithUsername,
		toggleLoginPrompt
	};
}


export const userStore = createUserStore(apiUrl);
