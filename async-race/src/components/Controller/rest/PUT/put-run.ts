import { urlGarage } from '../../../templates/urls';
import { CarsAttribute } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { createCars } from '../../car/createCars';

export const updateEmployee = async (id: number, body: CarsAttribute) => {
  await fetch(`${urlGarage()}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  // return response.json();
  createCars();
};
