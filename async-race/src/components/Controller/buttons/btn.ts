import './_btn.scss';

export const btnPage = (): HTMLButtonElement => {
  const btGarage: HTMLButtonElement = document.createElement('button');

  btGarage.className = 'btn btn__garage';
  btGarage.innerHTML = 'GARAGE';
  // const body = <HTMLBodyElement>document.querySelector('body');
  // body.append(btGarage);
  return btGarage;
};
// console.log(getCarsInfo());
