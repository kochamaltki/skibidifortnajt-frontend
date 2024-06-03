<script lang="ts">
	export let input: string = "";
	export let placeholder: string = "";
	export let rows: number = 8;

	export let required: boolean = false;
</script>

<div class="container">
	<div class="left">
		<slot name="left"/>
		<textarea bind:value={input} {rows} {placeholder} {required} on:submit/>
	</div>
	<slot name="right"/>
</div>

<style lang="scss">
	.container {
		width: 100%;
		background-color: #111215;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 15px;

		padding: 15px 30px;
		border-radius: 30px;
	}

	.left {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.right {
		width: 100%;
		display: flex;
		align-items: flex-end;
		gap: 15px;
	}

	textarea {
		font-family: inherit;
		color: inherit;
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
