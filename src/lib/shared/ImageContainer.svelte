<script lang="ts">
    import Checkbox from "./Checkbox.svelte";
import Clickable from "./Clickable.svelte";
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
		<div class="changeButton">
			<Clickable>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"><path fill="#f0f0f0" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path></svg>
			</Clickable>
		</div>
		<img src="{images[currentIndex]}" alt="post content"/>
	</div>
{/if}

<style lang="scss">
	.changeButton {
		background-color: #111215;
		padding: 10px;
		border-radius: 100%;
		width: 40px;
		height: 40px;
		z-index: 2;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
