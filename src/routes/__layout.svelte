<script>
	import { onMount } from 'svelte';
	import '$css/app.scss';
	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
	const d = new Date();
	let year = d.getFullYear();
</script>

<div class={isLoaded ? 'container' : 'isNotLoaded container'}>
	<slot />
	<footer>
		@copyright {year} KWD Woodworks
	</footer>
</div>

<style>
	.isNotLoaded {
		display: none;
	}

	.container {
		background: url(https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_1600/Woodgrain)
			0 0 / cover no-repeat fixed;
		width: 100%;
		min-height: 200vh;
	}
	footer {
		background: #000;
		color: #fff;
		padding: 20px;
		margin-top: 30px;
	}
</style>
