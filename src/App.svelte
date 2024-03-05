<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/FrontPage.svelte";
	import Alternatywki from "./routes/Alternatywki.svelte";
	export let url = "";
</script>

<Router {url}>
	<Route path="/alternatywki" component={Alternatywki} />
	<Route path="/"><Home /></Route>
</Router>
