<script lang="ts">
	import Card from "$lib/shared/Card.svelte";

	export let displayName = "Very Long Display Name";
	export let username = "username";
	export let description = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
	export let profilePicture = "/images/altki/altka0.png"
</script>

<Card>
	<div class="inner">
		<div class="top">
			<img src={profilePicture} alt="">
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
		gap: 40px;
	}
</style>
