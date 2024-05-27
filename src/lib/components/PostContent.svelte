<script lang="ts">
	export let searchTerm: string = "";
	export let content: string = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";

	interface Chunk {
		type: string,
		content: string
	}

	const addHighlights = (text: string, search: string) => {
		if(search === "") {
			return [{
				content: text,
				type: "normal"
			}]
		}

		const reg = new RegExp(`(${search})`, 'gi');
		const chunks = text.split(reg);

		return chunks.map(chunk => ({
			content: chunk,
			type: reg.test(chunk) ? "search" : "normal"
		}))
	}
</script>

<h2>
	{#each addHighlights(content, searchTerm) as chunk}
		{#if chunk.type == "hashtag"}
			<span class="hashtag">{chunk.content}</span>
		{:else if chunk.type == "search"}
			<span class="highlight">{chunk.content}</span>
		{:else}
			{chunk.content}
		{/if}
	{/each}
</h2>

<style lang="scss">
	$accent: #ff4655;
	$foreground: #f0f0f0;

	.highlight {
		color: $foreground;

	   background-color: $accent;
	   border-radius: 4px;
	}

	h2 {
		white-space: pre-wrap;
		color: $foreground;
		font-weight: normal;
		font-size: 24px;

		cursor: text;
		
		margin: 0;
	}
</style>
