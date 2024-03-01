<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "../routes/front_page.svelte";
	import Todo from "../routes/Todo.svelte";
	let url = "";
  </script>

<main>
	<h1>Hello Alternatywki!</h1>
	<p>Visit <a href="https://www.instagram.com/peat_lul/">this</a> to learn more about sigma male giga chad Pit Do.</p>
	<h3> ALTERNATYWKI PROSZE ZRUBCIE JUZ COS ZEMNOM</h3>
	<img src="altgirl.jpg" alt>
	<p>New Jeans here -> 
	<Link to="/todo">About</Link>
    </p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>