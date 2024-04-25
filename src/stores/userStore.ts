import { writable } from "svelte/store";
import apiUrl from "./apiUrl";

export function createUserStore(apiUrl: string) {
	const data = writable({
		username: "username",
		displayName: "displayName",
		description: "description",
		id: -1,

		loggedIn:  false,
		showLogInPrompt: false,
		showSignUpPrompt: false
	});

	async function logInWithId(id: number) {
		let res = await fetch(apiUrl + "/api/get/profile/by-id/" + id);
		let d: any = await res.json();

		data.set({
			username: d.user_name,
			displayName: d.display_name,
			description: d.description,
			id: id,

			loggedIn: true,
			showLogInPrompt: false,
			showSignUpPrompt: false,
		});
	}

	async function logInWithUsername(username: string) {
		let res = await fetch(apiUrl + "/api/get/user/id/" + username);
		let id = await res.json();
			
		return logInWithId(id);
	}

	async function logIn(username: string, password: string, keepLoggedIn: boolean) {
		let endpoint: string = apiUrl + "/api/post/login";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: username,
				passwd: password,
				remember_password: keepLoggedIn
			})
		})
		.then(async response => {
			if (response.ok) {
				await userStore.logInWithUsername(username);
			}
			else {
				throw new Error(String(await response.text()));
			}
		})
	}

	async function signUp(username: string, password: string, keepLoggedIn: boolean) {
		let endpoint: string = apiUrl + "/api/post/signup";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: username,
				passwd: password,
				remember_password: keepLoggedIn
			})
		})
		.then(async response => {
			if (response.ok) {
				await userStore.logInWithUsername(username);
			}
			else {
				throw new Error(String(await response.text()));
			}
		})
	}

	async function logOut() {
		await fetch(apiUrl + "/api/post/logout", {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		})

		data.set({
			username: "username",
			displayName: "displayName",
			description: "description",
			id: -1,

			loggedIn:  false,
			showLogInPrompt: false,
			showSignUpPrompt: false
		});
	}

	function toggleLogInPrompt() {
		data.update(d => {
			return {
				...d,
				showLogInPrompt: !d.showLogInPrompt,
				showSignUpPrompt: false
			};
		})
	}

	function toggleSignUpPrompt() {
		data.update(d => {
			return {
				...d,
				showSignUpPrompt: !d.showSignUpPrompt,
				showLogInPrompt: false
			};
		})
	}

	return {
		...data,
		logInWithId,
		logInWithUsername,
		toggleLogInPrompt,
		toggleSignUpPrompt,
		signUp,
		logIn,
		logOut
	};
}

export const userStore = createUserStore(apiUrl)
