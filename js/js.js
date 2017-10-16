$('.slick_slider').slick({
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2700,
    arrows: true,
    draggable: false,
    fade: true,
    arrows: true,
    pauseOnHover: false,
    edgeFriction: 0.1,
    prevArrow: '<div class="prev"><img src="img/next.png" alt=""></div>',
    nextArrow: '<div class="next"><img src="img/next.png" alt=""></div>',
    
});

$('.photo_g').slick({
  asNavFor: '.photo_n',
     cssEase:'ease-in',
     initialSlide: 3,
     autoplay: true,
     autoplaySpeed: 2000
});


$('.photo_n').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '190px',
  asNavFor: '.photo_g',
    focusOnSelect: true,
    arrows: false,
  dots: true,
});

        $(function() {
    'use strict';
    // инициализация плагина
    $.jqCart({
        buttons: '.add_item',        // селектор кнопок, аля "Добавить в корзину"
        handler: '/php/handler.php', // путь к обработчику
        visibleLabel: true,         // показывать/скрывать ярлык при пустой корзине (по умолчанию: false)
        openByAdding: false,         // автоматически открывать корзину при добавлении товара (по умолчанию: false)
        currency: '&euro;',          // валюта: строковое значение, мнемоники (по умолчанию "$")
        cartLabel: '.label-place'    /* селектор элемента, где будет размещен ярлык, 
                                        он же - "кнопка" для открытия корзины */
    });
    
    // дополнительные методы
   $('#open').click(function(){
                $.jqCart('openCart'); // открыть корзину
        });
        $('#clear').click(function(){
                $.jqCart('clearCart'); // очистить корзину
        });   
});