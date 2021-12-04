<script context="module">
	import client from '$lib/client';

	export async function load() {
		const query = `*[_type == "product"]{
      _id,
      title,
      "slug": slug.current,
      "additionalImages": images[].asset,
      "featuredImage": featuredImage.asset,
      tags,
      categories,
    }`;
		const products = await client.fetch(query);
		return { props: { products } };
	}
</script>

<script>
	import { onMount } from 'svelte';
	let ready = false;
	onMount(() => (ready = true));
	export let products;
	console.log(products);
</script>

{#if ready}
	<div>
		{#each products as product, i}
			<div class="product">
				<div class="product-image">
					<!-- <img src={product.featuredImage} /> -->
				</div>
				<div class="product-info">
					<h3>{product.title}</h3>
					<p>{product.slug}</p>
					<p>{product.tags}</p>
					<p>{product.categories}</p>
				</div>
			</div>
		{/each}
	</div>
{/if}
