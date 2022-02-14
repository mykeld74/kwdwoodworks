<script>
	import Img from '$components/image.svelte';
	export let title;
	export let desc;
	export let image;
	export let width;
	export let categories;
	export let slug;
</script>

<div class="card">
	<div class="card-image">
		<Img source={image} altText={title} {width} />
		<!-- <img src={image} alt={title} /> -->
	</div>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="card-text">{desc}</p>
		<!-- {#if categories}
			<p>{categories[0].title}</p>
		{/if} -->
	</div>
</div>

<style lang="scss">
	.card {
		min-height: 533px;
		border-radius: 10px;
		overflow: hidden;
		background: var(--gray-0);
		box-shadow: var(--shadow-3);

		@media (max-width: 400px) {
			min-height: auto;
		}
	}
	.card-image {
		/* height: 300px; */
		overflow: hidden;
		aspect-ratio: 5/3.25;
		@media (max-width: 400px) {
			height: auto;
		}
	}
	.card-body {
		padding: 10px 20px;
	}
	.card-text,
	.card-title {
		min-height: 56px;
		text-align: center;
	}
	.card-title {
		font-size: clamp(26px, 2.5vw, 30px);
	}
	.card-text {
		font-size: clamp(20px, 2vw, 24px);
	}
</style>
