import './_garage.scss';
// eslint-disable-next-line import/no-cycle
import { getChartersToCar, getOneHundredCars } from '../../../Controller/rest/POST/post-run';
import { createCars, updateCars } from '../../../Controller/car/createCars';
import { updateInput } from '../../../Controller/rest/PUT/put-run';
import { deleteCar } from '../../../Controller/rest/DELETE/delete-run';
import { getStartOneRace } from '../../../Controller/runRacing/race';

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
<!--    <button type="button" class="btn btn__delete-car" id="delete-car">del</button>-->
    </div>
    <div class="page">        
    <div class="page__text"><h1 id="page-count-cars">Cars(<span></span>)</h1></div>
    <div class="page__text"><h1 id="page-title">#PAGE <span>1</span></h1></div>
    <div class="page__btns">
    <button type="button" class="page__btn btn btn__left" id="run-left" disabled="disabled">left</button>
    <button type="button" class="page__btn btn btn__right" id="run-right">right</button>
    </div>
    </div>
</form>
  `;
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
