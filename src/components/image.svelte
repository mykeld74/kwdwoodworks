<script lang="ts">
	export let source: string;
	export let altText: string;

	let src = `https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto/${source}`;
</script>

<img {src} alt={altText} class={source} loading="lazy" />

<style>
	img {
		width: 100%;
	}
</style>
