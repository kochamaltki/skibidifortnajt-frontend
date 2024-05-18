<script lang="ts">
    import { onMount } from "svelte";

	export let images: Array<string> = [];
	let currentIndex: number = 9;

	$: arrLength = images.length;
	$: showRight = currentIndex < (arrLength - 1);
	$: showLeft = currentIndex > 0;

	onMount(() => {
		for(let i = 0; i < 10; i+=1) {
			images = [...images, `/images/altki/altka${i}.png`]
		}
	})
</script>
	
{#if arrLength}
	<div class="container">
		<img src="{images[currentIndex]}" alt="post content"/>
	</div>
{/if}

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
