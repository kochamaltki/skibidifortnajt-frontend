<script lang="ts">
</script>

<button type="button" class="container" on:click>
	<slot/>
</button>

<style lang="scss">
	.container {
		all: unset;
		cursor: pointer;
		user-select: none;
	}
</style>
