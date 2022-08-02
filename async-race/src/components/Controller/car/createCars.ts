// eslint-disable-next-line import/no-cycle
import { updateInput } from '../rest/PUT/patch-run';
import './_car.scss';
import { getCountCars } from '../rest/GET/get-run';
import { CarsAttribute } from '../../types/types';

const updateHasCar = (): HTMLElement => {
  const arrrBlocks: HTMLElement[] = [];
  const racingBlock = <HTMLElement>document.createElement('div');
  racingBlock.className = 'racing__slider';
  getCountCars().then((cars: CarsAttribute[]) => {
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
      arrrBlocks.push(carBlock);
      racingBlock.appendChild(race);
      carBlock.addEventListener('click', () => {
        const input = <HTMLInputElement>document.querySelector('#car-name__update');
        arrrBlocks.forEach((el) => el.classList.remove('choice'));
        arrrBlocks.forEach((el) => {
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

  main.appendChild(updateHasCar());
  return main;
};

export const updateCars = (): void => {
  const main = <HTMLElement>document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(updateHasCar());
};
