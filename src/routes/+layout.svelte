<script lang="ts">
	import '@fontsource-variable/outfit'

	import LogIn from "$components/LogIn.svelte";
	import SignUp from '$components/SignUp.svelte';
	import TopBar from '$components/TopBar.svelte';

</script>

<div class="container">
	<header>
		<TopBar/>
	</header>

	<slot/>

	<SignUp/>
	<LogIn/>
</div>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		width: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;

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
