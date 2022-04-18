const headerElements = document.querySelector('.header');
const btnBurger = document.querySelector('.burger');
const blocksHeader = headerElements.querySelectorAll('div');
const burgerIcon = headerElements.querySelector('span');
const nav = headerElements.querySelector('.nav');
const navLink = nav.querySelectorAll('.nav__link');
const logoBurger = headerElements.querySelector('.burger__logo');
const shadow = document.querySelector('.shadow');
let widthWindow;

i = 0
function removeClass(){
  document.body.classList.remove('active');
  nav.classList.remove('active');
  blocksHeader.forEach(x => x.classList.remove('active'));
  burgerIcon.classList.remove('active');
  logoBurger.classList.remove('active__logo');
  shadow.classList.remove('active');
  i++
  console.log(`ddddddd`,i)
};
if (btnBurger) {
  btnBurger.onclick = () => {
    document.body.classList.toggle('active');
    nav.classList.toggle('active');
    blocksHeader.forEach(x => x.classList.toggle('active'));
    burgerIcon.classList.toggle('active');
    logoBurger.classList.toggle('active__logo');
    shadow.classList.toggle('active');
  }
};
navLink.forEach(x => x.onclick = (el) => {
  removeClass();
});;


window.addEventListener("orientationchange", removeClass);
window.addEventListener('resize', function (el) {
  widthWindow = window.innerWidth
  if (widthWindow > 767) {
  removeClass();
  }
});
