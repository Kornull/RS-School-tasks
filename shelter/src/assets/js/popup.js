const slider = document.querySelector('.pets__slider');
function click() {
  slider.querySelectorAll('.slider__blocks').forEach(el => {
    el.addEventListener('click', function (x) {
      console.log(el.querySelector('h3').textContent)
    });
  })
}

window.addEventListener('resize', function () {
  click();
})

click();
