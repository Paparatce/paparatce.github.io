$('.slider__slide_bigpicture').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__slide_smollpicture'
  });
  $('.slider__slide_smollpicture').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__slide_bigpicture',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
                  