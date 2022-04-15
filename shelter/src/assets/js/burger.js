const headerElements = document.querySelector('.header');
const btnBurger = document.querySelector('.burger')
const blocksHeader = headerElements.querySelectorAll('div')
const burgerIcon = headerElements.querySelector('span')
const nav = headerElements.querySelector('.nav')
const navLink = nav.querySelectorAll('.nav__link')
const logoBurger = headerElements.querySelector('.burger__logo')
if (btnBurger) {
  btnBurger.addEventListener('click', function (ev) {
    document.body.classList.toggle('active')
    nav.classList.toggle('active')
    blocksHeader.forEach(x => x.classList.toggle('active'));
    burgerIcon.classList.toggle('active')
    logoBurger.classList.toggle('active__logo')

  })
  navLink.forEach(x => x.addEventListener('click', function (el) {
    document.body.classList.toggle('active')
    nav.classList.toggle('active')
    blocksHeader.forEach(x => x.classList.toggle('active'));
    burgerIcon.classList.toggle('active')
  }))
}
