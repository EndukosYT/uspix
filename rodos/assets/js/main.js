$(document).ready(function (){

    $('.gallery').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    $('.scroll-to-order').on('click', function (e){

        e.preventDefault();

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#order").offset().top
        }, 800);

    });

});