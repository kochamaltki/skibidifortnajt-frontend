<script lang="ts">
    import Feed from "$lib/shared/Feed.svelte";
import type { SearchPageData } from "./+page";

    export let data: SearchPageData;
</script>

{#key data.query}
	<Feed feedType={`from-search/${data.query}`} timestamp={0} searchTerm={data.query}/>
{/key}
