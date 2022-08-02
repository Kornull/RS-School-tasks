import { urlGarage } from '../../../templates/urls';
import { CarsAttribute } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../car/createCars';

export const getUpdateCard = async (id: number, body: CarsAttribute): Promise<void> => {
  await fetch(`${urlGarage()}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  setTimeout(() => {
    for (let i = 0; i < 1; i++) {
      updateCars();
    }
  }, 1000);
};

export const updateInput = (id: number, name: string) => {
  const btnUpdate = <HTMLButtonElement>document.querySelector('.btn__update-car');
  const inputName = <HTMLInputElement>document.querySelector('#car-name__update');
  const inputColor = <HTMLInputElement>document.querySelector('#car-color__update');

  inputName.value = name;
  btnUpdate.addEventListener('click', () => {
    const obg: CarsAttribute = {
      name: '',
      color: '',
    };
    obg.name = name.slice(0, 1).toUpperCase() + name.slice(1);
    obg.color = inputColor.value;
    getUpdateCard(id, obg);
  });
};
