<script>
	import { navigate } from "svelte-routing";
	import ImageStore from "../stores/ImageStore"
	import Card from "../shared/Card.svelte"

	export let filename = "";

	ImageStore.subscribe(data => {
		filename = data.filename
	});
	
	const imageCount = 2;
	let index = 0;

	const updateImage = () => {
		index = (index + 1) % imageCount;
		ImageStore.update(() => {
			return {filename: "altgirls/altgirl" + index + ".jpg"};
		});
	};

</script>

<main>
	<h1> Wybierz swojom alternatywke </h1>
	<p>One of the websites of all time</p>
	{#if $ImageStore.filename == 'altgirls/altgirl1.jpg'}
		<h3>I wish to swear allegiance to my Lord Chungus and to honor and defend the Word and Legacy of Chungus until the end of time.</h3>
	{:else}
		<h3>ALEKSANDER KLIIIIIIIIIIIIIIIK</h3>
	{/if}

	<div class="card">
		<Card><img src={filename} alt="alt gilr"> </Card>
	</div>
	<div>
		<button on:click={updateImage}>Next</button>
		<button on:click={() => navigate("/")}>Back</button>
	</div>
</main>

<style>
	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.card {
		margin: 25px;
	}

	main {
		text-align: center;
		margin: auto;
	}

	img {
		width: 500px;
	}

	button {
		border: 0;
		cursor: pointer;
		border-radius: 6px;
		padding: 8px 12px;
		font-weight: bold;
		box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
		margin: 0px 10px;
	}
</style>
