<script lang="ts">
	export let images: Array<string> = [];
	let currentIndex: number = 0;

	$: arrLength = images.length;
	$: showRight = currentIndex < arrLength - 1;
	$: showLeft = currentIndex > 0;
</script>
	
{#if arrLength}
	<img src="{images[currentIndex]}" alt="post content"/>
{/if}

{showLeft}, {showRight}

<style lang="scss">
</style>
