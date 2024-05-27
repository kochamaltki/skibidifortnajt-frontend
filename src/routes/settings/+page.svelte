<script lang="ts">
	import Card from "$lib/shared/Card.svelte";
	import { sideProfileStore } from "$lib/sideProfileStore";
	import { userStore } from "$lib/userStore";
    import { get } from "svelte/store";

	let data = get(userStore);
	if(data.loggedIn) {
		sideProfileStore.viewSideProfile(data.id);
	} else {
		sideProfileStore.hideSideProfile();
	}
</script>

<!--
TODO: 
- profile picture
- display name
- description
- delete account
-->

<div class="container">
	<Card>
		
	</Card>
</div>

<style lang="scss">
	.container {
		width: 800px;
	}
</style>
