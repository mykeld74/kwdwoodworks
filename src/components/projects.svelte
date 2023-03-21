<script>
	// @ts-ignore
	import Card from '$components/card.svelte';

	export let Products;
</script>

<section class="projects" data-sveltekit-preload-code="viewport">
	<div class="container">
		{#each Products as { title, desc, featuredImageUrl, slug, categories, isSold }}
			<Card
				{title}
				{desc}
				image={featuredImageUrl}
				width="500"
				{slug}
				{categories}
				classes={`homepage ${slug.current}`}
				{isSold}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	.projects {
		width: calc(100% - 40px);
		max-width: 1160px;
		margin: 0 auto;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0;
	}
	.sectionHeadline {
		font-size: 1.5rem;
		font-weight: bold;
		font-family: var(--secondaryFontFamily);
		line-height: 1.3;
		padding: 20px;
		margin-bottom: 0;
		width: 100%;
		text-align: center;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
		padding: 20px;
		margin-top: 20px;
	}
</style>
