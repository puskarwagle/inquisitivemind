<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<!-- Preloader -->
<div id="preloader" class="preloader">
	<div class="animation-preloader">
		<div class="spinner"></div>
		<div class="txt-loading">
			<span data-text-preloader="A" class="letters-loading">A</span>
			<span data-text-preloader="I" class="letters-loading">I</span>
			<span data-text-preloader="F" class="letters-loading">F</span>
			<span data-text-preloader="O" class="letters-loading">O</span>
			<span data-text-preloader="R" class="letters-loading">R</span>
			<span data-text-preloader="G" class="letters-loading">G</span>
			<span data-text-preloader="E" class="letters-loading">E</span>
		</div>
		<p class="text-center">Loading</p>
	</div>
	<div class="loader">
		<div class="row">
			<div class="col-3 loader-section section-left"><div class="bg"></div></div>
			<div class="col-3 loader-section section-left"><div class="bg"></div></div>
			<div class="col-3 loader-section section-right"><div class="bg"></div></div>
			<div class="col-3 loader-section section-right"><div class="bg"></div></div>
		</div>
	</div>
</div>

<!-- Mouse Cursor -->
<div class="mouse-cursor cursor-outer"></div>
<div class="mouse-cursor cursor-inner"></div>

<!-- Back To Top -->
<button id="back-top" class="back-to-top" aria-label="Back to top">
	<i class="fa-regular fa-arrow-up"></i>
</button>

<!-- Offcanvas Area -->
<div class="fix-area">
	<div class="offcanvas__info">
		<div class="offcanvas__wrapper">
			<div class="offcanvas__content">
				<div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
					<div class="offcanvas__logo">
						<a href="/">
							<img src="/assets/img/logo/white-logo.svg" alt="logo-img">
						</a>
					</div>
					<div class="offcanvas__close">
						<button aria-label="Close menu"><i class="fas fa-times"></i></button>
					</div>
				</div>
				<p class="text d-none d-xl-block">
					Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
				</p>
				<div class="mobile-menu fix mb-3"></div>
				<div class="offcanvas__contact">
					<h4>Contact Info</h4>
					<ul>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon"><i class="fal fa-map-marker-alt"></i></div>
							<div class="offcanvas__contact-text"><a target="_blank" href="/contact">Main Street, Melbourne, Australia</a></div>
						</li>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon mr-15"><i class="fal fa-envelope"></i></div>
							<div class="offcanvas__contact-text"><a href="mailto:info@example.com">info@example.com</a></div>
						</li>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon mr-15"><i class="fal fa-clock"></i></div>
							<div class="offcanvas__contact-text"><span>Mon-Friday, 09am -05pm</span></div>
						</li>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon mr-15"><i class="far fa-phone"></i></div>
							<div class="offcanvas__contact-text"><a href="tel:+11002345909">+11002345909</a></div>
						</li>
					</ul>
					<div class="header-button mt-4">
						<a href="/contact" class="theme-btn text-center">Get A Quote</a>
					</div>
					<div class="social-icon d-flex align-items-center">
						<a href="#0" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
						<a href="#0" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
						<a href="#0" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
						<a href="#0" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="offcanvas__overlay"></div>

<!-- Header -->
<header id="header-sticky" class="header-1">
	<div class="container-fluid">
		<div class="mega-menu-wrapper">
			<div class="header-main">
				<div class="header-left">
					<div class="logo">
						<a href="/" class="header-logo">
							<img src="/assets/img/logo/white-logo.svg" alt="logo-img">
						</a>
					</div>
					<div class="mean__menu-wrapper">
						<div class="main-menu">
							<nav id="mobile-menu">
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/about">About Us</a></li>
									<li class="has-dropdown">
										<a href="/pages">Pages <i class="fa-solid fa-chevron-down"></i></a>
										<ul class="submenu">
											<li><a href="/service">Services</a></li>
											<li><a href="/team">Team</a></li>
											<li><a href="/pricing">Pricing</a></li>
											<li><a href="/faq">Our Faq</a></li>
										</ul>
									</li>
									<li><a href="/blog">Blog</a></li>
									<li><a href="/contact">Contact</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div class="header-right d-flex justify-content-end align-items-center">
					<a href="/login" class="join-text"><img src="/assets/img/discord.svg" alt="img"> Join now</a>
					<a href="#0" class="search-trigger search-icon" aria-label="Search"><i class="fa-regular fa-magnifying-glass"></i></a>
					<div class="header__hamburger d-xl-block my-auto">
						<div class="sidebar__toggle" role="button" aria-label="Toggle menu"><i class="fas fa-bars"></i></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Search Area -->
<div class="search-wrap">
	<div class="search-inner">
		<i class="fas fa-times search-close" id="search-close"></i>
		<div class="search-cell">
			<form method="get">
				<div class="search-field-holder">
					<input type="search" class="main-search-input" placeholder="Search...">
				</div>
			</form>
		</div>
	</div>
</div>

<!-- Main Content -->
{@render children()}

<!-- Footer -->
<footer class="footer-section">
	<div class="footer-bottom">
		<div class="container">
			<div class="footer-bottom-wrapper">
				<div class="logo-img wow fadeInUp" data-wow-delay=".3s">
					<a href="/">
						<img src="/assets/img/logo/white-logo.svg" alt="img">
					</a>
				</div>
				<p class="wow fadeInUp" data-wow-delay=".5s">Inquisitive Mind © 2024. All Rights Reserved.</p>
				<div class="social-icon wow fadeInUp" data-wow-delay=".7s">
					<a href="#0" aria-label="Discord"><i class="fa-brands fa-discord"></i></a>
					<a href="#0" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
					<a href="#0" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
					<a href="#0" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
				</div>
			</div>
		</div>
	</div>
</footer>
