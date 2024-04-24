<script lang="ts">
	export let input: string = "";
	export let text: string = "";
	export let checked: boolean = true;

	export let required: boolean = false;

	const handleInput = (event: any) => {
		input = event.target.value;
	}
</script>

<div class="container">
	<input id="checkbox" type="checkbox" {required} bind:checked={checked} on:input={handleInput} on:submit>
	<label for="checkbox">{text}</label>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15px;

		padding: 15px 30px;
		border-radius: 100px;
	}

	input {
		cursor: pointer;
		accent-color: #ff4655;
	}

	label {
		cursor: pointer;
	}
</style>
