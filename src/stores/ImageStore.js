import { writable } from 'svelte/store'

const ImageStore = writable(
	{
		filename: "altgirls/altgirl0.jpg"
	}
);

export default ImageStore;
