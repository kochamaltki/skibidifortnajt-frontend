<script lang="ts">
    import Feed from "$lib/shared/Feed.svelte";
	import { sideProfileStore } from "$lib/sideProfileStore";
	import type { SearchPageData } from "./+page";

    export let data: SearchPageData;
	sideProfileStore.hideSideProfile();
</script>

{#key data.query}
	<Feed feedType={`from-search/${data.query}`} timestamp={0} searchTerm={data.query}/>
{/key}
