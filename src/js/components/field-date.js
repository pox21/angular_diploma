const dateInput = document.querySelectorAll('.field-date__date');


dateInput.forEach(el => {
  const placeholder = el.parentNode.querySelector('.field-date__placeholder');
    el.addEventListener('change', () => {
      const val = new Date(el.value).toLocaleString('ru-Ru', {day: 'numeric', month: 'long', year: 'numeric'}).replace('г.', '');
      console.log(placeholder.nextElementSibling)
      if (!placeholder.nextElementSibling) {
        placeholder.insertAdjacentHTML('afterend', `<span class="field-date__text fs-small">${val}</span>`);
      } else {
        placeholder.nextElementSibling.textContent = val;
      }
      placeholder.style.fontSize = 14 + 'px';
    });
});
