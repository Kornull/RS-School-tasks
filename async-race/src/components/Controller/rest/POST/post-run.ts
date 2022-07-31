import { urlGarage } from '../../../templates/urls';
import { CarsAttribute } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { createCars } from '../../car/createCars';

export const getNewCar = async () => {
  const color = <HTMLInputElement>document.querySelector('#car-color');
  const name = <HTMLInputElement>document.querySelector('#car-name');
  const objCar: CarsAttribute = {
    name: name.value.slice(0, 1).toUpperCase() + name.value.slice(1),
    color: color.value,
  };
  await fetch(`${urlGarage()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objCar),
  });
  createCars();
};
