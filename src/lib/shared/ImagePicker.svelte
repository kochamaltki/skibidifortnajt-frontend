<script lang="ts">
	import { UniqueContainer } from "$stores/postStore";

	export let files: any = [];
	let urls: UniqueContainer<{filename:string, url:string}, string> = new UniqueContainer<{filename:string, url:string}, string>;

	$: if (files.length) {
		urls.addItem({filename:files[0].name, url:URL.createObjectURL(files[0])}, files[0].name + files[0].lastModified)
	}
</script>

<label for="file-input" class="container">
	{#if files.length}
		{#key files}
			{#each urls.getItems() as file}
				<div class="file">
					{file.filename}
					<img src={file.url} alt="">
				</div>
			{/each}
		{/key}
	{:else}
		<div class="file">
			Upload Files to preview them
			<div class="iconContainer">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image-plus"><path fill="#f0f0f0" d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z"></path></svg>
			</div>
		</div>
	{/if}
	<input bind:files={files} id="file-input" type="file" accept="image/*">
</label>


<style lang="scss">
	img {
		height: 50px;
		max-width: 100px;
		border-radius: 10px;
	}

	.icon {
		width: 50px;
	}
	
	.container {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 10px;

		background-color: #111215;
		border-radius: 30px;
		box-sizing: border-box;
		width: 100%;
		padding: 30px;
	}

	.file {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	input {
		display: none;
	}
</style>
