<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Img from '$components/image.svelte';
	import { PortableText } from '@portabletext/svelte';
	import Carousel from '$components/carousel.svelte';

	const width = '500';

	$: console.log('data: ', data.Product[0].additionalImages);

	//loop through images and add to carouselItems array
	$: carouselItems = [];
	$: carouselItems.push(featuredImageUrl);
	$: if (additionalImages) {
		additionalImages.forEach((image) => {
			carouselItems.push(image.public_id);
		});
	}

	$: console.log('carouselItems: ', carouselItems);

	const checkIsMobile = () => {
		if (innerWidth < 750) {
			isMobile = true;
		} else {
			isMobile = false;
		}
	};

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

	let currentImage;
	let setImage;
	let innerWidth: number;
	let isMobile: boolean;
	$: currentImage = featuredImageUrl;
	let setCurrentImage = (currentImage) => {
		setImage = `<img src="https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_${width}/${currentImage}" alt="${title}" class="productPageImg contain" loading="lazy" />`;
	};

	onMount(() => {
		setCurrentImage(currentImage);
		checkIsMobile();
	});
</script>

<svelte:window bind:innerWidth on:resize={checkIsMobile} />

<header>
	<a href="/">
		<div class="logoContainer">
			<img
				src="https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_75/kwdLogo"
				alt="KWD Woodworks Logo"
			/>
		</div>
	</a>
</header>

<div class="pageWrapper">
	<div class="productContainer" in:fade={{ duration: 500 }}>
		<div class="productImage">
			{#if isMobile && carouselItems.length > 1}
				<Carousel {carouselItems} />
			{:else}
				{@html setImage}
			{/if}
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
			{#if itemWidth || itemDepth || itemHeight}
				<div class="productDimensions">
					<p>
						Dimensions: {#if itemWidth}Width: {itemWidth}" x {/if}{#if itemDepth}Depth: {itemDepth}"
							x
						{/if}{#if itemHeight}Height: {itemHeight}"{/if}
					</p>
				</div>
			{/if}
			{#if price}
				<div class="productPrice">
					<p>Price: ${price}</p>
				</div>
			{/if}
		</div>
	</div>
	{#if additionalImages && !isMobile}
		<div class="additionalImagesContainer">
			<div class="additionalImage">
				<button on:click={setCurrentImage(featuredImageUrl)}>
					<Img source={featuredImageUrl} altText={title} classes="contain" {width} />
				</button>
			</div>
			{#each additionalImages as image}
				<div class="additionalImage">
					<button on:click={setCurrentImage(image.public_id)}>
						<Img source={image.public_id} altText={title} classes="contain" {width} />
					</button>
				</div>
			{/each}
		</div>
	{/if}
	<div class="backToHomeContainer">
		<a href="/"><p>&#8592; Back to Home</p></a>
	</div>
</div>

<style lang="scss">
	header {
		padding: 10px 20px;
		background: #444;
		border-bottom: 2px solid #fff;
	}
	.logoContainer {
		width: 75px;
		height: 75px;
		border-radius: 50%;
		border: 3px solid #000;
	}
	.pageWrapper {
		min-height: calc(100vh - 90px);
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
		border-bottom: 2px solid #fff;
		h1 {
			margin: 0;
		}
	}

	.additionalImagesContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(125px, 190px));
		grid-gap: 20px;
		padding-top: 5vh;
		max-width: 1270px;
		margin: 0 auto;
		&.mobile {
			overflow-y: scroll;
			overflow-x: hidden;
			-webkit-overflow-scrolling: touch;
			-ms-overflow-style: none;
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;
			}
			.additionalImage {
				margin-right: 20px;
			}
		}
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
	}
	.pageWrapper {
		background: #444;
		color: #fff;
	}
	.backToHomeContainer {
		width: calc(100% - 40px);
		max-width: 1270px;
		margin: 0 auto 20px;
		a {
			color: #fff;
			text-decoration: none;
			:hover {
				text-decoration: underline;
			}
		}
		p {
			font-size: clamp(16px, 2vw, 20px);
		}
	}
</style>
