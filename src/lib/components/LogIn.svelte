<script lang="ts">
	import Modal from "$lib/shared/Modal.svelte";
	import Clickable from "$lib/shared/Clickable.svelte";

	let showModal: boolean = true;
</script>

<Modal bind:showModal={showModal}>
	<div class="container">
		<div class="top">
		<h1>Log In</h1>
		<Clickable on:click={() => { showModal = false }}>
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times"><path fill="#474c63" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
		</Clickable>
		</div>
		<!-- input fields here -->
	</div>
</Modal>

<style lang="scss">
	.container {
		width: 800px - 40px;
		display: flex;
		flex-direction: column;
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
