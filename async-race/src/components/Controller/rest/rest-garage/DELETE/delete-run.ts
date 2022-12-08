// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../../../View/pages/garage/car/createCars';
import { inputUpdateCarName } from '../../../../templates/input';
import { Urls, Winners } from '../../../../types/types';
import { returnWinners } from '../../rest-win/win-get';
import { setWinnerTable } from '../../../../View/pages/winners/winner';

export const getDelCard = async (id: number): Promise<void> => {
  await fetch(`${Urls.garage}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const winarr: Winners[] = await returnWinners();
  // eslint-disable-next-line no-restricted-syntax
  for (const car of winarr) {
    if (car.id === id) {
      fetch(`${Urls.winners}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setWinnerTable();
    }
  }
  updateCars();
};

export const deleteCar = (): void => {
  let id = 0;
  const carElements: NodeList = document.querySelectorAll('.car');

  carElements.forEach((el: Node) => {
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
  inputUpdateCarName().value = '';
};
