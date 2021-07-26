window.addEventListener("DOMContentLoaded", () => {
	// WEBP -----------------------------------------------------

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});



// BURGER -----------------------------------------------------

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-categories');
if (hamburger) {
	hamburger.addEventListener('click', function () {
		document.body.classList.toggle('lock');
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}



// TABS -----------------------------------------------------

const tabsParent = document.querySelectorAll('.tabs');
if (tabsParent.length > 0) {
	tabsParent.forEach(element => {
		const tabs = element.querySelectorAll('.tab-btn'),
			tabsContent = element.querySelectorAll('.tab-content');
		function hideTabsContent() {
			tabsContent.forEach(item => {
				item.classList.remove('active');
			});
			tabs.forEach(item => {
				item.classList.remove('active');
			});
		};
		const showTabsContent = (i = 0) => {
			tabsContent[i].classList.add('active');
			tabs[i].classList.add('active');
		}
		hideTabsContent();
		showTabsContent(0);
		element.addEventListener('click', (event) => {
			const targetElement = event.target;
			if (targetElement && targetElement.classList.contains('tab-btn') || targetElement && targetElement.closest('.tab-btn')) {
				hideTabsContent();
				tabs.forEach((item, i) => {
					if (targetElement.closest('.tab-btn') == item) {
						showTabsContent(i);
					}
				});
			};
		});
	});
};

	// BILD -----------------------------------------------------
let sliders = document.querySelectorAll(".swiper");
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let sliderItems = slider.children;
			if (sliderItems) {
				for (let index = 0; index < sliderItems.length; index++) {
					let el = sliderItems[index];
					el.classList.add('swiper-slide');
				}
			}
			let sliderContent = slider.innerHTML;
			let sliderWrapper = document.createElement('div');
			sliderWrapper.classList.add('swiper-wrapper');
			sliderWrapper.innerHTML = sliderContent;
			slider.innerHTML = '';
			slider.appendChild(sliderWrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	slidersBildCallback();
}

function slidersBildCallback() { }

let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollBar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function slidersBildCallback() { }


// SLIDER -----------------------------------------------------

if (document.querySelector('.slider-hero__body')) {
	new Swiper('.slider-hero__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		speed: 700,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		// DOTS
		pagination: {
			el: '.slider-hero__dotts',
			clickable: true,
		},
		// ARROWS
		navigation: {
			prevEl: '.hero__slider .slider-hero__arrow_prev',
			nextEl: '.hero__slider .slider-hero__arrow_next',
		}
	});
};

// -----------------------------------------------------

if (document.querySelector('.slider-products__body')) {
	new Swiper('.slider-products__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 30,
		watchOverflow: true,
		speed: 700,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		// ARROWS
		navigation: {
			prevEl: '.products__slider .slider-products__arrow_prev',
			nextEl: '.products__slider .slider-products__arrow_next',
		},
		// BREACKPOINTS

		breakpoints: {

			320: {
				slidesPerView: 1.2,
				spaceBetween: 15
			},

			500: {
				slidesPerView: 2,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 3,
				spaceBetween: 20
			},

			1200: {
				spaceBetween: 30,
				slidesPerView: 4
			},
		}
	});
};

	
const productFavorite = document.querySelectorAll('.product__favorite');
productFavorite.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
	});
});









});