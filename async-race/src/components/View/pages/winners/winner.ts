/* eslint-disable object-curly-newline */
import './_winner.scss';
import { winCarCount, winList, winListEl } from './header-win/win';
import { returnWinners, viewCars, viewSort } from '../../../Controller/rest/rest-win/win-get';
import { getCountAllCars } from '../../../Controller/rest/rest-garage/GET/get-run';
import { CarsAttribute, CounterSort, Sort, StartPage, Winners } from '../../../types/types';

let countTime = CounterSort.countStart;
let countWin = CounterSort.countStart;

const winnerChar = async (carList: Winners[]) => {
  const listCars: Winners[] = await returnWinners();
  const winners: Winners[] = carList;
  const AllCarsPage: CarsAttribute[] = await getCountAllCars();
  const winDescr: HTMLDivElement = document.createElement('div');
  winDescr.className = 'win__car-all';
  winDescr.id = 'list-win-car';
  for (let i = 0; i < winners.length; i++) {
    const winCarDescr: HTMLDivElement = document.createElement('div');
    winCarDescr.className = 'win__car';
    const winNumber: HTMLDivElement = document.createElement('div');
    const winCar: HTMLDivElement = document.createElement('div');
    const winName: HTMLDivElement = document.createElement('div');
    const winCount: HTMLDivElement = document.createElement('div');
    const winTime: HTMLDivElement = document.createElement('div');
    const idCar: number = winners[i].id;
    let number: number = listCars.findIndex((el) => el.id === idCar);
    winNumber.className = 'win__number';
    winNumber.innerText = `${(number += 1)}`;
    winCar.className = 'win__car-svg';
    winName.className = 'win__name';
    winCount.className = 'win__count';
    winTime.className = 'win__time';
    AllCarsPage.forEach((car: CarsAttribute) => {
      if (car.id === winners[i].id) {
        winCar.innerHTML = `<svg class="car__icon-win" fill="${car.color}" id="car-${car.id}">
           <use xlink:href="./assets/img/car.svg#carview"></use>
         </svg>`;
        winName.innerHTML = `${car.name}`;
        winCount.innerHTML = `${winners[i].wins}`;
        winTime.innerHTML = `${winners[i].time}`;
      }
    });
    winCarDescr.appendChild(winNumber);
    winCarDescr.appendChild(winCar);
    winCarDescr.appendChild(winName);
    winCarDescr.appendChild(winCount);
    winCarDescr.appendChild(winTime);
    winDescr.appendChild(winCarDescr);
  }
  return winDescr;
};

export const sortUpdate = async (sort: string, commandSort: string): Promise<void> => {
  const countPAge = <HTMLElement>document.querySelector('#count-win-page');
  const pageNum = Number(countPAge.innerText);
  const tableWin = document.querySelector('#list-win-car') as HTMLDivElement;
  tableWin.innerHTML = '';
  winnerChar(await viewSort(pageNum, sort, commandSort)).then((res) => {
    tableWin.appendChild(res);
  });
};

export const setWinnerTable = async () => {
  const allCarsWin = await returnWinners();
  const tableWin = document.querySelector('#win-list-all-car') as HTMLDivElement;
  const countPAge = <HTMLElement>document.querySelector('#count-win-page');
  const btnRight = <HTMLButtonElement>document.querySelector('#page-r');
  const btnLeft = <HTMLButtonElement>document.querySelector('#page-l');
  const pagesCount = Math.ceil(allCarsWin.length / 10);
  let pageNum = Number(countPAge.innerText);
  if (pageNum >= pagesCount) {
    btnRight.setAttribute('disabled', 'disabled');
    pageNum = pagesCount;
    countPAge.innerText = `${pageNum}`;
  } else {
    btnRight.removeAttribute('disabled');
  }
  if (pageNum <= StartPage.startpage) {
    btnLeft.setAttribute('disabled', 'disabled');
    pageNum = StartPage.startpage;
    countPAge.innerText = `${pageNum}`;
  } else {
    btnLeft.removeAttribute('disabled');
  }
  Promise.any([winnerChar(await viewCars(pageNum))]).then((res) => {
    tableWin.innerHTML = '';
    tableWin.appendChild(res);
  });
};

const getUlElement = (): HTMLUListElement => {
  const ul = document.createElement('ul');
  ul.className = 'win__header win';
  ul.innerHTML = `${winListEl}`;
  ul.addEventListener('click', (ev) => {
    const message = ev.target as HTMLElement;
    switch (message.id) {
      case 'sort-time':
        ++countTime;
        if (countTime % 2) {
          sortUpdate(Sort.time, Sort.asc);
        } else {
          sortUpdate(Sort.time, Sort.desk);
        }
        break;
      case 'sort-win':
        ++countWin;
        if (countWin % 2) {
          sortUpdate(Sort.wins, Sort.asc);
        } else {
          sortUpdate(Sort.wins, Sort.desk);
        }
        break;
      default:
        break;
    }
    if (countWin === CounterSort.countStop) countWin = CounterSort.countReset;
    if (countTime === CounterSort.countStop) countTime = CounterSort.countReset;
  });
  return ul;
};

const pageWinCount = (): HTMLDivElement => {
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

export const winnerTable = async (): Promise<HTMLDivElement> => {
  const divWin = document.createElement('div');
  divWin.className = 'win__table win';
  const ulBtn = getUlElement();
  divWin.append(winCarCount());
  divWin.append(pageWinCount());
  divWin.append(ulBtn);
  const list = winList();
  const cars = await viewCars(1);
  winnerChar(cars).then((res) => {
    list.appendChild(res);
  });
  divWin.appendChild(list);
  return divWin;
};

export const getWinnerTable = async (): Promise<HTMLDivElement> => winnerTable();
