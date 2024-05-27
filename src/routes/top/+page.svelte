<script lang="ts">
	import Feed from "$lib/shared/Feed.svelte";

	let feedType = "top";
</script>

<div class="container">
	<Feed {feedType} timestamp={0}/>
</div>

<style lang="scss">
</style>
