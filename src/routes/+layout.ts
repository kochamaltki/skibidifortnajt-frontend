import apiUrl from "$stores/apiUrl"
import { userStore } from "$stores/userStore";

export const load = async () => {
	let res = await fetch(apiUrl + "/api/get/cookie", {
		credentials: "include"
	});

	if(res.ok) {
		let data = await res.json();
		userStore.logInWithId(data);
	}
}
