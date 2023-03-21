<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let carouselItems: Array<T> = [];
	export let carouselStyle = 'fly';
	export let hideButtons = false;
	let currentSlideItem = 0;
	let xValIn = 500;
	let xValOut = -500;
	let autoPlay = false;

	const nextImage = () => {
		xValIn = 500;
		xValOut = -500;
		currentSlideItem = (currentSlideItem + 1) % carouselItems.length;
	};
	const prevImage = () => {
		xValIn = -500;
		xValOut = 500;
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % carouselItems.length;
		} else {
			currentSlideItem = carouselItems.length - 1;
		}
	};

	let autoPlayCarousel;

	$: if (autoPlay) {
		clearInterval(autoPlayCarousel);
		autoPlayCarousel = setInterval(() => {
			nextImage();
		}, 3500);
	} else {
		clearInterval(autoPlayCarousel);
	}
</script>

<!-- <div
	class="carouselWrapper"
	on:mouseenter={() => (autoPlay = false)}
	on:mouseleave={() => (autoPlay = true)}
> -->
<div class="carouselWrapper">
	<div class="carousel">
		{#if carouselStyle === 'fade'}
			{#each [carouselItems[currentSlideItem]] as item (currentSlideItem)}
				<img
					in:fade={{ duration: 500 }}
					out:fade={{ duration: 500 }}
					src={`https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_350/${item}`}
					alt={item}
					class="carousel-image"
				/>
			{/each}
		{:else}
			{#each [carouselItems[currentSlideItem]] as item (currentSlideItem)}
				<img
					in:fly={{ x: xValIn, duration: 500 }}
					out:fly={{ x: xValOut, duration: 500 }}
					src={`https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_350/${item}`}
					alt={item}
					class="carousel-image"
				/>
			{/each}
		{/if}
	</div>
	{#if !hideButtons}
		<button class="btn prevSlide" on:click={() => prevImage()}
			><svg viewBox="0 0 210 464" fill="none" xmlns="http://www.w3.org/2000/svg" class="btnIcon">
				<path
					class="arrows"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M208.278 464L209.966 462.843L104.166 232H103.653L209.453 1.15709L207.764 1.52588e-05H106.817L0.486725 232H1L107.33 464H208.278Z"
				/>
			</svg></button
		>
		<button class="btn nextSlide" on:click={() => nextImage()}
			><svg viewBox="0 0 210 464" fill="none" xmlns="http://www.w3.org/2000/svg" class="btnIcon">
				<path
					class="arrows"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.17496 1.52588e-05L0.486725 1.15707L106.286 232H106.8L1 462.843L2.68823 464H103.636L209.966 232H209.453L103.123 1.52588e-05H2.17496Z"
				/>
			</svg>
		</button>
	{/if}
</div>

<style lang="scss">
	.carousel {
		position: relative;
		width: 100%;
		overflow: hidden;
		aspect-ratio: 3/2;
	}
	.carouselWrapper {
		position: relative;
	}

	.carousel-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.prevSlide {
		position: absolute;
		top: 50%;
		left: -20px;
		transform: translateY(-50%);
		z-index: 1;
	}
	.nextSlide {
		position: absolute;
		top: 50%;
		right: -20px;
		transform: translateY(-50%);
		z-index: 1;
	}
	.btn {
		border: none;
		background: transparent;
		cursor: pointer;
		.btnIcon {
			height: 25px;
		}
	}
	.arrows {
		fill: #fff;
	}
</style>
