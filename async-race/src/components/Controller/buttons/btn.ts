import './_btn.scss';

export const btnPage = (): HTMLDivElement => {
  const garage = document.querySelector('.garage') as HTMLDivElement;

  const btnGarage: HTMLButtonElement = document.createElement('button');
  const btnWin: HTMLButtonElement = document.createElement('button');
  const btnsNavigation: HTMLDivElement = document.createElement('div');
  btnsNavigation.className = 'navigate__btns';
  btnGarage.className = 'btn btn__garage';
  btnWin.className = 'btn btn__win';
  btnGarage.innerHTML = 'GARAGE';
  btnWin.innerHTML = 'WINNERS';
  btnsNavigation.appendChild(btnGarage);
  btnsNavigation.appendChild(btnWin);
  btnWin.addEventListener('click', () => {
    garage.style.display = 'none';
  });
  // btnGarage.addEventListener('click', () => {
  //   garage.style.display = 'none';
  // });
  // const body = <HTMLBodyElement>document.querySelector('body');
  // body.append(btGarage);
  return btnsNavigation;
};
// console.log(getCarsInfo());
