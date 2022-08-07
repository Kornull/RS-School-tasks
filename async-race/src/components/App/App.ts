import { btnPage } from '../Controller/buttons/btn';
import { garageLink } from '../View/pages/garage/garage';
import { getWinnerTable } from '../View/pages/winners/winner';

export async function App() {
  const body = <HTMLElement>document.querySelector('body');
  const form: HTMLElement = await garageLink();
  body.appendChild(form);
  body.appendChild(btnPage());

  body.appendChild(getWinnerTable());

  return body;
}
