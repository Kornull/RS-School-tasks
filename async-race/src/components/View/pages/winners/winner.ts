/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import './_winner.scss';
import { getUlEl, pageWinCount, winCarCount, winList } from './header-win/win';
import { returnWinners, viewCars, viewSort } from '../../../Controller/rest/rest-win/win-get';
import { getCountAllCars } from '../../../Controller/rest/rest-garage/GET/get-run';
import { CarsAttribute, StartPage, Winners } from '../../../types/types';

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
         </svg>\``;
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

export const winnerTable = async (): Promise<HTMLDivElement> => {
  const divWin = document.createElement('div');
  divWin.className = 'win__table win';
  divWin.append(winCarCount());
  divWin.append(pageWinCount());
  divWin.append(getUlEl());
  const list = winList();
  const cars = await viewCars(1);
  winnerChar(cars).then((res) => {
    list.appendChild(res);
  });
  divWin.appendChild(list);
  return divWin;
};

export const getWinnerTable = async (): Promise<HTMLDivElement> => winnerTable();

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
  tableWin.innerHTML = '';

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
  winnerChar(await viewCars(pageNum)).then((res) => {
    tableWin.appendChild(res);
  });
};
