$(document).ready(function() {
    $('#menu-bar').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        //Scroll spy
        $('section').each(function() {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).height();
            let id = $(this).attr('id');
            if ( top > offset && top < offset + height) {
                $('.navbar ul li  a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });

        //Nút scroll-top
        if($(window).scrollTop() > 0) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });

    
    //smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 
        500,
        'linear'
        )
    })

    //function section menu
    $('.menu .list .btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');
        $('#menu-img').attr('src', src);
    })
});