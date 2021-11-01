(function ($) {
    "use strict";

    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});

    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
    document.getElementById('tab2-container').innerHTML = document.getElementById("stab-1").innerHTML;
    
})(jQuery);

function showtab(tabs)
{
	var tab=tabs;
	switch(tab) //this switch case replaces the tabContent
    {
      case "tab-1":
        document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
        break;
      case "tab-2":
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-2").innerHTML;
        break;
      case "tab-3":
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-3").innerHTML;
        break;
      default:
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
        break;
    }
}

function showtab2(tabs)
{
	var tab=tabs;
	switch(tab) //this switch case replaces the tabContent
    {
      case "stab-1":
        document.getElementById('tab2-container').innerHTML = document.getElementById("stab-1").innerHTML;
        break;
      case "stab-2":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-2").innerHTML;
        break;
      case "stab-3":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-3").innerHTML;
        break;
      case "stab-4":
        document.getElementById('tab2-container').innerHTML = document.getElementById("stab-4").innerHTML;
        break;
      case "stab-5":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-5").innerHTML;
        break;
      case "stab-6":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-6").innerHTML;
        break;
      case "stab-7":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-7").innerHTML;
        break;
      case "stab-8":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-8").innerHTML;
        break;
      case "stab-9":
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-9").innerHTML;
        break;
      default:
		document.getElementById('tab2-container').innerHTML = document.getElementById("stab-1").innerHTML;
        break;
    }
}

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 16237,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 12,duration: 2500});
