const tooltipsBtns = document.querySelectorAll('.label__icon'); 

const tooltipOpen = (tooltip) => {
  tooltip.classList.add('active');
  tooltip.style.overflow = 'visible';
}

const tooltipClose = (tooltip) => {
  tooltip.classList.remove('active')
  setTimeout(() => {
          tooltip.style.overflow = 'hidden';
  }, 200)
}

tooltipsBtns.forEach(btn => {

  btn.addEventListener('mouseenter', () => {
    setTimeout(() => {
      tooltipOpen(btn);
    }, 210)
  });

  btn.addEventListener('mouseleave', () => {
    tooltipClose(btn);
  });

  btn.addEventListener('click', ({target}) => {
    
    if (target.classList.contains('label__icon') || target.classList.contains('icon')) {

      if (btn.classList.contains('active')) {
        tooltipClose(btn)
        return
      }

      tooltipsBtns.forEach(btn => {
        tooltipClose(btn);
      });

      setTimeout(() => {
          tooltipOpen(btn);
      }, 210)

    }
  });

  

})