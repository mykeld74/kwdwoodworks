<script>
	import Img from '$components/image.svelte';
	export let title;
	export let desc;
	export let image;
	export let width;
	// export let categories;
	export let slug;
	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ Product } = data);
</script>

<div class="productContainer">
	<div class="productImage">
		<Img source={Product[0].featuredImageUrl} altText={Product[0].title} classes="productPageImg" />
	</div>
	<div class="productInfo">
		<h2 class="productTitle">{Product[0].title}</h2>
		<p class="productDesc">{Product[0].desc}</p>
	</div>
</div>

<style>
	.productContainer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		padding: 20px;
		max-width: 1270px;
		margin: 0 auto;
		min-height: calc(100vh - 100px);
	}
</style>
