<script>
	import { onMount } from 'svelte';
	import '$css/app.scss';
	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
</script>

<div class={isLoaded ? 'container' : 'isNotLoaded container'}>
	<slot />
</div>

<style>
	.isNotLoaded {
		display: none;
	}

	.container {
		background: url(https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto/Woodgrain)
			0 0 / cover no-repeat fixed;
		width: 100%;
		min-height: 200vh;
	}
</style>
