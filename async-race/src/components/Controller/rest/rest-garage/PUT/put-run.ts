import { CarsAttribute, Urls } from '../../../../types/types';
// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../../../View/pages/garage/car/createCars';
import { inputUpdateCarName } from '../../../../templates/input';

export const getUpdateCard = async (id: number, body: CarsAttribute): Promise<void> => {
  await fetch(`${Urls.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  updateCars();
};

export const updateInput = (): void => {
  let id = 0;
  const inputName: HTMLInputElement = inputUpdateCarName();
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
    // eslint-disable-next-line no-alert
    alert('The car is no longer here.');
  }
  inputName.value = '';
};
