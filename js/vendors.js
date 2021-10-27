/* beautify preserve:start */
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}


function sliders_bild_callback(params) {}
if (document.querySelector('.slider-item__body')) {
	const sliderItem = new Swiper('.slider-item__body', {
		observer: true,
		observeParents: true,
		speed: 800,
		spaceBetween: 0,
		watchOverflow: true,
		autoHeight: false,
		slidesPerGroup: 1,
		loop: true,
		// Arrows
		navigation: {
			nextEl: ".slider-item__arrow_next",
			prevEl: ".slider-item__arrow_prev",
		},
		thumbs: {
			swiper: {
				el: ".slider-image-mini__slider",
				slidesPerView: 3,
			}
		},
		/* 		breakpoints: {
					365: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					}
				}, */
	})
}
if (document.querySelector('.slider-decor__body')) {
	const sliderDecor = new Swiper('.slider-decor__body', {
		observer: true,
		observeParents: true,
		speed: 800,
		spaceBetween: 15,
		watchOverflow: true,
		autoHeight: false,
		loop: true,
		slidesPerColumn: 1,
		// Arrows
		navigation: {
			nextEl: ".slider-decor__arrow_next",
			prevEl: ".slider-decor__arrow_prev",
		},
		thumbs: {
			swiper: {
				el: ".slider-image-mini-decor__slider",
				slidesPerView: 8,
			}
		},
		breakpoints: {
			365: {
				slidesPerGroup: 1,
				slidesPerView: 1,
			},
			768: {
				slidesPerGroup: 2,
				slidesPerView: 2,
			},
		},
	})
}