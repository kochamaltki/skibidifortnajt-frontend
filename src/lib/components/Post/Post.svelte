<script lang="ts">
	import { formatDistance } from 'date-fns'

	export let displayName: string = "displayName";
	export let username: string = "username";
	export let content: string = "ALEKSANDER KLIK"

	export let timePosted: number = 0;

	export let profilePictureUrl: string = "/images/profilepicture.jpg";

	const format = (date: number) => {
		return formatDistance(new Date(date), new Date(), { addSuffix: true });
	}
</script>

<div class="container">
	<div class="left">
		<img class="profilepicture" src="{profilePictureUrl}" alt="profilepicture">
		<div class="divider"></div>
	</div>
	<div class="content">
		<div class="header">
			<div class="profile">
				<div class="names">
					<h1>{displayName}</h1>
					<p>@{username}</p>
				</div>
			</div>
			<p>
				{format(timePosted)}
			</p>
		</div>

		<div class="postcontent">
			<h2>
				{content}
			</h2>
		</div>
	</div>
</div>

<style lang="scss">
	$profilePictureWidth: 4rem;
	$lightGray: #949494;

	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 2rem;
	}

	.container {
		background-color: #313131;
		padding: 2rem;
		border-radius: 30px;

		display: flex;
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
		align-items: flex-start;
		margin-left: 1rem;
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

	.divider {
		width: 2px;
		height: 100%;

		background-color: $lightGray;
	}
</style>
