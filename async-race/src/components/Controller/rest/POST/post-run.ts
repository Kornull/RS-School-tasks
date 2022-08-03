import { CarsAttribute, CountCars, Urls } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../car/createCars';
import { carName, carModel, colorChar } from '../../../templates/cars-charters';

const getNewCar = async (objCar: CarsAttribute) => {
  await fetch(`${Urls.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objCar),
  });
  updateCars();
};

export const getChartersToCar = async (): Promise<void> => {
  const color = <HTMLInputElement>document.querySelector('#car-color');
  const name = <HTMLInputElement>document.querySelector('#car-name');
  if (name.value.length === 0) name.value = carName[Math.floor(Math.random() * carName.length)];
  const objCar: CarsAttribute = {
    name: name.value.slice(0, 1).toUpperCase() + name.value.slice(1),
    color: color.value,
  };
  await getNewCar(objCar);
  name.value = '';
};

export const getOneHundredCars = () => {
  for (let i = 0; i < CountCars.cars; i++) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getRandomCarCharters();
  }
};

const getRandomCarCharters = async (): Promise<void> => {
  const name = carName[Math.floor(Math.random() * carName.length)];
  const model = carModel[Math.floor(Math.random() * carModel.length)];
  let colorCar = '#';
  for (let i = 0; i < 6; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    colorCar += colorChar[Math.floor(Math.random() * colorChar.length)];
  }
  const obg: CarsAttribute = {
    name: `${name} ${model}`,
    color: colorCar,
  };
  getNewCar(obg);
};
