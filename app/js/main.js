$(function () {
    $('.product__slider-slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
          nextArrow: '<button class="slick-arrow slick-next"></button>',
          dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
      });

    $('.followers__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
          nextArrow: '<button class="slick-arrow slick-next"></button>',
          dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true
      });

  
 
    $(".slide__rank").rateYo({
      starWidth: "16px",
      rating: 5.0,
      readOnly: true
    });
   

    var mixer = mixitup('.products__inner-box');
  });  