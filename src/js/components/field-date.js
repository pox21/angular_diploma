const dateInput = document.querySelectorAll('.field-date__date');


dateInput.forEach(el => {
  const textDateEl = el.parentNode.querySelector('.field-date__text');
  const placeholder = el.parentNode.querySelector('.field-date__placeholder');
    el.addEventListener('change', () => {
      const val = new Date(el.value).toLocaleString('ru-Ru', {day: 'numeric', month: 'long', year: 'numeric'}).replace('г.', '');
      placeholder.insertAdjacentHTML('afterend', `<span class="field-date__text">${val}</span>`);
      // textDateEl.textContent = val;
      placeholder.style.fontSize = 14 + 'px';
    }); 
});