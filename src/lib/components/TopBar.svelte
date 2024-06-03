<script lang="ts">
    import Input from "$lib/shared/Input.svelte";
	import Button from "$lib/shared/Button.svelte";
	import Clickable from "$lib/shared/Clickable.svelte";

	import { userStore } from "$lib/userStore";
	import { postStore } from "$lib/postStore";
    import { goto } from "$app/navigation";

	let input: string = "";
	const workingGoto = (query: string) => {
		// normal goto doesnt work for some reason /shrug
		setTimeout(() => goto(query), 0);
	};

	const isWhitespaceString = (str: string) => !/\S/.test(str);
</script>

<div class="container">
	<div class="logo">
		<Clickable on:click={() => goto("/")}>
			<h1>Logo</h1>
		</Clickable>
	</div>
	<form on:submit={() => {
		if(!isWhitespaceString(input)) {
			workingGoto(`/search/${encodeURI(input)}`);
		}
		else {
			workingGoto("/top");
		}
	}}>
			<div class="input">
			<Input bind:input={input} placeholder="Search..." type="search">
				<svg slot="left" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><path fill="#313646" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
				<Clickable slot="right">
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sliders-v-alt"><path fill="#313646" d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"></path></svg>
				</Clickable>
			</Input>
		</div>
	</form>
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

	form {
		all: unset;
	}

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
		box-shadow: 0px 5px 10px 3px rgba(0,0,0, .5);
		padding: 0 40px;
        display: flex;
        align-items: center;
		justify-content: space-between;

        background-color: $bg;
		height: 100px;
		gap: 40px;
    }

	.right {
		flex-shrink: 0;
	}

    .logo{
        h1{
			padding: 0;
			margin: 0;
            font-size: 48px;
			color: #f0f0f0;
        }
    }

	@media (max-width: 1300px) {
		.logo, .right {
			width: unset;
		}

		.input {
			width: 600px;
		}
	}

	@media (max-width: 1100px) {
		.input {
			width: unset;
		}
	}
</style>
