import App from './App.svelte';

const app = new App({
	//target: document.getElementById("app"),
	target: document.body,
	props: {
		name: 'alternatywki'
	}
});
export default app;