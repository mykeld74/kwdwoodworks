<script>
	import { onMount } from 'svelte';
	import '$css/app.scss';
	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
</script>

<div class={isLoaded ? '' : 'isNotLoaded'}>
	<slot />
</div>

<style>
	.isNotLoaded {
		display: none;
	}
</style>
