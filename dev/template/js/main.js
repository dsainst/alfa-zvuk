jQuery(document).ready(function($) {
    $('.btn-1click').click(function (erirle) {
        erirle.preventDefault();
        var idzz = $(this).data('idzz');
        var titlezz = $(this).data('titlezz');
        $('#modal_form2 .tovar-id').val(idzz);
        $('#modal_form2 .tovar-title').val(titlezz);
    });


    var owl = $('.owl-carousel');
    var owl2 = $('.shop-items');
    var cartProduct = $('.carousel-min');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        items: 7,
        dots: true,
        navText: ['<span class="left"></span>', '<span class="right"></span>']
    });

    owl2.owlCarousel({
        margin: 30,
        loop: false,
        items: 4,
        dots: true,
        autoplay: true
    });
    if (cartProduct.length) {
        cartProduct.bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 67,
            pager: false,
            slideMargin: 15,
            nextText: '<span class="left"><img src="tpl/img/svg/arrowNext.svg" class="simple"><img src="tpl/img/svg/arrowNextHover.svg" class="hover"></span>',
            prevText: '<span class="right"><img src="tpl/img/svg/arrowNext.svg" class="simple"><img src="tpl/img/svg/arrowNextHover.svg" class="hover"></span>',
        });
    }

    var show = true;
    /* ----------- FIXED TOP MENU BEGIN -------------- */
    var h_hght = 210, // ������ �����
        h_mrg = 48;    // ������ ����� ����� ��� �� �����
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        var elem = $('#top-menu .slip-menu');
        //elem2 = $('.top-line');
        //if (top>0) elem2.addClass('fixed-menu'); else elem2.removeClass('fixed-menu');
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
            elem.removeClass('fixed-menu');
        } else {
            elem.css('top', h_mrg);
            elem.addClass('fixed-menu');
        }
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
            $('body').css('overflow', 'hidden');
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
                $('body').css('overflow', 'auto');
                $(this).css('display', 'none');
                overlay.fadeOut(400);
            });
    });

    $('.product_img_small').click(function(er){
        er.preventDefault();
        $('.carousel-min li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.block-img > .fancybox').html('<img src="' + $(this).data('smallimg') + '">');
        $('.block-img > .fancybox').attr('href', $(this).data('img'));
    });

});