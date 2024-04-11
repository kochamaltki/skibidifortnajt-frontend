<script lang="ts">
	import Modal from "$lib/shared/Modal.svelte";
	import Clickable from "$lib/shared/Clickable.svelte";
	import Button from "$lib/shared/Button.svelte";

	let showModal: boolean = true;
	let hasValidInput: boolean = true;
	let showPassword: boolean = false;
</script>

<Modal bind:showModal={showModal}>
	<form on:submit={(e) => alert(e)}>
		<div class="container">
			<div class="top">
				<h1>Log In</h1>
				<Clickable on:click={() => { showModal = false }}>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times"><path fill="#474c63" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
				</Clickable>
			</div>
			<!-- input fields here -->
			<div class="input">
				<input type="text" placeholder="Username">
				<input type={showPassword ? "text" : "password"} placeholder="Password">
				<p>Don't have an account? <a href="#">Sign up</a></p>
			</div>
			<Button big={true} disabled={!hasValidInput} style={hasValidInput ? "accent" : "background"}>
				Continue
			</Button>
		</div>
	</form>
</Modal>

<style lang="scss">
	input {
		width: 500px - 100px;
		outline: none;
		border: none;
		border-radius: 100px;

		font-size: 24px;
		padding: 15px 30px;

		background-color: #111215;
		color: #f0f0f0;
		
		&::placeholder {
			color: #181b29;
		}
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
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}

	.container {
		width: 500px - 40px;
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icon {
		width: 24px;
	}

	h1 {
		margin: 0;
		font-size: 36px;
	}
</style>
