<script lang="ts">
	import Modal from "$lib/shared/Modal.svelte";
	import Button from "$lib/shared/Button.svelte";

	export let apiUrl: string = "http://localhost:8000"//"http://51.20.92.147:8000";

	let showModal: boolean = true;
	let hasValidInput: boolean = true;

	$: hasValidInput = usernameInput != "" && passwordInput != "";

	let usernameInput: string = ""
	let passwordInput: string = ""

	const logIn = async (username: string, password: string) => {
		let endpoint: string = apiUrl + "/api/post/login";
		let res = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: username,
				passwd: password
			})
		});
		let data = res.json();
		console.log(data);
	}
</script>

<Modal bind:showModal={showModal}>
	<form on:submit|preventDefault={() => logIn(usernameInput, passwordInput)}>
		<div class="container">
			<h1>Log In</h1>

			<div class="input">
				<div class="input-box">
					<input bind:value={usernameInput} type="text" placeholder="Username" required>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user"><path fill="#313646" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path></svg>
				</div>
				<div class="input-box">
					<input bind:value={passwordInput} type="password" placeholder="Password" required>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="lock"><path fill="#313646" d="M17,9V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path></svg>
				</div>
			</div>

			<div class="input">
				<Button type="submit" big={true} disabled={!hasValidInput} style={hasValidInput ? "accent" : "background"}>
					Continue
				</Button>

				<p>Don't have an account? <a href="/">Sign up</a></p>
			</div>
		</div>
	</form>
</Modal>

<style lang="scss">
	input {
		width: 100%;
		outline: none;
		border: none;

		font-size: 20px;

		background: transparent;
		color: #f0f0f0;
		
		&::placeholder {
			color: #313646;
		}
	}

	.input-box {
		width: 500px - 100px;
		background-color: #111215;
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 15px 30px;
		border-radius: 100px;
	}

	a {
		color: #ff4655;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
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
