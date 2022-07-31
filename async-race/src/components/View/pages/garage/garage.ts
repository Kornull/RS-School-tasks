import './_garage.scss';
// eslint-disable-next-line import/no-cycle
import { getNewCar } from '../../../Controller/rest/POST/post-run';

const getFormGarage = (): HTMLDivElement => {
  const form: HTMLDivElement = document.createElement('div');
  form.className = 'garage__forms';
  form.innerHTML = `
  <form id="form-post">
    <input type="text" value="" placeholder="name car" id="car-name" name="name">
    <input type="color" id="car-color" name="color" value="#e66465">
    <button type="button" class="btn btn__create-car">Create</button>
    <input type="text" value="" placeholder="name car" id="car-name__update" name="name">
    <input type="color" id="car-color__update" name="color" value="#e66465">
    <button type="button" class="btn btn__update-car">Update</button>
</form>
  `;
  return form;
};

export const garageLink = async (main: HTMLElement): Promise<void> => {
  const body = <HTMLBodyElement>document.querySelector('body');
  const garage: HTMLDivElement = document.createElement('div');
  body.innerHTML = '';
  garage.className = 'garage';
  garage.appendChild(getFormGarage());
  garage.appendChild(main);
  body.appendChild(garage);
  const btnCreate = <HTMLButtonElement>document.querySelector('.btn__create-car');
  btnCreate.addEventListener('click', () => {
    getNewCar();
  });
};
