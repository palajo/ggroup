jQuery(document).ready(function ($) {

    // mainpage project slider function
    function mainpageProjectsSlider() {
        if ($(window).width() < 768) {
            $('.mainpage-projects-slider').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                swipeToSlide: true,
                mobileFirst: true,
            });
        } else if ($(window).width() > 768) {
            $('.mainpage-projects-slider.slick-initialized').slick('unslick');
        }
    };

    $(document).ready(function() {
        // load background for hero banners
        $('.main-hero').each(function () {
            if ($(this).attr("data-bg")) {
                $(this).css({
                    'background-image': 'url(' + $(this).data('bg') + ')'
                });
            };
        });

        // dropdown for language swticher
        $('.dropdown').on('mouseenter',function(){
            $(this).find('.dropdown-menu').fadeIn(200);
        });

        $('.dropdown').on('mouseleave',function(){
            $(this).find('.dropdown-menu').fadeOut(100);
        });

        // toggle burgermenu navigation
        $('.navigation-toggler > .icon-burgermenu').click(function() {
            $(this).toggleClass('active');
            $('body').toggleClass('overflow-hidden');
            $('.right-block').toggle('slide');
        });

        // mainpage slider
        mainpageProjectsSlider();

        // other projects slider
        $('.other-projects-slider').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            swipeToSlide: true,
            prevArrow:'<div class="slider-arrow prev"><div class="icon arrow-left"></div></div>',
            nextArrow:'<div class="slider-arrow next"><div class="icon arrow-right"></div></div>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
            ]
        });

        // projects slider
        $('.projects-slider').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            swipeToSlide: true,
            prevArrow:'<div class="slider-arrow prev"><div class="icon arrow-left"></div></div>',
            nextArrow:'<div class="slider-arrow next"><div class="icon arrow-right"></div></div>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
                {
                    breakpoint: 1023,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
            ]
        });

        // team slider
        $('.team-slider').not('.slick-initialized').slick({
            slidesToShow: 6,
            slidesToScroll: 1,

            infinite: true,
            arrows: true,
            swipeToSlide: true,
            prevArrow:'<div class="slider-arrow prev"><div class="icon arrow-left"></div></div>',
            nextArrow:'<div class="slider-arrow next"><div class="icon arrow-right"></div></div>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
                {
                    breakpoint: 1023,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                    } 
                },
                {
                    breakpoint: 1439,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1
                    } 
                }
            ]
        });

        // file upload, display file title
        $('.wpcf7-file').change(function() {
            var filename = $(this)[0].files[0].name;
            $(this).closest('label').text(filename);
        });

        // masked input for phone field
        // $(".wpcf7-tel").mask("+38 (999) 99-99-999");
    });

    $(window).on('resize', function(){
        // fade in burgermenu navigation if max-width > 1440px 
        if ($(window).width() > 1439 && ($('.right-block').css('display') === 'none')) {
            $('.right-block').fadeIn(0).css('display', 'flex');
        }

        // enable or disable mainpage projects slider on window width change
        mainpageProjectsSlider();
    });
});