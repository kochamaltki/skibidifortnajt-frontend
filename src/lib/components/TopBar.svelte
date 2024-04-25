<script lang="ts">
    import Input from "$lib/shared/Input.svelte";
	import Button from "$lib/shared/Button.svelte";
	import { userStore } from "$stores/userStore";
    import { postStore } from "$stores/postStore";
</script>

<div class="container">
	<div class="logo">
		<h1>Logo</h1>
	</div>
	<div class="input">
		<Input placeholder="Search..." type="search">
			<svg slot="left" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><path fill="#313646" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
		</Input>
	</div>
	<div class="right">
		{#if $userStore.loggedIn}
			<!-- TODO: Add user profile picture from the store -->
			<Button on:click={userStore.logOut}>Log Out</Button>
			<Button on:click={postStore.toggleCreatePostPrompt}>Create</Button>
		{:else}
			<Button on:click={userStore.toggleSignUpPrompt}>Sign Up</Button>
			<Button on:click={userStore.toggleLogInPrompt}>Log In</Button>
		{/if}
	</div>
</div>

<style lang="scss">
    $bg: #181B29;
    $red: #FF4655;
    $maxWidth: 60px;

	.logo, .input, .right {
		width: 30%;
	}

	.input {
		width: 600px;
		display: flex;
	}

	.right {
		display: flex;
		flex-direction: row-reverse;
		gap: 40px;
	}

	.icon {
		width: 24px;
	}

    .container{
		padding: 0 40px;
        display: flex;
        align-items: center;
		justify-content: space-between;

        background-color: $bg;
		height: 100px;
    }
    .logo{
        h1{
			padding: 0;
			margin: 0;
            font-size: 48px;
			color: #f0f0f0;
        }
    }
</style>
