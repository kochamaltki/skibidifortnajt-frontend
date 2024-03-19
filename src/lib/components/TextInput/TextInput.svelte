<script lang="ts">
	export let placeholder: string = "Opisz sfojom altke...";
	export let input: string = "";
</script>

<form>
	<div class="search">
		<div class="icon">
			<slot name="left">
			</slot>
		</div>
		<input class="search-input" type="search" placeholder={placeholder} bind:value={input}>
		<div class="icon">
			<slot name="right">
			</slot>
		</div>
	</div>
</form>

<style lang="scss">
	$background: #222222;
	$foreground: #484848;
	$padding: 1rem;

	.search {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		column-gap: $padding;
		background-color: $background;
		padding: $padding;
		border-radius: 4rem;

		transition: filter .25s;

		&:hover {
			filter: brightness(130%);
		}
	}

	.search-input {
		font-size: 1rem;;
		color: white;
		
		outline: none;
		border: none;
		background: transparent;
		flex: 1;

		&::placeholder {
			color: $foreground;
			opacity: 1;
		}
	}

	.icon {
		display: flex;
		align-items: center;
	}
</style>
