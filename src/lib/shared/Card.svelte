<script lang="ts">
	export let limitheight: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container" on:click class:limitheight>
	<slot/>
</div>

<style lang="scss">
	.container {
		box-shadow: 2px 5px 10px 3px rgba(0,0,0, .5);
		padding: 30px;
		background-color: #181b29;
		border-radius: 15px;
	}

	.limitheight {
		max-height: 800px;
		overflow: auto;
	}
</style>
