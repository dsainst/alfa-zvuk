jQuery(document).ready(function($) {
    var owl = $('.owl-carousel');
    var owl2 = $('.shop-items');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        items: 7,
        dots: true,
        navText: ['<span class="left"></span>', '<span class="right"></span>']
    });
    owl2.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        items: 4,
        dots: true,
        autoplay: true
    });

    var show = true;
    /* ----------- FIXED TOP MENU BEGIN -------------- */
    var h_hght = 174, // ������ �����
        h_mrg = 48;    // ������ ����� ����� ��� �� �����

    $(window).scroll(function() {
        /*var top = $(this).scrollTop();
        var elem = $('.top-menu');
        //elem2 = $('.top-line');
        //if (top>0) elem2.addClass('fixed-menu'); else elem2.removeClass('fixed-menu');
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
            elem.removeClass('fixed-menu');
        } else {
            elem.css('top', h_mrg);
            elem.addClass('fixed-menu');
        }*/
        /* ----------- FIXED TOP MENU END -------------- */
        if (!show) return false;
        $('.animateNum').each(function() {
            var imagePos = $(this).offset().top,
                topOfWindow = $(window).scrollTop(),
                mheight = $(window).height(),
                separator = $(this).attr("data-separator"),
                datanum = $(this).attr('data-num');

            if (separator) comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
            else comma_separator_number_step = false;

            if (imagePos < topOfWindow + mheight) {
                $(this).stop().animateNumber({
                    number: datanum,
                    easing: 'easeInQuad',
                    numberStep: comma_separator_number_step
                }, 2000);
                show = false;
            }
        });
    });

    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click(function(event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function() {
                $(div)
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });
    close.click(function() {
        modal.animate({
                opacity: 0,
                top: '45%'
            }, 200,

            function() {
                $(this).css('display', 'none');
                overlay.fadeOut(400);
            });
    });

});