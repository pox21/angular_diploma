const slider = new Swiper('.auth-slider', {
  slidesPerViewm: 1,
  loop: true,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.auth-slider__btn-next',
    prevEl: '.auth-slider__btn-prev',
  },

  // autoplay: {
  //   delay: 5000,
  // },

});