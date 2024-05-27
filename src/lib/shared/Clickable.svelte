<script lang="ts">
	export let expand: boolean = false;
</script>

<button type="button" class="container" class:expand on:click>
	<slot/>
</button>

<style lang="scss">
	.container {
		all: unset;
		cursor: pointer;
		user-select: none;
	}

	.expand {
		width: 100%;
	}
</style>
