import { writable } from "svelte/store";

const userStore = writable({
	loggedIn:  false,
	username: "username",
	displayName: "displayName",
	description: "description",
	id: -1,
});

export default userStore;
