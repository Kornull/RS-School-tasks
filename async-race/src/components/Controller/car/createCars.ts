import './_car.scss';
import { getCountCars } from '../GET/api';
import { CarsAttribute } from '../../types/types';

const createCar = (color: string) => {
  const car: HTMLDivElement = document.createElement('div');
  car.className = 'car';
  const svg: HTMLElement = document.createElement('svg');
  svg.className = 'car__icon';
  car.innerHTML = `<svg class="car__icon" fill="${color}">
  <use xlink:href="../assets/img/carr.svg#carr"></use>
  </svg>
  `;

  return car;
};

const create = async (colorArr: string[]) => {
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';

  const body = document.querySelector('body') as HTMLBodyElement;
  colorArr.forEach((color: string) => {
    main.appendChild(createCar(color));
  });
  body.append(main);
};

export const createCars = async () => {
  const carsObj: CarsAttribute[] = await getCountCars();
  const colorArr: string[] = carsObj.map((key: CarsAttribute) => key.color);

  await create(colorArr);
};
// document.querySelector('body').append(createCar()) as HTMLBodyElement;
