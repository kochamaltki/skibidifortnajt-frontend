<script lang="ts">
	export let input: string = "";
	export let placeholder: string = "";
	export let type: string = "text";

	export let required: boolean = false;

	const handleInput = (event: any) => {
		input = event.target.value;
	}
</script>

<div class="container">
	<div class="left">
		<slot name="left"/>
		<input value={input} {type} {placeholder} {required} on:input={handleInput} on:submit autocomplete="on">
	</div>
	<slot name="right"/>
</div>

<style lang="scss">
	.container {
		width: 100%;
		background-color: #111215;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15px;

		padding: 15px 30px;
		border-radius: 100px;
	}

	.left {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 15px;
	}

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
</style>
