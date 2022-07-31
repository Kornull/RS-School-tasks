import { urlGarage } from '../../../templates/urls';
import { CarsAttribute } from '../../../types/types';
import { createCars } from '../../car/createCars';
// eslint-disable-next-line import/no-cycle
import { garageLink } from '../../../View/pages/garage/garage';

export const getNewCar = async () => {
  // const form = <HTMLFormElement>document.querySelector('#form-post');
  const color = <HTMLInputElement>document.querySelector('#car-color');
  // console.log(color);

  const name = <HTMLInputElement>document.querySelector('#car-name');
  const objCar: CarsAttribute = {
    name: name.value,
    color: color.value,
  };
  await fetch(`${urlGarage()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objCar),
  });
  await createCars();
};
