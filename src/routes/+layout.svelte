<script lang="ts">
	import '@fontsource-variable/outfit'

	import LogIn from "$components/LogIn.svelte";
	import SignUp from '$components/SignUp.svelte';
	import TopBar from '$components/TopBar.svelte';
	import CreatePost from '$components/CreatePost.svelte';
	
	import { userStore } from '$stores/userStore';
	import apiUrl from '$stores/apiUrl';

	import { onMount } from 'svelte';

	onMount(async () => {
		fetch(apiUrl + "/api/get/cookie", {
			credentials: "include"
		}).then(async res => {
			if(res.ok) {
				let id = await res.json();
				userStore.logInWithId(id);
			}
		});
	});
</script>

<div class="container">
	<header>
		<TopBar/>
	</header>

	<slot/>

	<SignUp/>
	<LogIn/>
	<CreatePost/>
</div>

<style lang="scss">
	header {
		position: sticky;
		z-index: 8;
		top: 0;
		width: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 40px;
	}

	:global(html) {
		font-family: 'Outfit Variable', sans-serif;
		color: #f0f0f0;
	}

	:global(body) {
		background-color: #111215;
		padding: 0px;
		margin: 0px;
	}
</style>
