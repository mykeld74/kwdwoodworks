<script lang="ts">
	import { Image } from '$components';
	export let title;
	export let desc;
	export let image;
	export let width;
	// export let categories;
	export let slug;
	export let classes;
	export let isSold;
</script>

<a href="/products/{slug.current}">
	<div class="card">
		<div class="card-image">
			<Image source={image} altText={title} {width} {classes} />
			{#if isSold}
				<div class="sold">
					<p>Sold</p>
				</div>
			{/if}

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
		transform: translate3d(0, 0, 0);
		transition: all 0.3s ease-in-out;

		@media (max-width: 400px) {
			min-height: auto;
		}
		&:hover {
			transform: translate3d(-5px, -5px, 0);
			box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.7);
			border-radius: 20px;
		}
	}
	.card-image {
		position: relative;
		overflow: hidden;
		aspect-ratio: 5/3.5;
		// object-fit: cover;

		@media (max-width: 400px) {
			height: auto;
		}
	}

	.sold {
		position: absolute;
		top: 12px;
		left: -45px;
		padding: 6px 0 2px;
		background: var(--red);
		display: flex;
		align-items: center;
		justify-content: center;
		transform: rotate(-35deg);
		width: 180px;
		border: 2px solid #fff;
		p {
			font-size: 22px;
			font-weight: 700;
			color: #fff;
			margin: 0;
		}
	}
	.card-body {
		padding: 10px 20px;
	}

	.card-text,
	.card-title {
		min-height: 70px;
		text-align: center;
		font-size: clamp(26px, 2.5vw, 30px);
		font-weight: 300;
	}

	.card-text {
		font-size: clamp(16px, 2vw, 20px);
		font-family: var(--secondaryFontFamily);
		font-weight: 100;
	}
	a {
		text-decoration: none;
	}
</style>
