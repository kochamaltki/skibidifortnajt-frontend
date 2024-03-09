<script lang="ts">

export let displayName: string = "displayName";
export let username: string = "username"
export let desc: string = "description"

export let backgroundUrl: string = "/images/background.jpg"
export let profilePictureUrl: string = "/images/profilepicture.jpg"

</script>

<div class="container">
	<img class="profilepicture" src="{profilePictureUrl}" alt="profilepicture">
	<h1>{displayName}</h1>
	<h2>{username}</h2>
	<p>{desc}</p>
</div>

<style lang="scss">

$maxWidth: 250px;
$backgroundColor: #313131;

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: $backgroundColor;
	width: $maxWidth;
}

.profilepicture {
	max-width: $maxWidth - 175;

	border-radius: $maxWidth;
	border-style: solid;
	border-width: 8px;
	border-color: $backgroundColor;
}

h1 {
	margin: 0px;
}

</style>
