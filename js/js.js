$('.slick_slider').slick({
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2700,
    arrows: false,
    draggable: false,
    fade: true,
    pauseOnHover: false,
    edgeFriction: 0.1,
    
});

        $(function() {
    'use strict';
    // инициализация плагина
    $.jqCart({
        buttons: '.add_item',        // селектор кнопок, аля "Добавить в корзину"
        handler: '/php/handler.php', // путь к обработчику
        visibleLabel: false,         // показывать/скрывать ярлык при пустой корзине (по умолчанию: false)
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