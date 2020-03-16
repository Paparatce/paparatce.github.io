$(function () {

    $(".top__slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplayspeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.menu__btn').click(function () {
        $('.header__menu-list').slideToggle();
    });


$(".top__to-go").on("click","a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 900);

});


 });