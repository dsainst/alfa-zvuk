$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        items: 7,
        dots: true,
        navText: ['<span class="left"></span>', '<span class="right"></span>']
    })
})