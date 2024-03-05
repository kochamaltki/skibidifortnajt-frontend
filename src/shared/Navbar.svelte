<script>
</script>

<div class="navbar">
	<div class="child left">
		<slot name="left">Left</slot>
	</div>
	<div class="child mid">
		<slot name="mid">Middle</slot>
	</div>
	<div class="child right">
		<slot name="right">Right</slot>
	</div>
</div>

<style>

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px;
	background-color: white;
}

.child {
	flex: 1;
	text-align: center;
	align-items: center
}

.left {
	text-align: left;
}

.right {
	text-align: right;
}
</style>
