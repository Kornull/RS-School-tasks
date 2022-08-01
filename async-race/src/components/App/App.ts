import { garageLink } from '../View/pages/garage/garage';
import { createCars } from '../Controller/car/createCars';

export async function App() {
  const body = <HTMLElement>document.querySelector('body');
  const form: HTMLElement = await garageLink();
  const main: HTMLElement = await createCars();
  body.appendChild(form);
  body.appendChild(main);

  return body;
}
