<script lang="ts">
	import Feed from "$lib/shared/Feed.svelte";
	import { sideProfileStore } from "$lib/sideProfileStore";

	let feedType = "new";
	sideProfileStore.hideSideProfile();
</script>

<div class="container">
	<Feed {feedType}/>
</div>

<style lang="scss">
</style>
