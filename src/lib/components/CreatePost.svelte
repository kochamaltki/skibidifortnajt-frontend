<script lang="ts">
	import Modal from "$lib/shared/Modal.svelte";
	import Button from "$lib/shared/Button.svelte";
	import TextArea from "$lib/shared/TextArea.svelte";

	import { postStore } from "$stores/postStore";

	let postBody: string = "";
	$: hasValidInput = postBody != "";

	let error: boolean = false;
	let errorMessage: string = "";

	const handlePost = async () => {
		await postStore.addPost(postBody);
		postBody = "";
	}
</script>

<Modal bind:showModal={$postStore.showCreatePostPrompt}>
	<form on:submit|preventDefault={handlePost}>
		<div class="container">
			<h1>Create Post</h1>
			<div class="input width-style">
				<TextArea required={true} bind:input={postBody}/>
			</div>

			<div class="input">
				<Button type="submit" big={true} disabled={!hasValidInput} style={hasValidInput ? "accent" : "background"}>
					Publish
				</Button>

				{#if {error}}
					<h2> {errorMessage} </h2>
				{/if}
			</div>
		</div>
	</form>
</Modal>

<style lang="scss">
	h2 {
		color: #ff4655;
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 24px;
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
