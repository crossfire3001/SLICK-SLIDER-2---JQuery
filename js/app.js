$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true, // по умолчанию false - автоматическая высота под конкретный слайд
    slidesToShow: 3, // сколько показывать слайдов
    slidesToScroll: 1, // сколько пролистывать слайдов
    speed: 500, // скорость пролистывания слайдов
    easing: "ease", // по умолчанию - 'linear'
    infinite: true, // по умолчанию - true
    initialSlide: 0, // стартовый слайд
    autoplay: true, // по умолчанию false
    autoplaySpeed: 1500, // по умолчанию 3000
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true, // на пк отключить свайп мышкой
    swipe: true, // на телефонах отключить свайп
    touchThreshold: 10, // расстояние необходимое для свайпа
    touchMove: true, // включает все возможности тач скрина
    waitForAnimate: false, // ожидание прокрутки до конца переключения слайда
    centerMode: false, // выстраивание 1-го слайда по центру
    variableWidth: false, // автоматическая адаптивность слайдера, слайдер дает возможность самому контенту определять ширину
    rows: 1, // 2 ряда слайда, по умолчанию 1
    slidesPerRow: 1, // количество слайдов в ряду, по умолчанию 1
    vertical: false, // вертикальный слайдер
    verticalSwiping: false, // свайп вверх/вниз
    asNavFor: ".slider__menu", // объединение двух слайдеров в 1
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    mobileFirst: false, // будет вывовдить макс 2 слайда
    appendArrows: $(".content"), // перемещение стрелок в другой div
    appendDots: $(".content"),
  });

  $(".slider__menu").slick({
    arrows: false,
    slidesToShow: 1,
    fade: true, // может показываться только 1 картинка с таким эффектом
    asNavFor: ".slider", // объединение двух слайдеров в 1
  });
});
