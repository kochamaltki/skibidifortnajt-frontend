<script lang="ts">
	import Card from "$lib/shared/Card.svelte";
	import { sideProfileStore } from "$lib/sideProfileStore";

	sideProfileStore.hideSideProfile();
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
