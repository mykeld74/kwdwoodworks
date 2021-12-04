<script>
	import Img from '$components/image.svelte';
	export let title;
	export let desc;
	export let image;
</script>

<div class="card">
	<div class="card-image">
		<Img source={image} altText={title} />
	</div>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="card-text">{desc}</p>
	</div>
</div>

<style>
	.card {
		min-height: 395px;
		border-radius: 10px;
		overflow: hidden;
		background: #fff;
	}
	.card-image {
		height: 250px;
		overflow: hidden;
	}
	.card-body {
		padding: 10px 20px;
	}
</style>
