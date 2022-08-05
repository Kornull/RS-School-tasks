import './_btn.scss';

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

  btnWin.addEventListener('click', () => {
    console.log(garage)
    garage.style.display = 'none';
  });
  btnsNavigation.appendChild(btnGarage);
  btnsNavigation.appendChild(btnWin);

  // btnGarage.addEventListener('click', () => {
  //   garage.style.display = 'none';
  // });
  // const body = <HTMLBodyElement>document.querySelector('body');
  // body.append(btGarage);
  return btnsNavigation;
};
