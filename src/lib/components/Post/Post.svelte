<script lang="ts">
	import { formatDistance } from 'date-fns'

	export let displayName: string = "displayName";
	export let username: string = "username";
	export let content: string = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.";

	export let timePosted: number = 0;

	export let profilePictureUrl: string = "/images/profilepicture.jpg";

	const format = (date: number) => {
		return formatDistance(new Date(date), new Date(), { addSuffix: true });
	}
</script>



<style lang="scss">

</style>
