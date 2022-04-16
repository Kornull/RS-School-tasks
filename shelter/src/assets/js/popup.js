const slider = document.querySelector('.pets__slider');


slider.querySelectorAll('.slider__blocks').forEach(el => {
  el.onclick = (x) =>{
  console.log(el.querySelector('h3').textContent)
}
});


