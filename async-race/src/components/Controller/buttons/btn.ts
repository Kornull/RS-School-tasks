import './_btn.scss';
import { returnWinners } from '../rest/rest-win/win-get';
import { Winners } from '../../types/types';

export const btnPage = (): HTMLDivElement => {
  const btnGarage: HTMLButtonElement = document.createElement('button');
  const btnWin: HTMLButtonElement = document.createElement('button');
  const btnsNavigation: HTMLDivElement = document.createElement('div');
  btnsNavigation.className = 'navigate__btns';
  btnGarage.className = 'btn btn__garage';
  btnWin.className = 'btn btn__win';
  btnGarage.innerHTML = 'GARAGE';
  btnWin.innerHTML = 'WINNERS';
  const garage = document.querySelector('.garage') as HTMLDivElement;
  const winPage = document.querySelector('.win') as HTMLDivElement;

  btnWin.addEventListener('click', () => {
    const pageWinCar = document.querySelector('.win__count-car') as HTMLDivElement;
    returnWinners().then((res: Winners[]) => {
      pageWinCar.innerText = `Cars ${res.length}`;
    });
    garage.style.display = 'none';
    winPage.style.display = 'block';
  });
  btnGarage.addEventListener('click', () => {
    garage.style.display = 'block';
    winPage.style.display = 'none';
  });
  btnsNavigation.appendChild(btnGarage);
  btnsNavigation.appendChild(btnWin);

  return btnsNavigation;
};
