<script lang="ts">
	import Clickable from "$lib/shared/Clickable.svelte";
	import format from "$lib/formatDate";

	export let commentContent: string = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
	export let userId: number = -1;
	export let displayName: string = "displayName";
	export let profilePicture: string = "/images/altki/altka0.png";
	export let datePosted: number = 0;
</script>

<div class="container">
	<div class="left">
		<img src="{profilePicture}" alt="profile-pic" class="profile-pic">
	</div>

	<div class="mid">
		<div class="top">
			<h1>{displayName}</h1>
			<h2>{format(datePosted)}</h2>
		</div>
		<p>{commentContent}</p>
	</div>

	<div class="right">
		<Clickable>
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ellipsis-v"><path fill="#474c63" d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></svg>
		</Clickable>
	</div>
</div>

<style lang="scss">
	$white: #f0f0f0;
	$gray: #474c63;

	.container {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}

	h2 {
		color: $gray;
		font-size: 20px;
		font-weight: normal;

		margin: 0;
	}

	h1 {
		color: $white;
		font-weight: 550;
		font-size: 24px;

		margin: 0;
	}
	
	p {
		white-space: pre-wrap;
		font-weight: normal;
		font-size: 20px;

		cursor: text;
		
		margin: 0;
	}

	.top {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.mid {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
	}

	img {
		max-width: 50px;
		border-radius: 30px;
		user-select: none;
	}

	.icon {
		margin-top: 10px;
		width: 24px;
	}
</style>
