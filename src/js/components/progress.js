// const circle = document.querySelectorAll('.progress');

// const progressAnimation = () => {
//   let percentageProgress = Math.floor(98);

//   let radius = circle.getAttribute('r');
//   let circleLength = 2 * Math.PI * radius;
//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// }

// progressAnimation();

const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {
  let progress = el.querySelector('.progress');
  let percentageProgress;
  let radius = progress.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  if (el.dataset.percentage) {
    let full = el.dataset.full;
    let value = el.dataset.value;
    let valueBlock = el.querySelector('.facts-element__value');
    percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);

  } else {
    let valueBlock = el.querySelector('.facts-element__value');
    let percent = el.dataset.percent;
    percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + "%";
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }

});