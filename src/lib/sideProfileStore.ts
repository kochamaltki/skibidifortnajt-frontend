import { writable } from "svelte/store";
import { userStore } from "./userStore";
import apiUrl from "./apiUrl";

export function createSideProfileStore(apiUrl: string) {
	const data = writable({
		username: "username",
		displayName: "displayName",
		description: "description",
		id: -1,

		showSideProfile: false
	});

	function updateStore(newData: any) {
		data.update((d: any) => {
			return {
				...d,
				...newData
			}
		})
	}

	async function viewSideProfile(id: number) {
		let user = await userStore.getUserData(id);
		updateStore({
			...user,
			showSideProfile: true
		});
	}

	async function viewSideProfileWithUsername(username: string) {
		await viewSideProfile(await userStore.getUserId(username))
	}

	function hideSideProfile() {
		updateStore({
			showSideProfile: false
		})
	}

	return {
		...data,
		hideSideProfile,
		viewSideProfile,
		viewSideProfileWithUsername
	};
}

export const sideProfileStore = createSideProfileStore(apiUrl)
