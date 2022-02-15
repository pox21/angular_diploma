const dateInput = document.querySelectorAll('.field-date__date');


dateInput.forEach(el => {
  const textDateEl = el.parentNode.querySelector('.field-date__text');
    el.addEventListener('change', () => {
      const val = new Date(el.value).toLocaleString('ru-Ru', {day: 'numeric', month: 'long', year: 'numeric'}).replace('г.', '');
      textDateEl.textContent = val;
    }); 
});