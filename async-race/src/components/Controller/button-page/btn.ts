import './_btn.scss';
// import { getCarsInfo } from '../GET/api';

function btnPage() {
  const btGarage: HTMLButtonElement = document.createElement('button');

  btGarage.className = 'btn btn__garage';
  btGarage.innerHTML = 'GARAGE';
  const body = <HTMLBodyElement>document.querySelector('body');
  body.append(btGarage);
}
// console.log(getCarsInfo());
btnPage();
