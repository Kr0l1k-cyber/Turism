let hotelSlider = new Swiper('.hotel-slider', {
    loop: true,
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "fade",  
  });

  let reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    effect: "fade",  
  });

ymaps.ready(init);
function init(){
    // Создание карты.
      var myMap = new ymaps.Map("map", {
         // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
         center: [7.891525, 98.295000],
          // Уровень масштабирования. Допустимые значения:
         // от 0 (весь мир) до 19.
         zoom: 16
     });
}   