<script lang="ts">
    import type { UserPageData } from "./+page";
	import { userStore } from "$lib/userStore";
	import { sideProfileStore } from "$lib/sideProfileStore";
	import Feed from "$lib/shared/Feed.svelte";

    export let data: UserPageData;
	sideProfileStore.viewSideProfileWithUsername(data.username)
</script>

<div class="container">
	{#await userStore.getUserId(data.username) then id}
		<Feed feedType={`by-user/${id}`}/>
	{/await}
</div>

<style lang="scss">
</style>
