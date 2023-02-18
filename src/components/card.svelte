<script>
	import Img from '$components/image.svelte';
	export let title;
	export let desc;
	export let image;
	export let width;
	// export let categories;
	export let slug;
	export let classes;
</script>

<a href="/products/{slug.current}">
	<div class="card">
		<div class="card-image">
			<Img source={image} altText={title} {width} {classes} />
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
</a>

<style lang="scss">
	.card {
		min-height: 450px;
		border-radius: 0;
		overflow: hidden;
		background: #222;
		color: #fff;

		@media (max-width: 400px) {
			min-height: auto;
		}
	}
	.card-image {
		overflow: hidden;
		aspect-ratio: 5/3;
		object-fit: cover;
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
		font-size: clamp(26px, 2.5vw, 30px);
		font-weight: 300;
	}

	.card-text {
		font-size: clamp(16px, 2vw, 20px);
		font-family: var(--lightFamily);
		font-weight: 100;
	}
	a {
		text-decoration: none;
	}
</style>
