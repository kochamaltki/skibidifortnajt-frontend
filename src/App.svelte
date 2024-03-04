<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/FrontPage.svelte";
	import Alternatywki from "./routes/Alternatywki.svelte";
	import Profil from "./routes/Profile.svelte";
	export let url = "";
</script>

<Router {url}>
	<Route path="/alternatywki" component={Alternatywki} />
	<Route path="/profil" component={Profil} />
	<Route path="/"><Home /></Route>
</Router>
