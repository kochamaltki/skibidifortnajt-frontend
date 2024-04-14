<script lang="ts">
	import '@fontsource-variable/outfit'
</script>

<div class="container">
	<slot/>
</div>

<style lang="scss">
	:global(html) {
		font-family: 'Outfit Variable', sans-serif;
		color: #f0f0f0;
	}

	:global(body) {
		background-color: #111215;
		padding: 0px;
		margin: 0px;
	}
</style>
