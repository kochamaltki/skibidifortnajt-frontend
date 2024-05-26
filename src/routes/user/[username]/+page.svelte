<script lang="ts">
    import type { UserPageData } from "./+page";
	import { userStore } from "$stores/userStore";
	import Feed from "$lib/shared/Feed.svelte";

    export let data: UserPageData;
</script>

<div class="container">
	{#await userStore.getUserId(data.username) then id}
		<Feed feedType={`by-user/${id}`}/>
	{/await}
</div>

<style lang="scss">
</style>
