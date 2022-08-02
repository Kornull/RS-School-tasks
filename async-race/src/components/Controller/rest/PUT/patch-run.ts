import { urlGarage } from '../../../templates/urls';
import { CarsAttribute } from '../../../types/types';
// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../car/createCars';

export const getUpdateCard = async (id: number, body: CarsAttribute): Promise<void> => {
  await fetch(`${urlGarage()}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  updateCars();
};

export const updateInput = () => {
  let id = 0;
  const inputName = <HTMLInputElement>document.querySelector('#car-name__update');
  const inputColor = <HTMLInputElement>document.querySelector('#car-color__update');
  const name = inputName.value;
  const carElements: NodeList = document.querySelectorAll('.car');
  carElements.forEach((el) => {
    const newEl = el as HTMLElement;
    if (newEl.classList.contains('choice')) {
      id = Number(newEl.id);
    }
  });

  const obg: CarsAttribute = {
    name: '',
    color: '',
    id: 0,
  };
  obg.name = name.slice(0, 1).toUpperCase() + name.slice(1);
  obg.color = inputColor.value;
  obg.id = id;
  if (id !== 0) {
    getUpdateCard(id, obg);
  } else {
    alert('AHAHA');
  }
  inputName.value = '';
};
