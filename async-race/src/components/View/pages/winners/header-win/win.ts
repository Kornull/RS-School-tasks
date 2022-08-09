/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import './_win.scss';
// eslint-disable-next-line import/no-cycle
import { setWinnerTable, sortUpdate } from '../winner';
import { Sort } from '../../../../types/types';

let count = 0;

export const win = <HTMLElement>(<unknown>`
    <li class="win__text">Number</li>
    <li class="win__text">Car</li>
    <li class="win__text">Name</li>
    <li class="win__text" id="sort-win">Wins</li>
    <li class="win__text" id="sort-time">Best time</li>
`);

export const getUlEl = (): HTMLUListElement => {
  const ul = document.createElement('ul');
  ul.className = 'win__header win';
  ul.innerHTML = `${win}`;

  ul.addEventListener('click', (ev) => {
    ++count;
    const message = ev.target as HTMLElement;
    switch (message.id) {
      case 'sort-time':
        count % 2 === 0 ? sortUpdate(Sort.time, Sort.asc) : sortUpdate(Sort.time, Sort.desk);
        break;
      case 'sort-win':
        count % 2 === 0 ? sortUpdate(Sort.wins, Sort.asc) : sortUpdate(Sort.wins, Sort.desk);
        break;
      // no default
    }
  });
  if (count === 11) count = 1;
  return ul;
};

export const winCarCount = (): HTMLDivElement => {
  const countWinCar: HTMLDivElement = document.createElement('div');
  countWinCar.className = 'win__count-car';
  return countWinCar;
};

export const pageWinCount = (): HTMLDivElement => {
  const pageWinCar: HTMLDivElement = document.createElement('div');
  const pageWinBtns: HTMLDivElement = document.createElement('div');
  const pageWinText: HTMLDivElement = document.createElement('div');
  const pageR: HTMLButtonElement = document.createElement('button');
  const pageL: HTMLButtonElement = document.createElement('button');
  pageWinText.className = 'page__text--win';
  pageWinBtns.className = 'page__btns';
  pageR.className = 'page__btn btn btn__right';
  pageL.className = 'page__btn btn btn__left';
  pageR.id = 'page-r';
  pageR.innerText = '❱';
  pageL.id = 'page-l';
  pageL.innerText = '❰';
  pageWinCar.className = 'win__count-page';
  pageWinText.innerHTML = 'Page <span id="count-win-page">1</span>';
  pageWinBtns.appendChild(pageL);
  pageWinBtns.appendChild(pageR);
  pageWinCar.appendChild(pageWinText);
  pageWinCar.appendChild(pageWinBtns);

  pageR.addEventListener('click', () => {
    const pageNum = pageWinText.lastChild as HTMLElement;
    let num = Number(pageNum.innerText);
    num += 1;
    pageNum.innerText = `${num}`;
    setWinnerTable();
  });
  pageL.addEventListener('click', () => {
    const pageNum = pageWinText.lastChild as HTMLElement;
    let num = Number(pageNum.innerText);
    num -= 1;
    pageNum.innerHTML = `${num}`;
    setWinnerTable();
  });
  return pageWinCar;
};
export const winList = (): HTMLDivElement => {
  const list: HTMLDivElement = document.createElement('div');
  list.className = 'win__list-cars';
  list.id = 'win-list-all-car';

  return list;
};
