import './_garage.scss';
// eslint-disable-next-line import/no-cycle
import { getChartersToCar, getOneHundredCars } from '../../../Controller/rest/POST/post-run';
import { createCars, updateCars } from '../../../Controller/car/createCars';
import { updateInput } from '../../../Controller/rest/PUT/put-run';
import { deleteCar } from '../../../Controller/rest/DELETE/delete-run';
// import { getStartOneRace } from '../../../Controller/runRacing/race';
import { formGarage } from './form/form';

const getFormGarage = (): HTMLDivElement => {
  const form: HTMLDivElement = document.createElement('div');
  form.className = 'garage__forms';
  form.innerHTML = `${formGarage}`;
  return form;
};

export const garageLink = async (): Promise<HTMLElement> => {
  const garage: HTMLDivElement = document.createElement('div');
  garage.className = 'garage';
  const form = getFormGarage();
  const main = createCars();
  garage.append(form);
  garage.appendChild(main);
  const num = <HTMLElement>form.querySelector('#page-title span');

  form.addEventListener('click', (ev) => {
    const message = ev.target as HTMLElement;
    let res = Number(num.innerText);
    switch (message.id) {
      case 'one-car':
        getChartersToCar();
        break;
      case 'one-hundred-car':
        getOneHundredCars();
        break;
      case 'update-car':
        updateInput();
        break;
      case 'delete-car':
        deleteCar();
        break;
      case 'run-right':
        res += 1;
        num.innerText = `${res}`;
        updateCars();
        break;
      case 'run-left':
        res -= 1;
        if (res < 1) res = 1;
        num.innerText = `${res}`;
        updateCars();
        break;
      // no default
    }
  });
  form.removeEventListener('click', getChartersToCar);
  form.removeEventListener('click', getOneHundredCars);
  return garage;
};
