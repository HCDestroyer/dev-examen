$(document).ready(function(){
    $('.travels').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.travels-display').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        infinite: true,

    });
  });