<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Img from '$components/image.svelte';
	import { PortableText } from '@portabletext/svelte';
	import Carousel from '$components/carousel.svelte';

	const width = '500';

	//loop through images and add to carouselItems array
	$: carouselItems = [];
	$: carouselItems.push(featuredImageUrl);
	$: if (additionalImages) {
		additionalImages.forEach((image) => {
			carouselItems.push(image.public_id);
		});
	}

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
			<div class="logo"><Img source="kwdLogo" altText="KWD Logo" width="75" /></div>
			<div class="sawBladeContainer">
				<svg viewBox="0 0 4500 4500" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M-0.00021852 2315.8V2011.85C-0.00021852 2011.85 35.4127 2142.15 122.937 2142.15C161.192 2142.15 193.644 2127.22 217.805 2110.52C222.187 2045.96 229.53 1982.23 239.834 1919.45C88.9457 1819.95 59.6923 1731.23 59.6923 1731.23L138.334 1437.57C138.334 1437.57 138.808 1572.61 223.371 1595.24C260.087 1605.07 295.026 1599.27 322.622 1589.43C343.585 1528.31 367.272 1468.49 393.684 1410.09C273.826 1275.05 268.496 1181.83 268.496 1181.83L420.45 918.503C420.45 918.503 385.985 1049.04 461.785 1092.75C494.947 1111.82 530.241 1115.14 559.613 1112.77C595.499 1059.46 633.873 1008.06 674.496 958.541C593.486 796.731 612.436 705.283 612.436 705.283L827.517 490.287C827.517 490.287 760.482 607.439 822.306 669.391C849.428 696.517 882.827 708.837 911.844 714.167C960.166 672.116 1010.38 632.196 1062.49 594.764C1026.13 417.555 1068.06 334.163 1068.06 334.163L1331.35 182.184C1331.35 182.184 1236.24 278.015 1279.94 353.826C1299.01 386.875 1327.91 407.368 1354.32 420.043C1411.88 391.85 1470.86 366.264 1531.27 343.521C1542.04 163.35 1604.11 93.6982 1604.11 93.6982L1897.71 15.0438C1897.71 15.0438 1781.05 83.0372 1803.67 167.496C1813.5 204.336 1836.12 231.699 1858.51 250.77C1921.04 238.569 1984.64 229.33 2049.07 222.933C2106.16 51.2913 2184.21 0 2184.21 0H2488.12C2488.12 0 2357.84 35.4182 2357.84 122.957C2357.84 161.218 2372.76 193.675 2389.46 217.839C2454.01 222.222 2517.73 229.566 2580.5 239.872C2679.98 88.96 2768.69 59.7015 2768.69 59.7015L3062.3 138.356C3062.3 138.356 2927.28 138.83 2904.66 223.407C2894.83 260.128 2900.63 295.072 2910.46 322.672C2971.58 343.639 3031.39 367.33 3089.78 393.746C3224.79 273.869 3318 268.538 3318 268.538L3581.29 420.516C3581.29 420.516 3450.77 386.046 3407.07 461.857C3388 495.025 3384.68 530.325 3387.05 559.702C3440.35 595.594 3491.75 633.973 3541.26 674.603C3703.04 593.58 3794.47 612.533 3794.47 612.533L4009.44 827.529C4009.44 827.529 3892.3 760.483 3830.36 822.317C3803.24 849.443 3790.92 882.848 3785.59 911.869C3827.64 960.199 3867.55 1010.42 3904.97 1062.54C4082.16 1026.18 4165.53 1068.11 4165.53 1068.11L4317.49 1331.44C4317.49 1331.44 4221.67 1236.32 4145.87 1280.03C4112.83 1299.1 4092.34 1328 4079.67 1354.42C4107.86 1411.99 4133.44 1470.98 4156.18 1531.39C4336.32 1542.17 4405.96 1604.24 4405.96 1604.24L4484.6 1897.89C4484.6 1897.89 4416.62 1781.21 4332.18 1803.84C4295.34 1813.67 4267.98 1836.29 4248.91 1858.68C4261.11 1921.23 4270.35 1984.84 4276.75 2049.28C4448.72 2106.14 4500 2184.2 4500 2184.2V2488.15C4500 2488.15 4464.59 2357.85 4377.06 2357.85C4338.81 2357.85 4306.36 2372.78 4282.2 2389.48C4277.81 2454.04 4270.47 2517.77 4260.17 2580.55C4411.05 2680.05 4440.31 2768.78 4440.31 2768.78L4361.67 3062.43C4361.67 3062.43 4361.19 2927.39 4276.63 2904.76C4239.91 2894.93 4204.97 2900.73 4177.38 2910.57C4156.42 2971.69 4132.73 3031.51 4106.32 3089.91C4226.17 3224.95 4231.5 3318.17 4231.5 3318.17L4079.55 3581.5C4079.55 3581.5 4114.02 3450.96 4038.22 3407.25C4005.05 3388.18 3969.76 3384.86 3940.39 3387.23C3904.5 3440.54 3866.13 3491.95 3825.5 3541.46C3906.51 3703.27 3887.56 3794.72 3887.56 3794.72L3672.6 4009.71C3672.6 4009.71 3739.64 3892.56 3677.81 3830.61C3650.69 3803.48 3617.29 3791.16 3588.27 3785.83C3539.95 3827.88 3489.74 3867.8 3437.62 3905.24C3473.98 4082.44 3432.06 4165.84 3432.06 4165.84L3168.77 4317.82C3168.77 4317.82 3263.88 4221.99 3220.17 4146.17C3201.11 4113.12 3172.21 4092.63 3145.8 4079.96C3088.24 4108.15 3029.25 4133.74 2968.85 4156.48C2958.07 4336.65 2896.01 4406.3 2896.01 4406.3L2602.41 4484.96C2602.41 4484.96 2719.07 4416.96 2696.45 4332.5C2686.62 4295.66 2664 4268.3 2641.61 4249.23C2579.08 4261.43 2515.48 4270.67 2451.05 4277.07C2393.96 4448.71 2315.91 4500 2315.91 4500H2012C2012 4500 2142.28 4464.58 2142.28 4377.04C2142.28 4338.78 2127.36 4306.33 2110.66 4282.16C2046.11 4277.78 1982.39 4270.43 1919.62 4260.13C1820.13 4411.04 1731.43 4440.3 1731.43 4440.3L1437.82 4361.64C1437.82 4361.64 1572.84 4361.17 1595.46 4276.59C1605.29 4239.87 1599.49 4204.93 1589.66 4177.33C1528.54 4156.36 1468.73 4132.67 1410.34 4106.25C1275.33 4226.13 1182.12 4231.46 1182.12 4231.46L918.832 4079.48C918.832 4079.48 1049.35 4113.95 1093.05 4038.14C1112.12 4004.98 1115.44 3969.68 1113.07 3940.3C1059.77 3904.41 1008.37 3866.03 958.863 3825.4C797.078 3906.42 705.646 3887.47 705.646 3887.47L490.683 3672.47C490.683 3672.47 607.817 3739.52 669.759 3677.68C696.881 3650.56 709.199 3617.15 714.528 3588.13C672.483 3539.8 632.57 3489.58 595.144 3437.46C417.963 3473.82 334.583 3431.89 334.583 3431.89L182.629 3168.56C182.629 3168.56 278.444 3263.68 354.244 3219.97C387.288 3200.9 407.777 3172 420.45 3145.58C392.262 3088.01 366.68 3029.02 343.94 2968.61C163.798 2957.83 94.1569 2895.76 94.1569 2895.76L15.0415 2602.35C15.0415 2602.35 83.0243 2719.02 167.47 2696.4C204.303 2686.57 231.662 2663.94 250.73 2641.55C238.531 2579.01 229.293 2515.4 222.898 2450.96C51.2831 2393.86 -0.00021852 2315.8 -0.00021852 2315.8ZM2250.06 2523.81C2401.18 2523.81 2523.77 2401.21 2523.77 2250.06C2523.77 2098.91 2401.18 1976.31 2250.06 1976.31C2098.93 1976.31 1976.35 2098.91 1976.35 2250.06C1976.23 2401.21 2098.82 2523.81 2250.06 2523.81Z"
						class="sawBlade"
						fill="#000"
					/>
				</svg>
			</div>
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
		position: relative;
		width: 76px;
		height: 76px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
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
	.sawBladeContainer {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		/* z-index: -1; */
	}

	.logo {
		position: relative;
		top: 0;
		width: 80%;
		height: 80%;
		z-index: 5;
	}
	.sawBlade {
		fill: #000000;
		animation: spin 7s linear infinite;
		@media (prefers-reduced-motion) {
			animation-name: none;
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
		padding-bottom: 20px;
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
