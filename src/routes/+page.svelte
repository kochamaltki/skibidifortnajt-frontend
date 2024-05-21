<script lang="ts">
	import Feed from "$components/Feed.svelte";

	let feedType = "new";
</script>

<div class="container">
	<Feed {feedType}/>
</div>

<style lang="scss">
</style>
