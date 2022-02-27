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

var dateInput = document.querySelectorAll('.field-date__date');
dateInput.forEach(function (el) {
  var placeholder = el.parentNode.querySelector('.field-date__placeholder');
  el.addEventListener('change', function () {
    var val = new Date(el.value).toLocaleString('ru-Ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).replace('г.', '');
    console.log(placeholder.nextElementSibling);

    if (!placeholder.nextElementSibling) {
      placeholder.insertAdjacentHTML('afterend', "<span class=\"field-date__text fs-small\">".concat(val, "</span>"));
    } else {
      placeholder.nextElementSibling.textContent = val;
    }

    placeholder.style.fontSize = 14 + 'px';
  });
});
"use strict";

var selectEl = document.querySelectorAll('.select');

var addItem = function addItem(select, input, item, placeholder) {
  if (select.querySelector('.select__item')) {
    select.querySelector('.select__item').remove();
  }

  select.insertAdjacentElement('beforeend', item);
  placeholder.style.fontSize = 14 + 'px';
  placeholder.style.marginBottom = 5 + 'px';
  input.value = item.dataset.value;
};

var selectOpen = function selectOpen(select) {
  select.classList.add('open');
};

var selectClose = function selectClose(select) {
  select.classList.remove('open');
};

selectEl.forEach(function (select) {
  var selectBtn = select.querySelector('.select__btn');
  var selectInput = select.querySelector('input');
  var selectInner = select.querySelector('.select__inner');
  var selectList = select.querySelector('.select__list');
  var listItem = selectList.querySelectorAll('.select__item');
  var placeholder = selectInner.querySelector('.select__placeholder');
  selectBtn.addEventListener('click', function () {
    if (select.classList.contains('open')) {
      selectClose(select);
    } else {
      selectOpen(select);
    }

    select.addEventListener('mouseleave', function () {
      selectClose(select);
    });
    select.addEventListener('click', function (_ref) {
      var target = _ref.target;

      if (target.closest('.select__list')) {
        var item = target.closest('.select__item');
        addItem(selectInner, selectInput, item.cloneNode(true), placeholder);
        selectClose(select);
      }
    });
    listItem.forEach(function (item) {
      item.addEventListener('focus', function () {
        selectOpen(select);
      });
      item.addEventListener('blur', function () {
        selectClose(select);
      });
    });
  });
});
"use strict";

var slider = new Swiper('.auth-slider', {
  slidesPerViewm: 1,
  loop: true,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.auth-slider__btn-next',
    prevEl: '.auth-slider__btn-prev'
  } // autoplay: {
  //   delay: 5000,
  // },

});
"use strict";

// const tooltipsBtns = document.querySelectorAll('.label__icon'); 
var tooltipsBtns = document.querySelectorAll('[data-tooltip]');
console.log(tooltipsBtns);

var tooltipOpen = function tooltipOpen(tooltip) {
  tooltip.classList.add('active');
  tooltip.style.overflow = 'visible';
};

var tooltipClose = function tooltipClose(tooltip) {
  tooltip.classList.remove('active');
  setTimeout(function () {
    tooltip.style.overflow = 'hidden';
  }, 200);
};

tooltipsBtns.forEach(function (btn) {
  btn.addEventListener('mouseenter', function () {
    setTimeout(function () {
      tooltipOpen(btn);
    }, 210);
  });
  btn.addEventListener('mouseleave', function () {
    tooltipClose(btn);
  });
  btn.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.classList.contains('label__icon') || target.classList.contains('icon')) {
      if (btn.classList.contains('active')) {
        tooltipClose(btn);
        return;
      }

      tooltipsBtns.forEach(function (btn) {
        tooltipClose(btn);
      });
      setTimeout(function () {
        tooltipOpen(btn);
      }, 210);
    }
  });
  btn.addEventListener('keypress', function (e) {
    e.preventDefault();

    if (e.key === ' ' || e.key === 'Enter') {
      if (btn.classList.contains('active')) {
        tooltipClose(btn);
        return;
      }

      tooltipsBtns.forEach(function (btn) {
        tooltipClose(btn);
      });
      setTimeout(function () {
        tooltipOpen(btn);
      }, 210);
    }
  });
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
