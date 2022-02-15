const selectEl = document.querySelectorAll('.select');

const addItem = (select, input, item, placeholder) => {
  if (select.querySelector('.select__item')) {
    select.querySelector('.select__item').remove();
  }
  select.insertAdjacentElement('beforeend', item)
  placeholder.style.fontSize = 14 + 'px';
  placeholder.style.marginBottom = 5 + 'px';

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
  const listItem = selectList.querySelectorAll('.select__item');

  const placeholder = selectInner.querySelector('.select__placeholder')

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
        addItem(selectInner, selectInput, item.cloneNode(true), placeholder);
        selectClose(select);
      }
    })

    listItem.forEach(item => {
      item.addEventListener('focus', () => {
        selectOpen(select);
      });
      item.addEventListener('blur', () => {
        selectClose(select);
      });
    })
    
  
  });
});

