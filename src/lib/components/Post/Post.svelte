<script lang="ts">
	import { formatDistance } from 'date-fns'

	export let displayName: string = "displayName";
	export let username: string = "username";
	export let content: string = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."

	export let timePosted: number = 0;

	export let profilePictureUrl: string = "/images/profilepicture.jpg";

	const format = (date: number) => {
		return formatDistance(new Date(date), new Date(), { addSuffix: true });
	}
</script>

<div class="container">
	<div class="content">
		<div class="header">
			<div class="profile">
				<img class="profilepicture" src="{profilePictureUrl}" alt="profilepicture">
				<div class="names">
					<h1>{displayName}</h1>
					<p>@{username}</p>
				</div>
			</div>
			<p>
				{format(timePosted)}
			</p>
		</div>
		<div class="body">
			<div class="divider">|</div>
			<div class="postcontent">
				<h2>
					{content}
				</h2>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	$profilePictureWidth: 4rem;
	$lightGray: #949494;

	.container {
		background-color: #313131;
		padding: 2rem;
		border-radius: 30px;

		display: flex;
		flex-direction: column;
		column-gap: 0rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.body {
		display: flex;
	}

	.divider {
		background-color: $lightGray;
		color: transparent;

		width: 0px;
		padding: .0625rem;
		margin: .5rem 2rem .5rem 1.65rem;
	}

	p {
		margin: 0px;

		color: $lightGray;
		font-size: 1.25rem;
	}

	h1 {
		margin: 0px;

		color: white;
		font-weight: normal;
		font-size: 2rem;
	}

	h2 {
		margin: 0px;
		
		font-weight: normal;
		font-size: 1.25rem;
	}

	.profile {
		display: flex;
		column-gap: 1em;
	}

	.profilepicture {
		max-width: $profilePictureWidth;
		border-radius: $profilePictureWidth;
	}

	.names {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.postcontent {
		color: white;
		padding: .5em;
	}

</style>
