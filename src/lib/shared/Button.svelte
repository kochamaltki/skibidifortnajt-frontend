<script lang="ts">
	export let style: string = "accent";
</script>

<button class="container {style}" on:click>
	<slot/>
</button>

<style lang="scss">
	.container {
		margin: 0;
		padding: 15px 30px;
		border: none;
		border-radius: 50px;

		font-size: 20px;
		font-weight: bold;

		cursor: pointer;
	}

	.accent {
		color: #f0f0f0;
		background-color: #ff4655;

		transition: .3s;
		&:hover {
			filter: brightness(88%);
		}
	}

	.background {
		color: #f0f0f0;
		background-color: #111215;
	}
</style>
