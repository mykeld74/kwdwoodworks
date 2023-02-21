<script lang="ts">
	export let source: string;
	export let altText: string;
	export let width = 'auto';
	export let classes = '';

	let src = `https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_${width}/${source}`;
</script>

<img {src} alt={altText} class={classes} loading="lazy" />

<style>
	img {
		width: 100%;
	}
</style>
