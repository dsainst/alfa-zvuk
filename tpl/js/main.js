jQuery(document).ready(function(a){var t=a(".owl-carousel"),e=a(".shop-items");t.owlCarousel({margin:10,nav:!0,loop:!0,items:7,dots:!0,navText:['<span class="left"></span>','<span class="right"></span>']}),e.owlCarousel({margin:30,loop:!0,items:4,dots:!0,autoplay:!0});var o=!0;a(window).scroll(function(){var t=a(this).scrollTop(),e=a("#top-menu");if(t+48<210?(e.css("top",210-t),e.removeClass("fixed-menu")):(e.css("top",48),e.addClass("fixed-menu")),!o)return!1;a(".animateNum").each(function(){var t=a(this).offset().top,e=a(window).scrollTop(),s=a(window).height(),n=a(this).attr("data-separator"),r=a(this).attr("data-num");comma_separator_number_step=!!n&&a.animateNumber.numberStepFactories.separator(" "),t<e+s&&(a(this).stop().animateNumber({number:r,easing:"easeInQuad",numberStep:comma_separator_number_step},2e3),o=!1)})});var s=a("#overlay"),n=a(".open_modal"),r=a(".modal_close, #overlay"),i=a(".modal_div");n.click(function(t){t.preventDefault();var e=a(this).attr("href");s.fadeIn(400,function(){a(e).css("display","block").animate({opacity:1,top:"50%"},200)})}),r.click(function(){i.animate({opacity:0,top:"45%"},200,function(){a(this).css("display","none"),s.fadeOut(400)})})});