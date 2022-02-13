const tooltipsBtns = document.querySelectorAll('.label__icon'); 

tooltipsBtns.forEach(btn => {
  btn.addEventListener('click', ({target}) => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      return
    }
    
    if (target.classList.contains('label__icon') || target.classList.contains('icon')) {
      tooltipsBtns.forEach(btn => {
        btn.classList.remove('active');
      });

      btn.classList.toggle('active');

    }
  });
})