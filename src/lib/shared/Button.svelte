<script lang="ts">
	export let style: string = "accent";
	export let big: boolean = false;
	export let disabled: boolean = false;
</script>

<button class="container {style}" class:big={big} class:disabled={disabled} on:click>
	<slot/>
</button>

<style lang="scss">
	$accent: #ff4655;

	.container {
		margin: 0;
		padding: 15px 30px;
		border: none;
		border-radius: 50px;

		font-size: 20px;
		font-weight: bold;

		cursor: pointer;
	}

	.big {
		display: block;
		width: 100%;
	}

	.disabled {
		pointer-events: none;
		cursor: not-allowed;
	}

	.accent {
		color: #f0f0f0;
		background-color: $accent;

		transition: .3s;
		&:hover {
			background-color: desaturate(darken($accent, 10%), 40%);
		}
	}

	.background {
		color: #f0f0f0;
		background-color: #111215;
	}
</style>
