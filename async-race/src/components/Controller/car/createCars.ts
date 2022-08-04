/* eslint-disable */
import { updateInput } from '../rest/PUT/put-run';
import './_car.scss';
import { getCountAllCars, getPAge } from '../rest/GET/get-run';
import { CarsAttribute } from '../../types/types';
import { deleteCar } from '../rest/DELETE/delete-run';
import { inputUpdateCarName } from '../../templates/input';
import { getStartOneRace } from '../runRacing/race';
import {startStopBtns} from './carBtns/btn-car';

enum StartPgae {
  startpage = 1,
}

const addClass = (arrBlocks: HTMLElement[], carBlock: HTMLDivElement) => {
  arrBlocks.forEach((el) => el.classList.remove('choice'));
  arrBlocks.forEach((el) => {
    if (carBlock.id === el.id) el.classList.add('choice');
  });
  const name = <HTMLDivElement>carBlock.querySelector('.car__name');
  inputUpdateCarName().value = name.innerText;
};

const updateHasCar = (response: Promise<CarsAttribute[]>): HTMLElement => {
  const arrBlocks: HTMLElement[] = [];
  const racingBlock = <HTMLElement>document.createElement('div');
  racingBlock.className = 'racing__slider';
  response.then((cars: CarsAttribute[]) => {
    for (let i = 0; i < cars.length; i++) {
      const race = <HTMLDivElement>document.createElement('div');
      race.className = 'racing';
      const carBlock: HTMLDivElement = document.createElement('div');
      carBlock.innerHTML = `
        <div class="car__action">
        <button type="button" class="btn btn__select" id="btn-select">select</button>
        <button type="button" class="btn btn__delete" id="btn-delete">delete</button>
        <div class="car__name">${cars[i].name}</div>
       </div>
         <svg class="car__icon" fill="${cars[i].color}" id="">
           <use xlink:href="../assets/img/car.svg#carview"></use>
         </svg>`;
      carBlock.className = 'car';
      carBlock.id = `${cars[i].id}`;
      carBlock.style.color = `${cars[i].color}`;
      race.innerHTML = `${startStopBtns}`;
      race.appendChild(carBlock);
      arrBlocks.push(carBlock);
      racingBlock.appendChild(race);
      race.addEventListener('click', (ev) => {
        const message = ev.target as HTMLElement;
        switch (message.id) {
          case 'btn-select':
            addClass(arrBlocks, carBlock);
            break;
          case 'btn-delete':
            addClass(arrBlocks, carBlock);
            deleteCar();
            break;
          case 'run':
            getStartOneRace(Number(carBlock.id), carBlock);
          // no default
        }
      });
      carBlock.removeEventListener('click', updateInput);
    }
  });
  return racingBlock;
};

export const createCars = (): HTMLElement => {
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';
  const response = getPAge(1);

  main.appendChild(updateHasCar(response));
  getCountAllCars();
  return main;
};

export const updateCars = async (): Promise<void> => {
  inputUpdateCarName().value = '';
  const main = <HTMLElement>document.querySelector('.main');
  const countPAge = <HTMLElement>document.querySelector('#page-title span');
  const btnRight = <HTMLButtonElement>document.querySelector('#run-right');
  const btnLeft = <HTMLButtonElement>document.querySelector('#run-left');

  let pageNum = Number(countPAge.innerText);
  const allCars = await getCountAllCars();
  const pagesCount = Math.ceil(allCars.length / 7);
  if (pageNum >= pagesCount) {
    btnRight.setAttribute('disabled', 'disabled');
    pageNum = pagesCount;
    countPAge.innerText = `${pageNum}`;
  } else {
    btnRight.removeAttribute('disabled');
  }
  if (pageNum <= StartPgae.startpage) {
    btnLeft.setAttribute('disabled', 'disabled');
    pageNum = StartPgae.startpage;
    countPAge.innerText = `${pageNum}`;
  } else {
    btnLeft.removeAttribute('disabled');
  }
  main.innerHTML = '';
  const response = getPAge(Number(pageNum));
  main.appendChild(updateHasCar(response));
};
