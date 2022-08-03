// eslint-disable-next-line import/no-cycle
import { updateInput } from '../rest/PUT/patch-run';
import './_car.scss';
import { getCountAllCars, getPAge } from '../rest/GET/get-run';
import { CarsAttribute } from '../../types/types';

enum StartPgae {
  startpage = 1,
}

const updateHasCar = (response: Promise<CarsAttribute[]>): HTMLElement => {
  const arrBlocks: HTMLElement[] = [];
  const racingBlock = <HTMLElement>document.createElement('div');
  racingBlock.className = 'racing__slider';
  response.then((cars: CarsAttribute[]) => {
    for (let i = 0; i < cars.length; i++) {
      const race = <HTMLDivElement>document.createElement('div');
      race.className = 'racing';
      const carBlock: HTMLDivElement = document.createElement('div');
      carBlock.className = 'car';
      carBlock.id = `${cars[i].id}`;
      carBlock.style.color = `${cars[i].color}`;
      carBlock.innerHTML = `
       <div class="car__name">${cars[i].name}</div>
         <svg class="car__icon" fill="${cars[i].color}" id="">
           <use xlink:href="../assets/img/car.svg#carview"></use>
         </svg>
      `;
      race.innerHTML = `
      <button type="button" class="btn btn__race-start" id="run">race</button>
      <button type="button" class="btn btn__race-stop" id="stop"></button>
      `;
      race.appendChild(carBlock);
      arrBlocks.push(carBlock);
      racingBlock.appendChild(race);
      carBlock.addEventListener('click', () => {
        const input = <HTMLInputElement>document.querySelector('#car-name__update');
        arrBlocks.forEach((el) => el.classList.remove('choice'));
        arrBlocks.forEach((el) => {
          if (carBlock.id === el.id) el.classList.add('choice');
        });

        input.value = carBlock.innerText;
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
  return main;
};

export const updateCars = async (): Promise<void> => {
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
