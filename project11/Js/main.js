$('.slider__slide_bigpicture').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  // asNavFor: '.slider__slide_smollpicture',
  nextArrow:'<img class="slick-next slick-arrow" src="images/arrows-right.png">',
  prevArrow:'<img class="slick-prev slick-arrow" src="images/arrows-left.png">'
});
$('.slider__slide_smollpicture').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider__slide_bigpicture',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  infinite:false,
 
  
  
});
