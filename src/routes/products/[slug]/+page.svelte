<script lang="ts">
	import { fade } from 'svelte/transition';
	import Img from '$components/image.svelte';
	import { PortableText } from '@portabletext/svelte';

	const width = '500';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ Product } = data);
	$: ({
		title,
		desc,
		featuredImageUrl,
		fullDesc,
		itemWidth,
		itemDepth,
		itemHeight,
		price,
		additionalImages
	} = Product[0]);
</script>

<div class="pageWrapper">
	<div class="productContainer" in:fade={{ duration: 500 }}>
		<div class="productImage">
			<Img source={featuredImageUrl} altText={title} classes="productPageImg contain" {width} />
		</div>
		<div class="productInfo">
			<div class="productHeader">
				<h1 class="productTitle">{title}</h1>
			</div>
			{#if fullDesc}
				<div class="productDesc">
					<PortableText value={fullDesc} />
				</div>
			{:else if desc && !fullDesc}
				<div class="productDesc">
					<p>{desc}</p>
				</div>
			{/if}
			{#if itemWidth && itemDepth && itemHeight}
				<div class="productDimensions">
					<p>Dimensions: W: {itemWidth}" x D: {itemDepth}" x H: {itemHeight}"</p>
				</div>
			{/if}
			{#if price}
				<div class="productPrice">
					<p>Price: ${price}</p>
				</div>
			{/if}
		</div>
	</div>
	{#if additionalImages}
		<div class="additionalImagesContainer">
			{#each additionalImages as image}
				<div class="additionalImage">
					<Img source={image.public_id} altText={title} classes="contain" {width} />
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.pageWrapper {
		min-height: calc(100vh - 120px);
	}
	.productContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
		grid-gap: 60px;
		padding-top: 5vh;
		width: calc(100% - 40px);
		max-width: 1270px;
		margin: 0 auto;
	}
	.productHeader {
		border-bottom: 2px solid #000;
		h1 {
			margin: 0;
		}
	}

	.additionalImagesContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
		grid-gap: 20px;
		padding-top: 5vh;
		max-width: 1270px;
		margin: 0 auto;
	}
</style>
