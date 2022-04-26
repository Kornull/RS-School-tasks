import obj from '../../main/pets.json'
import './popup.js'
import { popurRun } from './popup.js';
const BUTNS = document.querySelector('.btns__slider-pets');
const pagBlocks = document.querySelectorAll('.pagination__block');
const allPagBtns = BUTNS.querySelectorAll('.btn__our-pets');
const numberStr = document.querySelector('.num__page-slider');
const btnR = BUTNS.querySelector('.pets--right');
const btnAllR = BUTNS.querySelector('.pets--all__right');
const btnL = document.querySelector('.pets--left');
const btnAllL = document.querySelector('.pets--left__all');
const arrays = [];
const bigArrays = [];
BUTNS.addEventListener('click', (ev) => {
  if (ev.target.className === 'btn__our-pets pets--right') {
    numberStr.innerHTML = +numberStr.textContent + 1;
    allPagBtns.forEach(x => x.classList.remove('inactive'))

    if (+numberStr.textContent !== 1 && +numberStr.textContent !== 6) {
      allPagBtns.forEach(x => x.classList.remove('inactive'))
      allPagBtns.forEach(x => x.removeAttribute('disabled'))
    }

  } if (ev.target.className === 'btn__our-pets pets--left') {
    numberStr.innerHTML = +numberStr.textContent - 1;
    allPagBtns.forEach(x => x.classList.remove('inactive'))

    if (+numberStr.textContent !== 1 && +numberStr.textContent !== 6) {
      allPagBtns.forEach(x => x.classList.remove('inactive'))
    }

  }
  if (ev.target.className === 'btn__our-pets pets--all__right' || ev.target.className === 'btn__our-pets pets--left__all') {
    allPagBtns.forEach(x => x.classList.remove('inactive'))

    numberStr.innerHTML = 6;
  }
  if (ev.target.className === 'btn__our-pets pets--left__all') {
    allPagBtns.forEach(x => x.classList.remove('inactive'))

    numberStr.innerHTML = 1;
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

function newArrNames() {
  pagBlocks.forEach(x => arrays.push(x.querySelector('.our__pets--slider').textContent))
}
newArrNames()

function randName() {
  for (let i = 0; i < arrays.length; i++) {
    let arrN = [];

  }}
