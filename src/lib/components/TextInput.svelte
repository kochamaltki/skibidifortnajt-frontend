<script lang="ts">
	export let placeholder: string = "Opisz sfojom altke...";
	export let input: string = "";
</script>

<div class="search">
	<div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><path fill="#36394A" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
	</div>
	<input class="search-input" type="search" placeholder={placeholder} bind:value={input}>
	<div class="icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sliders-v-alt"><path fill="#36394A" d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"></path></svg>
	</div>
</div>

<style lang="scss">
	$background: #222222;
	$foreground: #484848;
	$padding: 1rem;

	.search {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: $padding;
		background-color: $background;
		padding: $padding;
		border-radius: 100px;
        width: 608px;
        height: 28px;
		transition: filter .25s;
		margin-top: 20px;
		margin-bottom: 20px;

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
        svg{
            width: 20px;
        }
	}
</style>