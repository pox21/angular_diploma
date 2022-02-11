const selectEl = document.querySelectorAll('.select');

const addItem = (select, input, item) => {
  if (select.querySelector('.select__item')) {
    select.querySelector('.select__item').remove();
  }
  select.insertAdjacentElement('beforeend', item)
  // input.value = item.dataset.id;

  input.value = item.dataset.value;
}

const selectOpen = (select) => {
  select.classList.add('open');
}

const selectClose = (select) => {
  select.classList.remove('open');
}

selectEl.forEach(select => {
  const selectBtn = select.querySelector('.select__btn');
  const selectInput = select.querySelector('input');
  const selectInner = select.querySelector('.select__inner');
  const selectList = select.querySelector('.select__list');

  selectBtn.addEventListener('click', () => {
    if (select.classList.contains('open')) {
      selectClose(select);
    } else {
      selectOpen(select);
    }
   
    select.addEventListener('mouseleave', () => { selectClose(select) });
    
    select.addEventListener('click', ({ target }) => {
      if (target.closest('.select__list')) {
        const item = target.closest('.select__item');
        addItem(selectInner, selectInput, item.cloneNode(true));
        selectClose(select);
      }
    })
    
  
  });
});

