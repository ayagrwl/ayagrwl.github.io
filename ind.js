//'use strict';

$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

$(document).ready(function() {
    $('.iit-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'solid-nav',
    navbarTransparent = 'transp-nav',
    $width = $(document).width(),
    fadeInDown = 'fadeInDown',
    $mainContent = $('.main-content');

if(($width) < 992){
  $document.scroll(function() {
    if($document.scrollTop() > 200) {
      $element.addClass(navbarDefault);
      $element.removeClass(navbarTransparent);

      $element.addClass(fadeInDown);
    } else {
      $element.addClass(navbarTransparent);
      $element.removeClass(navbarDefault);

      $element.removeClass(fadeInDown);
    }
  });
}
$('.autoplayslider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.previousElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.innerHTML = "Read More";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.innerHTML = "Read Less";
    }
  });
}

