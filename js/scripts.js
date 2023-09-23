/*---------------------------------------------------
    1. Navbar
----------------------------------------------------*/
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 0) {
            $(".navbar-fixed-top").addClass("navbar-pad-original");
        } else {
            $(".navbar-fixed-top").removeClass("navbar-pad-original");
        }


        var navMain = $(".navbar-collapse");

        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });

    });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

/* -----------------------------------------------------
    2. Wow js
----------------------------------------------------- */
new WOW().init();




/* -----------------------------------------------------
    4. Review js
----------------------------------------------------- */
$(".carousel-main").owlCarousel({
    autoplay: true,
    pagination: false,
    nav: false,
    dots: true,
    items: 2,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        968: {
            items: 1
        }
    }
});


/* -----------------------------------------------------
    6. SLIDER HITAM PUTIH
----------------------------------------------------- */
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    /* -----------------------------------------------------
    7. Header Logo and Bg js
    ----------------------------------------------------- */

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        navbar = $(".navbar"),
            logo = $(".navbar .navbar-brand> img");

        if (scroll >= 100) {
            $(".scroll-me").addClass("menubg");
            logo.attr('src', 'img/logo-hitam.png');
        } else {
            $(".scroll-me").removeClass("menubg");
            logo.attr('src', 'img/logo.png');
        }
    });

    /* -----------------------------------------------------
        8. Menu on Click Scroll js
    ----------------------------------------------------- */

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


});


/* -----------------------------------------------------
    9. PORTFOLIO
----------------------------------------------------- */

$('.carousel-portfolio').owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 0,
    autoplay: true,
    dots:false,
    nav:false,
    autoplayTimeout: 2500,
    smartSpeed: 950,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
    }
});
