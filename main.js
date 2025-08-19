(function($) {
    "use strict";
    $(document).ready(function() {
        if ($(window).width() < 991) {
            navbarFix();
        }
        $(document).on("click", ".navbar-nav li a", function(e) {
            var anchor = $(this).attr("href");
            if (anchor && anchor.startsWith("#")) {
                e.preventDefault();
                $("html, body").animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
                $(this).parent().addClass("current-menu-item").siblings().removeClass("current-menu-item");
            }
        });
        
        // Poll Btn
        $(".poll-btn").click(function() {
            $(".poll-wrapper").toggleClass("vote");
        });
        
        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.border-none', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '#search', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });


        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });

        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 1000
        });
        
        // MouseEvent
        var $mosueOverEffect = $('.outer');
        if ($mosueOverEffect.length > 0) {
            VanillaTilt.init(document.querySelectorAll(".outer"), {
                max: 80,
                speed: 400,
                perspective: 200,
                scale: 1.2,
                reverse: true,
            });
        }

        /**-----------------------------
         *  countdown
         * ---------------------------*/
        if ($("#mycountdown").length > 0) {
            $("#mycountdown").countdown("2024/09/20", function(event) {
                $('.month').text(
                    event.strftime('%m')
                );
                $('.days').text(
                    event.strftime('%n')
                );
                $('.hours').text(
                    event.strftime('%H')
                );
                $('.mins').text(
                    event.strftime('%M')
                );
                $('.secs').text(
                    event.strftime('%S')
                );
            });
        }

        // Client - active
        $('.client-active-area').owlCarousel({
            loop: true,
            items: 4,
            nav: true,
            margin: 100,
            dots: false,
            navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });

        // Menu Submenu Dropdown style
        $(".menu-item-has-children a").on("click", function() {
            var element = $(this).parent("li");
            if (element.hasClass("show")) {
                element.removeClass("show");
                element.children("ul").slideUp(500);
            } else {
                element.siblings("li").removeClass('show');
                element.addClass("show");
                element.siblings("li").find("ul").slideUp(500);
                element.children('ul').slideDown(500);
            }
        });

        $(window).on('scroll', function() {
            submenuReverse();
        });
    }); // This closes $(document).ready()
})(jQuery);
