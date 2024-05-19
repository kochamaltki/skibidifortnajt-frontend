<script lang="ts">
	import Clickable from "./Clickable.svelte";
	import { onMount } from "svelte";

	export let images: Array<string> = [];
	let currentIndex: number = 0;
	let isHovered: boolean = false;

	$: arrLength = images.length;
	$: showRight = (currentIndex < (arrLength - 1));
	$: showLeft = (currentIndex > 0);

	onMount(() => {
		for(let i = 0; i < 17; i+=1) {
			images = [...images, `/images/altki/altka${i}.png`]
		}
	})
</script>
	
{#if arrLength}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div class="container" on:mouseover={() => isHovered = true} on:mouseout={() => isHovered = false}>
		<div class="buttons">
			{#if showLeft}
				<Clickable on:click={() => {
					currentIndex = Math.max(0, currentIndex-1);
				}}>
					<div class="changeButton left">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-left"><path fill="#f0f0f0" d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"></path></svg>
					</div>
				</Clickable>
			{/if}
			{#if showRight}
				<Clickable on:click={() => {
					currentIndex = Math.min(arrLength-1, currentIndex+1);
				}}>
					<div class="changeButton right">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right"><path fill="#f0f0f0" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path></svg>
					</div>
				</Clickable>
			{/if}
		</div>
		<div class="bg" style="background-image: url({images[currentIndex]});"></div>
		<img src="{images[currentIndex]}" alt="post content"/>
	</div>
{/if}

<style lang="scss">
	$button-size: 40px;

	.bg {
		position: absolute;
		z-index: 0;
		top: -25%;
		left: -25%;

		filter: blur(100px) brightness(50%);
		background-position: center;
		background-size: cover;
		height: 150%;
		width: 150%;
	}

	.changeButton {
		margin: 0 20px;
		background-color: #111215;
		padding: 10px;
		border-radius: 100%;
		width: $button-size;
		height: $button-size;
		z-index: 3;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		top: calc(50% - calc(0.5 * $button-size));

		transition: .3s;
		&:hover {
			filter: brightness(70%);
		}
	}

	.left {
		left: 0;
	}

	.right {
		right: 0;
	}

	img {
		height: 100%;
		width: 100%;
		max-height: inherit;

		object-fit: contain;

		position: inherit;
		z-index: inherit;
	}

	.buttons {
		display: none;
	}

	.container {
		display: flex;
		justify-content: center;
		border-radius: inherit;
		position: relative;
		z-index: 2;
		overflow: hidden;

		max-height: 740px;

		&:hover > div {
			display: flex;
		}
	}
</style>
