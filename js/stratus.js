(function ($) {
	$(document).ready(function ($) {
		
    // .brand-carousel-wrap
    $(".brand-carousel-wrap").owlCarousel({
        // items: 5,
        loop: true,
        lazyLoad:true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 10,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            580: {
                items: 3,
                nav: false
            },
            720: {
                items: 3,
                nav: false
            },
            960: {
                items: 3
            },
            1140: {
                items: 4
            },
            1320: {
                items: 5
            },
            1800: {
                items: 7,
            }
        }
    });

    // featured-carousel
    $('.featured-cars').owlCarousel({
        items: 3,
        loop: false,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: false,
        // margin: 40,
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
                margin: 15,
                nav: false,
            },
            960: {
                // items: 3,
                margin: 15,
            },
            1140: {
                // items: 3,
                margin: 15,
            },
            1240: {
                // items: 3,
                margin: 25,
            },
            1440: {
                // items: 3,
                margin: 40,
            },
        },
    });

    // .reviews-wrapper
    $('.reviews-wrapper-box').owlCarousel({
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
                items: 2,
                margin: 20,
            },
            1140: {
                items: 3,
            },
        },
    });


    // testimonial-wrap
    // $('.testimonial-section').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     autoplay: true,
    //     autoHeight: true,
    //         navText: [
    //         "<i class='fal fa-angle-left'></i>",
    //         "<i class='fal fa-angle-right'></i>",
    //     ],
    // });

    // $(".lifeshine-box").on("hover", function(){
    //     $(this).next().addClass("show");
    // });
    // $(".lifeshine-box-content").on("mouseleave", function(){
    //     $(this).removeClass("show");
    // })


    // $(".more-info").on("click", function(){
    //     $(".company-info-text").slideToggle();
    // });

    

    // var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    // if (isIOS) {
    //     $(".video__url").css("display", "block");
    // } else {
    //     $(".video-background").addClass("active");
    // }


	});
})(jQuery);

$(window).load(function() {

});


