<script lang="ts">
	import Feed from "$lib/shared/Feed.svelte";
	import { sideProfileStore } from "$lib/sideProfileStore";

	let feedType = "top";
	sideProfileStore.hideSideProfile();
</script>

<div class="container">
	<Feed {feedType} timestamp={0}/>
</div>

<style lang="scss">
</style>
