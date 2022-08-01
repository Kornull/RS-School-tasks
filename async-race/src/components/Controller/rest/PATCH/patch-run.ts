import { urlGarage } from '../../../templates/urls';
import { CarsAttribute } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { createCars } from '../../car/createCars';

const getUpdateCard = async (id: number, body: CarsAttribute): Promise<void> => {
  await fetch(`${urlGarage()}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  await createCars();
};

export const updateInput = async (id: number, name: string) => {
  const btnUpdate = <HTMLButtonElement>document.querySelector('.btn__update-car');
  const inputName = <HTMLInputElement>document.querySelector('#car-name__update');
  const inputColor = <HTMLInputElement>document.querySelector('#car-color__update');
  inputName.value = name;

  btnUpdate.addEventListener('click', () => {
    const obg: CarsAttribute = {
      name: inputName.value.slice(0, 1).toUpperCase() + inputName.value.slice(1),
      color: inputColor.value,
    };
    getUpdateCard(id, obg);
  });
};
