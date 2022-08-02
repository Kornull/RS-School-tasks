// eslint-disable-next-line import/no-cycle
import { updateInput } from '../rest/PATCH/patch-run';
import './_car.scss';
import { getCountCars } from '../rest/GET/get-run';
import { CarsAttribute } from '../../types/types';

const updateHasCar = (): HTMLElement => {
  const racingBlock = <HTMLElement>document.createElement('div');
  racingBlock.className = 'rasing__slider';
  getCountCars().then((cars: CarsAttribute[]) => {
    for (let i = 0; i < cars.length; i++) {
      const race = <HTMLElement>document.createElement('div');
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
      racingBlock.appendChild(race);
      carBlock.addEventListener('click', () => {
        const arr = <Array<number | string>>Array.from(new Set());
        const num = Number(carBlock.id);
        const str: string = carBlock.innerText;
        arr.push(num);
        arr.push(str);
        if (typeof arr[0] === 'number' && typeof arr[1] === 'string') updateInput(arr[0], arr[1]);
      });
      carBlock.removeEventListener('click', () => {});
    }
  });
  return racingBlock;
};

export const createCars = (): HTMLElement => {
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';

  main.appendChild(updateHasCar());
  return main;
};

export const updateCars = (): void => {
  const main = <HTMLElement>document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(updateHasCar());
};
