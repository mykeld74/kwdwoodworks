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
	<!-- Google Analytics -->
	<script>
		window.ga = function () {
			ga.q.push(arguments);
		};
		ga.q = [];
		ga.l = +new Date();
		ga('create', 'UA-214743878-1', 'auto');
		ga('set', 'anonymizeIp', true);
		ga('set', 'transport', 'beacon');
		ga('send', 'pageview');
	</script>
	<script src="https://www.google-analytics.com/analytics.js" async></script>
	<!--  End Google Analytics -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript
	><iframe
		src="https://www.googletagmanager.com/ns.html?id=GTM-PRZ52TC"
		height="0"
		width="0"
		style="display:none;visibility:hidden"
		title="Google Tag Manager"
	/></noscript
>
<!-- End Google Tag Manager (noscript) -->
<div class={isLoaded ? 'container' : 'isNotLoaded container'}>
	<slot />
	<footer>
		<div><p>@copyright {year} KWD Woodworks</p></div>
		<div class="moreContent"><p>More content coming soon.</p></div>
		<div />
	</footer>
</div>

<style lang="scss">
	.isNotLoaded {
		display: none;
	}

	.container {
		/* background: url(https://res.cloudinary.com/kwdwoodworks-com/image/upload/f_auto,q_auto,w_1600/Woodgrain)
			0 0 / cover no-repeat fixed; */
		width: 100%;
		/* min-height: 200vh; */
	}
	footer {
		background: #000;
		color: #fff;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (max-width: 400px) {
			flex-direction: column;
		}
		div {
			width: 100%;
			@media (max-width: 400px) {
				text-align: center;
			}
		}
	}
	.moreContent {
		text-align: center;
	}
</style>
