<script lang="ts">
	import Card from "$lib/shared/Card.svelte";

	export let displayName = "Display Name";
	export let username = "username";
	export let description = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
	export let profilePicture = "";
	export let id = -1;

	const getProfilePicture= (res: string) => {
		if(res == "") {
			return `/images/altki/altka${id % 10}.png`;
		}

		return res;
	}

	let profilePictureUrl = getProfilePicture(profilePicture);
</script>

<Card>
	<div class="inner">
		<div class="top">
			{#if profilePictureUrl != ""}
				<img src={profilePictureUrl} alt="">
			{/if}
			<div class="names">
				<h1>{displayName}</h1>
				<h2>@{username}</h2>
			</div>
		</div>
		<p>{description}</p>
	</div>
</Card>

<style lang="scss">
	$gray: #474c63;
	img {
		width: 128px;
		height: 128px;
		border-radius: 64px;
	}

	h2 {
		color: $gray;
		font-weight: normal;
	}

	p {
		font-size: 23px;
		margin: 0px 20px;
	}
	
	h1, h2 {
		padding: 0;
		margin: 0;
	}

	.inner {
		word-break: break-word;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}

	.names {
		display: flex;
		flex-direction: column;
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: 40px;
	}

	@media (max-width: 1550px) {
		.top {
			flex-direction: column;
		}
	}
</style>
