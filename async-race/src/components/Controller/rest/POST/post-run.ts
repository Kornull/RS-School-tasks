import { urlGarage } from '../../../templates/urls';
import { CarsAttribute, Onehundred } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { createCars } from '../../car/createCars';
import { carName, carModel, colorChar } from '../../../templates/cars-charters';

const getNewCar = async (objCar: CarsAttribute) => {
  await fetch(`${urlGarage()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objCar),
  });
  await createCars();
};

export const getChartersToCar = async (): Promise<void> => {
  const color = <HTMLInputElement>document.querySelector('#car-color');
  const name = <HTMLInputElement>document.querySelector('#car-name');
  const objCar: CarsAttribute = {
    name: name.value.slice(0, 1).toUpperCase() + name.value.slice(1),
    color: color.value,
  };
  await getNewCar(objCar);
};

export const getOneHundredCars = async () => {
  for (let i = 0; i < Onehundred.nundred; i++) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getRandomCarCharters();
  }
};

const getRandomCarCharters = (): void => {
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
  getNewCar(obg).then((r) => r);
};
