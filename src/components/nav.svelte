<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/products">Products</a></li>
		<!-- <li><a href="/about">About Me</a></li> -->
		<li><a href="/contact">Contact Me</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		width: 100%;
		height: 50px;
		background-color: #333;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 2vw;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
		background-color: #333;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	li {
		font-size: clamp(18px, 2.5vw, 24px);
		display: flex;
		align-items: center;
		color: #fff;
		border-right: 1px solid #fff;
		padding: 0 3vw;
		height: 100%;
		margin: 0;
		&:last-child {
			border-right: none;
		}
		a {
			color: #fff;
			text-decoration: none;
		}
	}
</style>
