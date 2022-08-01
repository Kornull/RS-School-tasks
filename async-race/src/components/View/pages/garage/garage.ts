import './_garage.scss';
// eslint-disable-next-line import/no-cycle
import { getChartersToCar, getOneHundredCars } from '../../../Controller/rest/POST/post-run';

const getFormGarage = (): HTMLDivElement => {
  const form: HTMLDivElement = document.createElement('div');
  form.className = 'garage__forms';
  form.innerHTML = `
  <form class="form">
    <input type="text" value="" placeholder="name car" id="car-name" name="name" class="form__name">
    <input type="color" id="car-color" name="color" value="#e66465">
    <div class="form__btns">
    <button type="button" class="btn btn__create-car" id="one-car">Create</button>
    <button type="button" class="btn btn__create-allcar" id="one-hundred-car">CreateAll</button>
    </div>
    <input type="text" value="" placeholder="name car" id="car-name__update" name="name"  class="form__name">
    <input type="color" id="car-color__update" name="color" value="#e66465">
    <div class="form__btns">
    <button type="button" class="btn btn__update-car" id="update-car">Update</button>
    </div>
</form>
  `;
  return form;
};

export const garageLink = async (main: HTMLElement): Promise<void> => {
  const body = <HTMLBodyElement>document.querySelector('body');
  const garage: HTMLDivElement = document.createElement('div');
  body.innerHTML = '';
  garage.className = 'garage';
  const form = getFormGarage();
  garage.appendChild(form);
  garage.appendChild(main);
  body.appendChild(garage);
  form.addEventListener('click', (ev) => {
    const message = ev.target as HTMLElement;
    switch (message.id) {
      case 'one-car':
        getChartersToCar();
        break;
      case 'one-hundred-car':
        getOneHundredCars();
        break;
      // no default
    }
  });
};
