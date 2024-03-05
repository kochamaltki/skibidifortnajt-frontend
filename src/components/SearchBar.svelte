<script>
	import Navbar from "../shared/Navbar.svelte";
</script>

<Navbar>
	<span slot="left">
		<div class="left">
			<img src="altgirl.jpg" alt="altgirl" class="logo">
			ALEKSANDER KLIK
		</div>
	</span>
	<span slot="mid">
		<div class="mid">
			<input type="text" placeholder="Szukaj Alternatywek uwu nya">
		</div>
	</span>
	<span slot="right">
		<div class="right">
			<button>Log in</button>
			<button>Sign Up</button>
		</div>
	</span>
</Navbar>

<style>
.logo {
	border-radius: 100%;
	max-width: 50px;
	max-height: 50px;
}

.left {
	display: flex;
	align-items: center;
	/* background: yellow; */
}

.mid {
	display: flex;
	justify-content: center;
	align-items: center;
	
	/* background: red; */
}

.right {
	display: flex;
	justify-content: right;
	align-items: center;

	/* background: green; */
}

input, button {
	margin: 0;
}
</style>
