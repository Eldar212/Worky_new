'use strict';
document.addEventListener('DOMContentLoaded', () => {

	function headerTabs() {

		const slides = document.querySelectorAll('.slide'),
			next = document.querySelector('.next-arrow'),
			prev = document.querySelector('.prew-arrow'),
			slideDescription = document.querySelectorAll('.slide-description');

		function hideTabContent() {
			slides.forEach(slide => {
				slide.classList.add('hide');
				slide.classList.remove('show');
			});
		}

		function showTabContent(i = 0) {
			slides[i].classList.remove('hide');
			slides[i].classList.add('show');
		}

		hideTabContent();
		showTabContent();

		let a = 0;
		next.addEventListener('click', () => {
			if (a < slides.length - 1) {
				a++;
				hideTabContent();
				showTabContent(a);
			} else {
				a = 0;
				hideTabContent();
				showTabContent(a);
			}
		})

		let b = slides.length - 1;
		prev.addEventListener('click', () => {
			if (b <= slides.length - 1) {
				hideTabContent();
				showTabContent(b);
				b--;
			}
			if (b < 0) {
				hideTabContent();
				showTabContent(0);
				b = slides.length - 1;
			}
		})
	}

	function scrollAnimation() {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 200) {
				document.querySelector('.about-company__text').style.animationName = 'about-company__text-animate';
				document.querySelector('.about-company__slogan').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.about-company__border').style.animationName = 'about-company__border-animate';
				document.querySelector('.cards__architecture').style.animationName = 'cards__architecture-animate';
				document.querySelector('.cards__engineering').style.animationName = 'cards__engineering-animate';
				document.querySelector('.cards__interior-desighn').style.animationName = 'cards__interior-desighn-animate';
			} if (window.scrollY >= 1400) {
				document.querySelector('.box-header h4').style.animationName = 'about-company__text-animate';
				document.querySelector('.box-header p').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.advantages-border').style.animationName = 'about-company__border-animate';
			} if (window.scrollY >= 2000) {
				document.querySelector('.portfolio-header__head h4').style.animationName = 'about-company__text-animate';
				document.querySelector('.portfolio-header__head h1').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.portfolio-header__border').style.animationName = 'about-company__border-animate';
			} if (window.scrollY >= 3300) {
				document.querySelector('.partners p').style.animationName = 'about-company__text-animate';
				document.querySelector('.partners h1').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.partners-border').style.animationName = 'about-company__border-animate';
			} if (window.scrollY >= 3500) {
				document.querySelector('.news__header p').style.animationName = 'news__header-animate';
				document.querySelector('.news__header h1').style.animationName = 'news__header-animate-h1';
				document.querySelector('.news-border').style.animationName = 'news-border-animate';
			} if (window.scrollY >= 4500) {
				document.querySelector('.contact-form-box__head h6').style.animationName = 'contact-form-box__head-h6';
				document.querySelector('.contact-form-box__head h4').style.animationName = 'contact-form-box__head-h4';
				document.querySelector('.contact-form-border').style.animationName = 'contact-form-border';
			}
		})
	}

	function slider() {
		let offset = 0;
		const slidesField = document.querySelector('.offer__slider'),
			slides = document.querySelectorAll('.offer__slide'),
			slideControlWrapper = document.querySelector('.slider-control-point'),
			slidesWrapper = document.querySelector('.slide-wrapper'),
			width  = window.getComputedStyle(slidesField).width;
		const dots = [];

		console.log(width);
			for ( let i = 0; i < slides.length; i++) {
				const dot = document.createElement('li');
				dot.setAttribute('data-slide-to', i + 1);
				dot.classList.add('carousel-indicators');

				if (i == 0) {
					dot.style.opacity = 1;
				}

				slideControlWrapper.append(dot);
				dots.push(dot);
			}

			function nextSlide() {
				if (offset == +width.slice(0, width.length - 2) * (slides.length -1)) {
					offset = 0;
				} else {
					offset += +width.slice(0, width.length -2);
				}
				// slider.style.transform = `translateX(-${970}px)`;
			
			}

			setInterval( slidesField.style.transform = `translateX(-${970}px)`, 3000);

	}
	headerTabs();
	scrollAnimation();
	slider();
})