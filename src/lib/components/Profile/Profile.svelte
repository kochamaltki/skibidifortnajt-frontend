<script lang="ts">
	export let displayName: string = "displayName";
	export let username: string = "username";
	export let desc: string = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";

	export let backgroundUrl: string = "/images/background.jpg";
	export let profilePictureUrl: string = "/images/profilepicture.jpg";

	export let myProfile: boolean = true;
</script>

<div class="container">
	<div class="content">
		<div class="names">
			<img class="profilepicture" src="{profilePictureUrl}" alt="profilepicture">
			<h1>{displayName}</h1>
			<h2>@{username}</h2>
		</div>
		<p>{desc}</p>
		{#if myProfile}
			<button>My Profile</button>
		{/if}
	</div>
	<img class="backgroundimage" src="{backgroundUrl}" alt="background">
</div>

<style lang="scss">
	$maxWidth: 20rem;
	$profilePictureWidth: 6rem;

	$backgroundColor: #313131;
	$lightGray: #949494;

	.container {
		padding-top: 3.25rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: $backgroundColor;
		width: $maxWidth;
		border-radius: 30px;

		text-align: center;
	}

	.backgroundimage {
		position: absolute;
		width: inherit;
		object-fit: cover;
		top: 0;
		height: 9rem;

		z-index: 0;
		border-radius: 30px 30px 0px 0px;
	}

	.content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		row-gap: 2rem;
		z-index: 1;
	}

	.profilepicture {
		margin: 0px;
		max-width: $profilePictureWidth;

		border-radius: $maxWidth;
		border-style: solid;
		border-width: 0.5rem;
		border-color: $backgroundColor;
	}

	h1 {
		margin: 0px;

		color: white;
		font-weight: normal;
		font-size: 2rem;
	}

	h2 {
		margin: 0px;

		color: $lightGray;
		font-weight: normal;
		font-size: 1.25rem;
	}

	p {
		margin: 0px;

		color: white;
		font-size: 1.25rem;
	}

	button {
		font-family: inherit;
		font-size: 1rem;
		color: $lightGray;

		background-color: #424242;
		border: none;
		padding: 0.75rem 4.5rem;
		border-radius: 10px;

		transition: 0.4s;
		&:hover {
			filter: brightness(130%);
		}
	}
</style>
