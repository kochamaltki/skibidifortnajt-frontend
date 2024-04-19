<script lang="ts">
	import Modal from "$lib/shared/Modal.svelte";
	import Button from "$lib/shared/Button.svelte";
	import Input from "$lib/shared/Input.svelte";

	import { userStore } from "../../stores/userStore";
	import apiUrl from "../../stores/apiUrl";

	let hasValidInput: boolean = true;
	$: hasValidInput = usernameInput != "" && passwordInput != "";

	let usernameInput: string = ""
	let passwordInput: string = ""

	let error: boolean = false;
	let errorMessage: string = "";

	const signUp = async (username: string, password: string) => {
	
	}
</script>

<Modal bind:showModal={$userStore.showSignUpPrompt}>
	<form on:submit|preventDefault={() => signUp(usernameInput, passwordInput)}>
		<div class="container">
			<h1>Sign Up</h1>
			<div class="input width-style">
				<Input placeholder="Username" required={true} bind:input={usernameInput}>
					<svg slot="right" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user"><path fill="#313646" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path></svg>
				</Input>
				<Input placeholder="Password" required={true} bind:input={passwordInput} type="password">
					<svg slot="right" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="lock"><path fill="#313646" d="M17,9V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path></svg>
				</Input>
			</div>

			<div class="input">
				<Button type="submit" big={true} disabled={!hasValidInput} style={hasValidInput ? "accent" : "background"}>
					Continue
				</Button>

				{#if {error}}
					<h2> {errorMessage} </h2>
				{/if}

				<p>Already have an account? <a href="/">Log in</a></p>
			</div>
		</div>
	</form>
</Modal>

<style lang="scss">
	a {
		color: #ff4655;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

	h2 {
		color: #ff4655;
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 24px;
	}

	p {
		margin: 0;
	}

	.input {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}

	.width-style {
		width: 500px - 100px;
	}

	.container {
		width: 500px - 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 60px;
	}

	.icon {
		width: 24px;
	}

	h1 {
		margin: 0;
		font-size: 36px;
	}
</style>
