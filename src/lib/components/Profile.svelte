<script lang="ts">

export let displayName: string = "displayName";
export let username: string = "username"
export let desc: string = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."

export let backgroundUrl: string = "/images/background.jpg"
export let profilePictureUrl: string = "/images/profilepicture.jpg"

</script>

<div class="container">
	<div class="content">
		<div class="names">
			<img class="profilepicture" src="{profilePictureUrl}" alt="profilepicture">
			<h1>{displayName}</h1>
			<h2>@{username}</h2>
		</div>
		<p>{desc}</p>
		<button>My Profile</button>
	</div>
</div>

<style lang="scss">

$maxWidth: 320px;
$profilePictureWidth: 90px;

$backgroundColor: #313131;
$lightGray: #949494;

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: $backgroundColor;
	width: $maxWidth;
	border-radius: 30px;

	text-align: center;
}

.content {
	padding: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	row-gap: 38px;
}

.profilepicture {
	margin: 0px;
	max-width: $profilePictureWidth;

	border-radius: $maxWidth;
	border-style: solid;
	border-width: 8px;
	border-color: $backgroundColor;
}

h1 {
	margin: 0px;

	color: white;
	font-weight: normal;
	font-size: 32px;
}

h2 {
	margin: 0px;

	color: $lightGray;
 	font-weight: normal;
	font-size: 20px;
}

p {
	margin: 0px;

	color: white;
	font-size: 20px;
}

button {
	font-family: inherit;
	font-size: 16px;
	color: $lightGray;

	background-color: #424242;
	border: none;
	padding: 12px 70px;
	border-radius: 10px;

	transition: 0.4s;
	&:hover {
		filter: brightness(130%);
	}
}

</style>
