<script>
	import { Link , navigate} from "svelte-routing";
	import SearchBar from "../components/SearchBar.svelte";
	

</script>

<main>
	<SearchBar></SearchBar>
	<h1>Hello Alternatywki!</h1>
	<p>Visit <a href="https://www.instagram.com/peat_lul/">this</a> to learn more about sigma male giga chad Pit Do.</p>
	<h3>ALTERNATYWKI PROSZE ZRUBCIE JUZ COS ZEMNOM</h3>
	<img src="altgirl.jpg" alt="alt gril">
	<p>
		New Jeans here -> <Link to="/alternatywki">About</Link>
    </p>
	<button on:click={() => navigate("/profil")}>test</button>
</main>

<style>
	main {
		text-align: center;
	}

	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

</style>
