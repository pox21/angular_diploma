const dateInput = document.querySelectorAll('.field-date__date');

dateInput.forEach(el => {
    el.addEventListener('change', () => {
      const val = new Date(el.value).toLocaleString('ru-Ru', {day: 'numeric', month: 'long', year: 'numeric'}).replace('г.', '');
      el.previousElementSibling.textContent = val;
    }); 
});