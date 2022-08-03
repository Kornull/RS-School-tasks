import { urlGarage } from '../../../templates/urls';
// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../car/createCars';

export const getDelCard = async (id: number): Promise<void> => {
  await fetch(`${urlGarage()}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  updateCars();
};

export const deleteCar = () => {
  let id = 0;
  const carElements: NodeList = document.querySelectorAll('.car');
  carElements.forEach((el) => {
    const newEl = el as HTMLElement;
    if (newEl.classList.contains('choice')) {
      id = Number(newEl.id);
    }
  });
  if (id !== 0) {
    getDelCard(id);
  } else {
    // eslint-disable-next-line no-alert
    alert('UPS');
  }
};
