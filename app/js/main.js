"use strict";

var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
"use strict";

var historyitemBtn = document.querySelectorAll('.history-item__btn');
var historyItemMoreWrapper = document.querySelectorAll('.history-item__more-wrapper');
historyitemBtn.forEach(function (btn) {
  btn.addEventListener('click', function (_ref) {
    var currentTarget = _ref.currentTarget,
        target = _ref.target;

    if (!currentTarget.classList.contains('open')) {
      historyitemBtn.forEach(function (el) {
        return el.classList.remove('open');
      });
      historyItemMoreWrapper.forEach(function (el) {
        el.classList.remove('open');
        el.style.maxHeight = 0;
      });
    }

    var nextEl = target.closest('.history-item__wrapper').nextElementSibling;
    currentTarget.classList.toggle('open');
    nextEl.classList.toggle('open');

    if (nextEl.classList.contains('open')) {
      nextEl.style.maxHeight = nextEl.scrollHeight + 70 + 'px';
    } else {
      nextEl.style.maxHeight = 0;
    }
  });
});
"use strict";

// const circle = document.querySelectorAll('.progress');
// const progressAnimation = () => {
//   let percentageProgress = Math.floor(98);
//   let radius = circle.getAttribute('r');
//   let circleLength = 2 * Math.PI * radius;
//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// }
// progressAnimation();
var circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(function (el) {
  var progress = el.querySelector('.progress');
  var percentageProgress;
  var radius = progress.getAttribute('r');
  var circleLength = 2 * Math.PI * radius;

  if (el.dataset.percentage) {
    var full = el.dataset.full;
    var value = el.dataset.value;
    var valueBlock = el.querySelector('.facts-element__value');
    percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    var _valueBlock = el.querySelector('.facts-element__value');

    var percent = el.dataset.percent;
    percentageProgress = Math.floor(percent);
    _valueBlock.textContent = percent + "%";
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});
"use strict";

var newsSlider = new Swiper('.news-slider__container', {
  slidesPerViewm: 1,
  loop: true,
  pagination: {
    el: '.news-slider__pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.news-slider__button-next',
    prevEl: '.news-slider__button-prev'
  },
  autoplay: {
    delay: 5000
  }
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
