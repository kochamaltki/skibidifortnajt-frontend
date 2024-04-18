import { writable } from "svelte/store";
import apiUrl from "./apiUrl";

export function createUserStore(apiUrl: string) {
	const loginData = writable({
		loggedIn:  false,
		showLogInPrompt: false,
		showSignUpPrompt: false
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
			showLogInPrompt: false,
			showSignUpPrompt: false,
		})
	}

	async function logInWithUsername(username: string) {
		let res = await fetch(apiUrl + "/api/get/user/id/" + username);
		let id = await res.json();
			
		return logInWithId(id);
	}

	function toggleLogInPrompt() {
		loginData.update(data => {
			return {...data,
				showLogInPrompt: !data.showLogInPrompt,
				showSignUpPrompt: false
			};
		})
	}

	function toggleSignUpPrompt() {
		loginData.update(data => {
			return {...data,
				showSignUpPrompt: !data.showSignUpPrompt,
				showLogInPrompt: false
			};
		})
	}

	return {
		...userData,
		...loginData,
		logInWithId,
		logInWithUsername,
		toggleLogInPrompt,
		toggleSignUpPrompt
	};
}


export const userStore = createUserStore(apiUrl)
