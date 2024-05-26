<script lang="ts">
	import '@fontsource-variable/outfit'

	import LogIn from "$components/LogIn.svelte";
	import SignUp from '$components/SignUp.svelte';
	import TopBar from '$components/TopBar.svelte';
	import CreatePost from '$components/CreatePost.svelte';
	import Card from '$lib/shared/Card.svelte';
	
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

	<div class="left">
		<Card>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow-growth"><path fill="#f0f0f0" d="M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z"></path></svg>
			trending
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chart"><path fill="#f0f0f0" d="M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path></svg>
			top
			<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="setting"><path fill="#f0f0f0" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path></svg>
			settings
		</Card>
	</div>

	<div class="right">
		<Card>
			TOILET
		</Card>
	</div>

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


	.left {
		position: fixed;
		top: 140px;
		left: 40px;
		width: calc(calc(100vw - 880px)*.5 - 40px);

		display: flex;
		flex-direction: row-reverse;
	}

	.right {
		position: fixed;
		top: 140px;
		right: 40px;
		width: calc(calc(100vw - 880px)*.5 - 40px);

		display: flex;
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
