import obj from '../../main/pets.json';
const blockPagination = document.querySelector('.slide__pagination');
const BUTNS = document.querySelector('.btns__slider-pets');
const pagBlocks = document.querySelectorAll('.pagination__block');
const allPagBtns = BUTNS.querySelectorAll('.btn__our-pets');
const numberStr = document.querySelector('.num__page-slider');
const btnR = BUTNS.querySelector('.pets--right');
const btnAllR = BUTNS.querySelector('.pets--all__right');
const btnL = document.querySelector('.pets--left');
const btnAllL = document.querySelector('.pets--left__all');
const arrName = [];
let petObj = {};
const arrDesctop = [];
const arrTouch = [];
const arrMobile = [];
function paginationNumbers(counts) {
  BUTNS.addEventListener('click', (ev) => {
    if (ev.target.className === 'btn__our-pets pets--right') {

      let numPageForward = +numberStr.textContent + 1;
      numberStr.innerHTML = numPageForward;
      allPagBtns.forEach(x => x.classList.remove('inactive'))
      pageCards(numPageForward)

      if (+numberStr.textContent !== 1 && +numberStr.textContent !== counts) {
        allPagBtns.forEach(x => x.classList.remove('inactive'))
        allPagBtns.forEach(x => x.removeAttribute('disabled'))
      }

    } if (ev.target.className === 'btn__our-pets pets--left') {
      let numPageBack = +numberStr.textContent - 1;
      numberStr.innerHTML = numPageBack;
      allPagBtns.forEach(x => x.classList.remove('inactive'))
      pageCards(numPageBack)

      if (+numberStr.textContent !== 1 && +numberStr.textContent !== 6) {
        allPagBtns.forEach(x => x.classList.remove('inactive'))
      }

    }
    if (ev.target.className === 'btn__our-pets pets--all__right' || ev.target.className === 'btn__our-pets pets--left__all') {
      allPagBtns.forEach(x => x.classList.remove('inactive'))
      numberStr.innerHTML = 6;
      pageCards(arrDesctop.length)
    }
    if (ev.target.className === 'btn__our-pets pets--left__all') {
      allPagBtns.forEach(x => x.classList.remove('inactive'))
      numberStr.innerHTML = 1;
      pageCards(1)
    }

    if (+numberStr.textContent === 6) {
      btnR.classList.add('inactive')
      btnR.setAttribute("disabled", "disabled")
      btnAllR.classList.add('inactive')
      btnAllR.setAttribute("disabled", "disabled")
      btnL.classList.remove('inactive')
      btnL.removeAttribute("disabled")
      btnAllL.classList.remove('inactive')
      btnAllL.removeAttribute("disabled")
    }
    if (+numberStr.textContent === 1) {
      btnL.classList.add('inactive')
      btnL.setAttribute("disabled", "disabled")
      btnAllL.classList.add('inactive')
      btnAllL.setAttribute("disabled", "disabled")
      btnR.classList.remove('inactive')
      btnR.removeAttribute("disabled")
      btnAllR.classList.remove('inactive')
      btnAllR.removeAttribute("disabled")
    }
  })
}
function newArrNames() {
  pagBlocks.forEach(x => arrName.push(x.querySelector('.our__pets--slider').textContent))
}
newArrNames()
function desctopArr() {
  for (let i = 0; i < 6; i++) {
    let temporaryArr = [];
    while (temporaryArr.length < 8) {
      let num = Math.floor(Math.random() * 8)
      if (!temporaryArr.includes(arrName[num])) {
        temporaryArr.push(arrName[num])
      }
    }
    arrDesctop.push(temporaryArr);
  }
  paginationNumbers(arrDesctop.length);
}

desctopArr()

function pageCards(page) {
  let t = []
  pagBlocks.forEach((item, numb) => {
    for (let j of obj) {
      if (arrDesctop[page - 1][numb] === j.name && !t.includes(arrDesctop[page - 1][numb])) {
        t.push(arrDesctop[page - 1][numb])
        item.querySelector('img').src = `.${j.img}`;
        item.id = j.name.toLowerCase()
      }
    }
  })
}


pageCards(1)





















