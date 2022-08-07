import './_garage.scss';
// eslint-disable-next-line import/no-cycle
import { getChartersToCar, getOneHundredCars } from '../../../Controller/rest/rest-garage/POST/post-run';
import { createCars, updateCars } from '../../../Controller/car/createCars';
import { updateInput } from '../../../Controller/rest/rest-garage/PUT/put-run';
import { deleteCar } from '../../../Controller/rest/rest-garage/DELETE/delete-run';
import { formGarage } from './form/form';
import { RaceCommand } from '../../../types/types';
import { getStartRacing, getStopRacing } from '../../../Controller/runRacing/race';
import { popup } from './popup/popup';
import { closeAllBtns, openAllBtns } from '../../../Controller/buttons/close-open-btn/close-btn';

const getFormGarage = (): HTMLDivElement => {
  const form: HTMLDivElement = document.createElement('div');
  form.className = 'garage__forms';
  form.innerHTML = `${formGarage}`;
  return form;
};
const getPopup = (): HTMLDivElement => {
  const pop: HTMLDivElement = document.createElement('div');
  pop.className = 'popup block';
  pop.innerHTML = `${popup}`;
  return pop;
};

export const garageLink = async (): Promise<HTMLElement> => {
  const garage: HTMLDivElement = document.createElement('div');
  garage.className = 'garage';
  const form = getFormGarage();
  const main = await createCars();
  const popupBlock = getPopup();
  garage.append(form);
  garage.appendChild(main);
  garage.appendChild(popupBlock);
  const num = <HTMLElement>form.querySelector('#page-title span');

  form.addEventListener('click', (ev) => {
    const reset = <HTMLButtonElement>form.querySelector('#all-race');
    const carId: number[] = [];
    main.querySelectorAll('.car').forEach((car: Element) => {
      carId.push(Number(car.id));
    });
    const message = ev.target as HTMLElement;
    let res = Number(num.innerText);
    switch (message.id) {
      case 'one-car':
        getChartersToCar();
        break;
      case 'create-cars':
        getOneHundredCars();
        break;
      case 'update-car':
        updateInput();
        message.setAttribute('disabled', 'disabled');
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
      case 'all-race':
        message.classList.add('run__race');
        getStartRacing(carId, RaceCommand.start);
        closeAllBtns();
        break;
      case 'all-reset':
        reset.removeAttribute('disabled');
        getStopRacing(carId);
        openAllBtns();
        break;
      // no default
    }
  });
  return garage;
};
