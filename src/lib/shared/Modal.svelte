<script lang="ts">
	import Card from "./Card.svelte";
	import Clickable from "./Clickable.svelte";

	export let showModal: boolean = true;
</script>

<svelte:window on:wheel|nonpassive|={e => {
	if(showModal)
		e.preventDefault();
}} />
{#if showModal}
<Clickable on:click={() => {showModal = false}}>
	<div class="background">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="container" on:click|stopPropagation>
			<Card>
				<slot/>
			</Card>
		</div>
	</div>
</Clickable>
{/if}

<style lang="scss">
	.background {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		position: fixed;

		background-color: rgba(0,0,0,.75);
		backdrop-filter: blur(5px);

		display: flex;
	 	justify-content: center;
		align-items: center;

		// Needed because otherwise likes are rendered over the blur???
		z-index: 9;
	}

	.container {
		z-index: 99;
		cursor: auto;
		user-select: text;
	}

</style>
