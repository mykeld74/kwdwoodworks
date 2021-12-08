<script>
	import { onMount } from 'svelte';
	import '$css/app.scss';
	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
	const d = new Date();
	let year = d.getFullYear();
</script>

<svelte:head>
	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-PRZ52TC');
	</script>
	<!-- End Google Tag Manager -->
</svelte:head>

<div class={isLoaded ? 'container' : 'isNotLoaded container'}>
	<!-- Google Tag Manager (noscript) -->
	<noscript
		><iframe
			src="https://www.googletagmanager.com/ns.html?id=GTM-PRZ52TC"
			height="0"
			width="0"
			style="display:none;visibility:hidden"
		/></noscript
	>
	<!-- End Google Tag Manager (noscript) -->
	<slot />
	<footer>
		@copyright {year} KWD Woodworks
	</footer>
</div>

<style>
	.isNotLoaded {
		display: none;
	}

	.container {
		background: url(https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_1600/Woodgrain)
			0 0 / cover no-repeat fixed;
		width: 100%;
		min-height: 200vh;
	}
	footer {
		background: #000;
		color: #fff;
		padding: 20px;
		margin-top: 30px;
	}
</style>
