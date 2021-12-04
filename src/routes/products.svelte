<script>
	import { onMount } from 'svelte';
	let ready = false;
	onMount(() => (ready = true));
	export let products;
	console.log(products);
</script>
