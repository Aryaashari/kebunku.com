// Testimonial Carousel
$(document).ready(function(){
    // Testimonial Carousel
    $('.owl-carousel').owlCarousel({
        dots: false,
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    // End Testimonial Carousel

    
    // Scroll Atas
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollAtas').fadeIn(100);
        } else {
            $('.scrollAtas').fadeOut(100);
        }
    });

    // Smooth Scroll
    $('.scrollAtas').click(function () { 
        $('html,body').animate({scrollTop: 0}, 1000);
    })

    // End Scroll Atas

  });

