import { get, writable } from "svelte/store";
import apiUrl from "./apiUrl";

export function createUserStore(apiUrl: string) {
	const data = writable({
		username: "username",
		displayName: "displayName",
		description: "description",
		profilePicture: "",
		id: -1,

		loggedIn:  false,
		showLogInPrompt: false,
		showSignUpPrompt: false
	});

	async function deleteProfilePicture(userId: number) {
		let endpoint: string = apiUrl + "/api/post/remove-pfp";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: userId
			})
		})
	}

	async function setProfilePicture(userId: number, imageId: number) {
		let endpoint: string = apiUrl + "/api/post/set-pfp";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				image_id: imageId,
				user_id: userId
			})
		})
	}

	async function changeDisplayName(newDisplayName: string) {
		let endpoint: string = apiUrl + "/api/post/change/display-name";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				new_display_name: newDisplayName
			})
		})
	}

	async function changeDescription(newDescription: string) {
		let endpoint: string = apiUrl + "/api/post/change/description";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				new_description: newDescription
			})
		})
	}

	async function deleteAccount(id: number) {
		let endpoint: string = apiUrl + "/api/post/delete-user";
		await fetch(endpoint, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: id
			})
		})
	}

	async function sync() {
		let d = get(data);
		let synced = await getUserData(d.id);
		
		data.update(oldData => {
			return {
				...oldData,
				...synced
			}
		})
	}

	async function getUserData(id: number): Promise<any> {
		let res = await fetch(apiUrl + "/api/get/profile/by-id/" + id);
		let d: any = await res.json();

		let pfp = "";
		if(d.pfp_image != "") pfp = apiUrl + "/api/get/image/" + d.pfp_image;

		return {
			username: d.user_name,
			displayName: d.display_name,
			description: d.description,
			profilePicture: pfp,
			id: id,
		};
	}

	async function getUserId(username: string) {
		let res = await fetch(apiUrl + "/api/get/user/id/" + username);
		let id = await res.json();

		return id;
	}

	async function logInWithId(id: number) {
		let res = await fetch(apiUrl + "/api/get/profile/by-id/" + id);
		let d: any = await res.json();

		let pfp = "";
		if(d.pfp_image != "") pfp = apiUrl + "/api/get/image/" + d.pfp_image;

		data.set({
			username: d.user_name,
			displayName: d.display_name,
			description: d.description,
			profilePicture: pfp,
			id: id,

			loggedIn: true,
			showLogInPrompt: false,
			showSignUpPrompt: false,
		});
	}

	async function logInWithUsername(username: string) {
		return logInWithId(await getUserId(username));
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
			profilePicture: "",
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
		getUserData,
		getUserId,
		logInWithId,
		logInWithUsername,
		toggleLogInPrompt,
		toggleSignUpPrompt,
		signUp,
		logIn,
		logOut,
		changeDisplayName,
		changeDescription,
		sync,
		deleteAccount,
		setProfilePicture,
		deleteProfilePicture
	};
}

export const userStore = createUserStore(apiUrl)
