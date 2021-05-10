(function ($) {
	$(document).ready(function ($) {
		// lazy load js
		$('.lazy').unveil(200, function () {
			$(this).load(function () {
				this.style.opacity = 1;
				// effect : "fadeIn"
			});
		});

		// offcanvas-menu-js
		$('.trigger').on('click', function () {
			$('.offcanvas-menu-wrap, .off-canvas-overlay, .menu-close, .mobile-header-style').addClass('offcanvas');
			// return false;
		});
		$('.menu-close, .off-canvas-overlay').on('click', function () {
			$('.offcanvas-menu-wrap, .off-canvas-overlay, .menu-close, .mobile-header-style').removeClass('offcanvas');
		});

		/*-----------------------------
			--> Off Canvas Mobile Menu
		------------------------------*/
		if ($(window).width() < 991) {
			
			var $offCanvasNav = $('.off-canvas-nav'),
				$offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
	
			/*Add Toggle Button With Off Canvas Sub Menu*/
			$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fas fa-chevron-down"></i></span>');
	
			/*Close Off Canvas Sub Menu*/
			$offCanvasNavSubMenu.slideUp('0');
	
			/*Category Sub Menu Toggle*/
			$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
				var $this = $(this);
				if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
					e.preventDefault();
					if ($this.siblings('ul:visible').length) {
						$this.parent('li').removeClass('active');
						$this.siblings('ul').slideUp('0');
					} else {
						$this.parent('li').addClass('active');
						$this.closest('li').siblings('li').find('ul:visible').slideUp('0');
						$this.siblings('ul').slideDown('0');
					}
				}
			});
	
		}
		else {
		}

		/*-----------------------------------------
                     Home Page JS
        -----------------------------------------*/

		// responsive menu
		// $('#menu').slicknav();

		// nice select
		$('select').niceSelect();

		// perfectScrollbar
		$('.nice-select .list, .stock-dropdown, .dropdown-menu').perfectScrollbar();

		// Sticky Header with smooth animation
		if ($(window).width() < 960) {
		} else {
			$(window).on('scroll', function () {
				if ($(window).scrollTop() >= 300) {
					$('.header-area, .header2 .header-top-area, .refine-search-box').addClass('fixed');
				} else {
					$('.header-area, .header2 .header-top-area, .refine-search-box').removeClass('fixed');
				}
			});
		}

		// homepage-slides
		$('.homepage-slides').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			autoplay: false,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
		});
		// .reviews-wrapper
		$('.reviews-wrapper').owlCarousel({
			items: 3,
			loop: true,
			lazyLoad: true,
			nav: true,
			dots: false,
			autoplay: false,
			margin: 30,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false,
				},
				767: {
					items: 2,
					margin: 20,
					nav: false,
				},
				992: {
					items: 3,
				},
				1140: {
					items: 3,
				},
			},
		});
		// .blog-carousel
		$('.blog-carousel').owlCarousel({
			items: 4,
			loop: true,
			lazyLoad: true,
			nav: true,
			dots: false,
			autoplay: false,
			margin: 15,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
			responsive: {
				0: {
					items: 1,
					margin: 10,
					nav: false,
				},
				767: {
					items: 2,
					nav: false,
				},
				992: {
					items: 3,
				},
				1140: {
					items: 4,
				},
			},
		});
		// featured-carousel
		$('.featured-car-carousel').owlCarousel({
			items: 3,
			loop: true,
			lazyLoad: true,
			nav: true,
			dots: false,
			autoplay: false,
			margin: 15,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false,
				},
				767: {
					items: 2,
					margin: 10,
					nav: false,
				},
				992: {
					items: 2,
				},
				1140: {
					items: 3,
				},
			},
		});
		// testimonial-wrap
		$('.testimonial-wrap').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			autoplay: false,
			autoHeight: true,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
		});

		// Scroll To Top starts
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('.scrollTop').addClass('scrollBtn');
			} else {
				$('.scrollTop').removeClass('scrollBtn');
			}
		});
		$('.scrollTop').click(function () {
			$('html, body').animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		}); // click() scroll top ENDS

		/*----------------------------------
               CarDetails Page JS
		----------------------------------*/

		// shoutouts js
		var $liCollection = $(".shoutouts li");
		var $firstListItem = $liCollection.first();
		$liCollection.first().addClass("active");
		setInterval(function() {
			var $activeListItem = $(".shout-out-section .active")
			$activeListItem.removeClass("active");
			var $nextListItem = $activeListItem.closest('li').next();
			if ($nextListItem.length == 0) {
				$nextListItem = $firstListItem;
			}
			$nextListItem.addClass("active");
		}, 5000);

		$(".shoutout").on("hover", function(){
			$(this).next().addClass("show");
		});
		$(".shoutout-content").on("mouseleave", function(){
			$(this).removeClass("show");
		});

		//testimonial-carousel
		$('.testimonial-wrap').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			autoplay: false,
			autoHeight: true,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
		});
		// gallery-col carousel
		$('.gallery-col').owlCarousel({
			items: 1,
			loop: false,
			nav: true,
			dots: false,
			autoplay: false,
			autoHeight: true,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
		});
		// Flickity sliders
		var truncates = $('.single-car-slide');
		if (truncates.length) {
			// here you validate if there is any element with that class
			// Gallery Carousel
			var $gallerySlider = $('.slider-carousel').flickity({
				prevNextButtons: true,
				pageDots: false,
				wrapAround: true,
				cellAlign: 'center',
				percentPosition: true,
				dragThreshold: 5,
				lazyLoad: true,
				imagesLoaded: true,
				lazyLoad: 1,
			});
		}




		// magnificPopup for images
		$('.open-popup').on('click', function () {
			$(
				'.slider-carousel .single-car-slide.is-selected .popup-link'
			).click();
		});
		$('.popup-link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});
		$('.popup-link-inner img').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
		// magnificPopup for video
		$('.video-btn').magnificPopup({
			type: 'iframe',
			autoPlay: true,
			iframe: {
				markup:
					'<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%?autoplay=1', // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'https://player.vimeo.com/video/%id%?autoplay=1',
					},
					gmaps: {
						index: 'https://maps.google.',
						src: '%id%&output=embed',
					},
					// you may add here more sources
				},
				srcAction: 'iframe_src',
			},
		});

		// magnificPopup for video
		$('.video-btn2').magnificPopup({
			type: 'iframe',
			autoPlay: true,
			iframe: {
				markup:
					'<div class="mfp-iframe-scaler custom-class">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%?autoplay=1', // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'https://player.vimeo.com/video/%id%?autoplay=1',
					},
					gmaps: {
						index: 'https://maps.google.',
						src: '%id%&output=embed',
					},
					// you may add here more sources
				},
				srcAction: 'iframe_src',
			},
		});

		$(".video-btn2").on("click", function(){
			$(".custom-class").parent().addClass("custom-popup-content");
		});

		$('.popup-link2').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});
		//jQuery smooth scroll
		$('.smooth-menu a').bind('click', function (event) {
			var $anchor = $(this);
			var headerH = '150';
			$('html, body')
				.stop()
				.animate(
					{
						scrollTop:
							$($anchor.attr('href')).offset().top -
							headerH +
							'px',
					},
					1200,
					'easeInOutExpo'
				);

			event.preventDefault();
		});
		// submenu-area
		$('.submenu-area').sticky({ topSpacing: 0 });
		// sticky call-to-action-area
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('.call-to-action-area').addClass('sticky-action');
			} else {
				$('.call-to-action-area').removeClass('sticky-action');
			}
		});

		// finance toggle
		$(".finance-area.finance-style-2 .question-box .payment-method .cash").on("click", function(){
			$(this).removeClass("add");
			$(".finance-area.finance-style-2 .question-box .payment-method .monthly").addClass("add");
		});
		$(".finance-area.finance-style-2 .question-box .payment-method .monthly").on("click", function(){
			$(this).removeClass("add");
			$(".finance-area.finance-style-2 .question-box .payment-method .cash").addClass("add");
		});


		/*----------------------------------
                   Listing Page JS
        -----------------------------------*/

		/*---------- Double handle Range Slider  ----------*/
		$(function () {
			$('#range-slider-3').slider({
				range: true,
				min: 0,
				max: 500,
				step: 1,
				values: [80, 320],
				slide: function (event, ui) {
					$('.slider-price .min-price').val('£' + ui.values[0]);
					$('.slider-price .max-price').val('£' + ui.values[1]);
				},
			});
			$('.slider-price .min-price').val(
				'£' + $('#range-slider-3').slider('values', 0)
			);
			$('.slider-price .max-price').val(
				'£' + $('#range-slider-3').slider('values', 1)
			);
		});

		// refine search box js
		$('.refine-text').on('click', function () {
			$('.sidebar-wrapper, .refine-text, .refine-close, .listing-content-area, .footer-area, .alert-message-section').addClass('show-searchbox');
		});
		$('.refine-close').on('click', function () {
			$('.sidebar-wrapper, .refine-text, .refine-close, .listing-content-area, .footer-area, .alert-message-section').removeClass('show-searchbox');
		});

		// jQuery for clicking effect on sidebar single item
		$('.toggle-btn').click(function () {
			var $pane = $(this).closest('.single-sidebar-item').find('.pane');
			if ($pane.hasClass('inactive')) {
				$('.single-sidebar-item .pane').addClass('inactive');
				$pane.removeClass('inactive');
			} else {
				$pane.addClass('inactive');
			}
		});

		// jquery code to highlight the search bar header
		$('.search-header h5').on('click', function () {
			$('.search-header h5').removeClass('active');
			$(this).toggleClass('active');
		});
		$(
			'.sidebar-close, .refine-close, .single-dropdown-item .nice-select'
		).on('click', function () {
			$('.search-header h5').removeClass('active');
		});

		// jQuery to close sidebar content
		$(
			'.sidebar-close, .single-dropdown-item.age, .single-dropdown-item.years-dropdown, .refine-close, .single-color'
		).on('click', function () {
			$('.search-body.pane').addClass('inactive');
		});

		$('.refine-text').on('click', function () {
			$('.footer').removeClass('footer-margin');
		});
		$('.refine-close').on('click', function () {
			$('.footer').addClass('footer-margin');
		});

		/*----------------------------------
                Blog Detailsg Page JS
        -----------------------------------*/

		// single service page sidebar
		$('.sidebar-open').on('click', function () {
			$(
				'.blog-sidebar, .close-btn, .sidebar-open, .footer-area'
			).addClass('show-sidebar');
		});
		$('.close-btn').on('click', function () {
			$(
				'.blog-sidebar, .close-btn, .sidebar-open, .footer-area'
			).removeClass('show-sidebar');
		});

		/*----------------------------------
                Favourite Page JS
        -----------------------------------*/

		// Favourite-carousel
		$('.comparison-carousel-wrap').owlCarousel({
			items: 3,
			loop: true,
			lazyLoad: true,
			nav: true,
			dots: false,
			autoplay: false,
			margin: 30,
			navText: [
				"<i class='fal fa-angle-left'></i>",
				"<i class='fal fa-angle-right'></i>",
			],
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false,
				},
				520: {
					items: 1,
					margin: 0,
					nav: false,
				},
				720: {
					items: 2,
					margin: 20,
					nav: false,
				},
				960: {
					items: 2,
				},
				1140: {
					items: 3,
				},
			},
		});

		$('#skuList').on('click', '.select-bar', function () {
			$('.stock-dropdown-wrap').toggleClass('active');
		});

		// $("#make, #model").on("click", function(){
		//     $(".vehicle").removeClass("active");
		// });

		// Testimonials Page JS
		var spansCounts = $('#rating .single-star').length;
		$('#rating .single-star').on('click', function (e) {
			console.log($(this).index());
			$('#rating .single-star').removeClass('active');

			for (var i = 0; i < $(this).index() + 1; i++) {
				$('#rating .single-star').eq(i).addClass('active');
			}
		});
		$('.single-star').click(function () {
			$('.single-star').removeClass('show-arrow');
			$(this).addClass('show-arrow');
		});



		$('.heart-icon').click(function(){
			$('.fav-notify').addClass('active');
		});
		setInterval(function(){ 
			$('.fav-notify').removeClass('active');
		}, 4000);






		// jQuery('select').niceSelect(null, function () {
		// 	var self = jQuery(this);
		// 	checkForDropUp(self);
	
		// 	jQuery(window).scroll(function() {
		// 		checkForDropUp(self);
		// 	});
		// });  
	
		// function checkForDropUp(triggeredSelect) {
		// 	// Get Top position and height of niceselect container respective to window
		// 	var dropdownContainer = triggeredSelect.parents('.list').find('.nice-select');
		// 	var position = jQuery(dropdownContainer)[0].getBoundingClientRect().top;
		// 	var buttonHeight = jQuery(dropdownContainer)[0].getBoundingClientRect().height;
	
		// 	// Get height of niceselect doprdown (ul)
		// 	// As Dropdown element is hidden so we cloned the dropdown to get the height, and remove that
		// 	// cloned element after getting the height
		// 	var dropdownMenu = dropdownContainer.find('ul.list');
		// 	var style = 'position: absolute !important; top: -10000000 !important;';
		// 	var dropdownMenuClone = dropdownMenu.clone().attr('style', style).appendTo('body');
		// 	var menuHeight = dropdownMenuClone.outerHeight(true);
		// 	dropdownMenuClone.remove();
	
		// 	var $win = jQuery(window);
	
		// 	if (position > menuHeight && ($win.height() - position < buttonHeight + menuHeight)) {
		// 		dropdownContainer.addClass('dropup-container');
		// 		dropdownMenu.addClass('dropup');
		// 	} else {
		// 		dropdownContainer.removeClass('dropup-container');
		// 		dropdownMenu.removeClass('dropup');
		// 	}
		// }  


		// JS code to customize NiceSelect Plugin
		$(".single-stock-search").on("click", function () {
			checkForDropUp();
		});

		//  check the page is index or not
		let pathArray = window.location.pathname.split("/");
		let path = pathArray[pathArray.length - 1];

		if (path == "index.html" || path == "index.php") {
			$(window).scroll(function () {
				checkForDropUp();
			});
		}

		function checkForDropUp() {
			var windowHeight = $(window).height();
			var niceSelectList = $(".nice-select .list");
			var niceSelectListHeight = niceSelectList.height();

			var viewportOffset = $(".single-stock-search")[0].getBoundingClientRect();
			var searchBoxPositionFromtop = viewportOffset.top;

			if (windowHeight - searchBoxPositionFromtop < niceSelectListHeight) {
				niceSelectList.css({ top: "auto", bottom: 100 + "%", marginBottom: 4 });
			} else {
				niceSelectList.css({ top: 100 + "%", bottom: "auto", marginBottom: "none" });
			}
		}






	});
})(jQuery);

$(window).load(function() {
	$(".loader").delay(100).fadeOut("slow");
	$("#overlayer").delay(100).fadeOut("slow");
});
