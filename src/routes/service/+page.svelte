<style>
	.theme-btn.custom-cta-btn {
		background-color: #000 !important;
		color: #EFFB53 !important;
		border: 2px solid #EFFB53 !important;
	}

	.theme-btn.custom-cta-btn:hover {
		background-color: #EFFB53 !important;
		color: #000 !important;
		border: 2px solid #EFFB53 !important;
		transform: translateY(-2px) !important;
		box-shadow: 0 4px 8px rgba(239, 251, 83, 0.3) !important;
	}

	.theme-btn.custom-cta-btn:hover * {
		color: #000 !important;
	}

	.theme-btn.custom-cta-btn:hover i {
		color: #000 !important;
	}

	.service-box-items {
		display: flex;
		flex-direction: row;
		height: 400px;
		margin-bottom: 30px;
		margin-left: 15px;
		margin-right: 15px;
	}

	.service-box-items .service-image {
		flex: 1;
		width: 50%;
		height: 100%;
	}

	.service-box-items .service-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.service-box-items .service-content {
		flex: 1;
		width: 50%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: 20px;
	}

	.service-box-items .service-content p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.service-box-items .service-content ul {
		overflow: hidden;
	}

	@media (max-width: 768px) {
		.service-box-items {
			flex-direction: column;
			height: auto;
		}

		.service-box-items .service-image,
		.service-box-items .service-content {
			width: 100%;
		}

		.service-box-items .service-image {
			height: 250px;
		}
	}
</style>

<!-- Service Section -->
<section class="service-section style-padding fix section-padding bg-cover" style="background-image: url('/assets/img/service/Pattern.png');">
	<div class="container">
		<div class="section-title text-center">
			<h6 class="wow fadeInUp">
				<img src="/assets/img/star.png" alt="img">
				Our Services
			</h6>
			<h2 class="wow fadeInUp" data-wow-delay=".3s">
				Intelligent digital solutions <br>
				<span>that transform your <b>business</b></span>
			</h2>
		</div>
		<div class="row">
			<div class="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
				<div class="service-box-items">
					<div class="service-image">
						<img src="/assets/img/service/01.jpg" alt="img">
					</div>
					<div class="service-content">
						<h3>
							AI & Automation
							Solutions
						</h3>
						<p>
							Smart systems that automate, optimize, and elevate your business with cutting-edge AI technology.
						</p>
						<ul class="list-unstyled mt-3" style="font-size: 0.9rem;">
							<li>✓ AI agents & chatbots</li>
							<li>✓ Workflow automation</li>
							<li>✓ Predictive analytics & insights</li>
							<li>✓ RAG & LLM-powered systems</li>
						</ul>
						<a href="/contact" class="link-btn">get started <i class="fa-sharp fa-regular fa-arrow-up-right"></i></a>
					</div>
				</div>
			</div>
			<div class="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
				<div class="service-box-items">
					<div class="service-image">
						<img src="/assets/img/service/02.jpg" alt="img">
					</div>
					<div class="service-content">
						<h3>
							Web & Mobile App
							Development
						</h3>
						<p>
							Scalable, responsive, and user-friendly applications built for performance and modern digital experiences.
						</p>
						<ul class="list-unstyled mt-3" style="font-size: 0.9rem;">
							<li>✓ Full-stack development</li>
							<li>✓ Mobile & tablet apps</li>
							<li>✓ API & microservice integration</li>
							<li>✓ Modern UI/UX design</li>
						</ul>
						<a href="/contact" class="link-btn">get started <i class="fa-sharp fa-regular fa-arrow-up-right"></i></a>
					</div>
				</div>
			</div>
			<div class="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
				<div class="service-box-items">
					<div class="service-image">
						<img src="/assets/img/service/03.jpg" alt="img">
					</div>
					<div class="service-content">
						<h3>
							Cloud & Server
							Management
						</h3>
						<p>
							Reliable, secure, and optimized infrastructure for your digital success with 24/7 monitoring and support.
						</p>
						<ul class="list-unstyled mt-3" style="font-size: 0.9rem;">
							<li>✓ Cloud setup & migration</li>
							<li>✓ CI/CD pipeline automation</li>
							<li>✓ Server scaling & monitoring</li>
							<li>✓ Backup & disaster recovery</li>
						</ul>
						<a href="/contact" class="link-btn">get started <i class="fa-sharp fa-regular fa-arrow-up-right"></i></a>
					</div>
				</div>
			</div>
			<div class="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
				<div class="service-box-items">
					<div class="service-image">
						<img src="/assets/img/service/04.jpg" alt="img">
					</div>
					<div class="service-content">
						<h3>
							Custom Software
							Development
						</h3>
						<p>
							Tailored software built to fit your goals—flexible, scalable, and future-ready enterprise solutions.
						</p>
						<ul class="list-unstyled mt-3" style="font-size: 0.9rem;">
							<li>✓ Enterprise systems & SaaS platforms</li>
							<li>✓ Database design & optimization</li>
							<li>✓ Business process automation</li>
							<li>✓ Consulting & technical support</li>
						</ul>
						<a href="/contact" class="link-btn">get started <i class="fa-sharp fa-regular fa-arrow-up-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section-4 fix bg-cover" style="background-image: url('/assets/img/cta-bg.jpg');">
	<div class="container">
		<div class="cta-wrapper-4">
			<h2 class="wow fadeInUp" data-wow-delay=".3s">Ready to transform your business with AI?</h2>
			<a href="/contact" class="theme-btn custom-cta-btn wow fadeInUp" data-wow-delay=".5s">
				Get Started Today <i class="fa-sharp fa-regular fa-arrow-up-right"></i>
			</a>
		</div>
	</div>
</section>

<!-- Benefit Section -->
<section class="benefit-section fix section-padding section-bg">
	<div class="container">
		<div class="benefit-wrapper">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="benefit-image wow fadeInLeft" data-wow-delay=".3s">
						<img src="/assets/img/benefit-image.jpg" alt="img">
					</div>
				</div>
				<div class="col-lg-6 mt-5 mt-lg-0">
					<div class="benefit-content">
						<div class="section-title">
							<h6 class="wow fadeInUp">
								<img src="/assets/img/star.png" alt="img">
								Why Choose Inquisitive Mind
							</h6>
							<h2 class="wow fadeInUp" data-wow-delay=".3s">
								The smartest way to <br>
								<span>scale your <b>business</b></span>
							</h2>
						</div>
						<div class="benefit-list">
							<div class="benefit-items wow fadeInUp" data-wow-delay=".3s">
								<div class="icon">
									<img src="/assets/img/icon/27.svg" alt="img">
								</div>
								<div class="content">
									<h4>AI-Powered Solutions</h4>
									<p>
										Every solution we build integrates cutting-edge AI technology. From automation to intelligent suggestions, we help you work smarter, not harder.
									</p>
								</div>
							</div>
							<div class="benefit-items wow fadeInUp" data-wow-delay=".5s">
								<div class="icon">
									<img src="/assets/img/icon/27.svg" alt="img">
								</div>
								<div class="content">
									<h4>Fully Customizable</h4>
									<p>
										No two businesses are alike. Our solutions are tailored to your specific needs, workflows, and goals. You get exactly what you need, nothing less.
									</p>
								</div>
							</div>
							<div class="benefit-items wow fadeInUp" data-wow-delay=".7s">
								<div class="icon">
									<img src="/assets/img/icon/27.svg" alt="img">
								</div>
								<div class="content">
									<h4>End-to-End Support</h4>
									<p>
										From discovery to deployment and beyond, we're with you every step of the way. Our team ensures your success with ongoing support and maintenance.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
