const newsSlider = new Swiper('.news-slider__container', {
  slidesPerViewm: 1,
  loop: true,

  pagination: {
    el: '.news-slider__pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.news-slider__button-next',
    prevEl: '.news-slider__button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});