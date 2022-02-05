const historyitemBtn = document.querySelectorAll('.history-item__btn');
const historyItemMoreWrapper = document.querySelectorAll('.history-item__more-wrapper');

historyitemBtn.forEach(btn => {
  btn.addEventListener('click', ({ currentTarget, target }) => {
    if (!currentTarget.classList.contains('open')){
      historyitemBtn.forEach(el => el.classList.remove('open'));
      historyItemMoreWrapper.forEach(el => {
        el.classList.remove('open');
        el.style.maxHeight = 0;
      });
    }

    const nextEl = target.closest('.history-item__wrapper').nextElementSibling;
    currentTarget.classList.toggle('open');
    nextEl.classList.toggle('open');
    if (nextEl.classList.contains('open')) {
      nextEl.style.maxHeight = nextEl.scrollHeight + 70 + 'px';
    } else {
      nextEl.style.maxHeight = 0;
    }
    
  })
})