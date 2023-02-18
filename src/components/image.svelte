<script lang="ts">
	export let source: string;
	export let altText: string;
	export let width = 'auto';

	let src = `https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_${width}/${source}`;
</script>

<img {src} alt={altText} class={source} loading="lazy" />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
