<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/front_page.svelte";
	import Todo from "./routes/Todo.svelte";
	export let url = "";
  </script>

<Router {url}>
	<div>
	  <Route path="/todo" component={Todo} />
	  <Route path="/"><Home /></Route>
	</div>
</Router>