<script lang="ts">
	import '../app.css';
	import Chatbot from '$lib/components/Chatbot.svelte';

	let { children } = $props();
</script>

<!-- Preloader -->
<div id="preloader" class="preloader">
	<div class="animation-preloader">
		<div class="spinner"></div>
		<div class="txt-loading">
			<span data-text-preloader="I" class="letters-loading">I</span>
			<span data-text-preloader="N" class="letters-loading">N</span>
			<span data-text-preloader="Q" class="letters-loading">Q</span>
			<span data-text-preloader="U" class="letters-loading">U</span>
			<span data-text-preloader="I" class="letters-loading">I</span>
			<span data-text-preloader="S" class="letters-loading">S</span>
			<span data-text-preloader="I" class="letters-loading">I</span>
			<span data-text-preloader="T" class="letters-loading">T</span>
			<span data-text-preloader="I" class="letters-loading">I</span>
			<span data-text-preloader="V" class="letters-loading">V</span>
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
					Inquisitive Mind Tech delivers intelligent AI and automation solutions that transform the way businesses operate. From custom software development to cloud infrastructure, we build digital solutions that drive real growth.
				</p>
				<div class="mobile-menu fix mb-3"></div>
				<div class="offcanvas__contact">
					<h4>Contact Info</h4>
					<ul>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon"><i class="fal fa-map-marker-alt"></i></div>
							<div class="offcanvas__contact-text"><a target="_blank" href="/contact">Remote-first company</a></div>
						</li>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon mr-15"><i class="fal fa-envelope"></i></div>
							<div class="offcanvas__contact-text"><a href="mailto:hello@inquisitivemind.tech">hello@inquisitivemind.tech</a></div>
						</li>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon mr-15"><i class="fab fa-discord"></i></div>
							<div class="offcanvas__contact-text"><a href="#0">Join our Discord</a></div>
						</li>
						<li class="d-flex align-items-center">
							<div class="offcanvas__contact-icon mr-15"><i class="far fa-briefcase"></i></div>
							<div class="offcanvas__contact-text"><a href="/service">Our Services</a></div>
						</li>
					</ul>
					<div class="header-button mt-4">
						<a href="/contact" class="theme-btn text-center">Get Started</a>
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
				</div>
				<div class="header-right d-flex justify-content-end align-items-center">
					<div class="mean__menu-wrapper">
						<div class="main-menu">
							<nav id="mobile-menu">
								<ul>
									<li><a href="/jobquest">JobQuest</a></li>
									<li><a href="/inqcrm">InqCRM</a></li>
									<li><a href="/aiagents">AI Agents</a></li>
									<li><a href="/pricing">Pricing</a></li>
									<li class="has-dropdown">
										<a href="#0">Resources <i class="fa-solid fa-chevron-down"></i></a>
										<ul class="submenu">
											<li><a href="/service">Our Services</a></li>
											<li><a href="/about">About</a></li>
											<li><a href="/faq">FAQ</a></li>
											<li><a href="/team">Team</a></li>
											<li><a href="/contact">Contact</a></li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</div>
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

<!-- Chatbot -->
<Chatbot />

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
