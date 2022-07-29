import './_btn.scss';

function btnPage() {

  const btGarage: HTMLButtonElement = document.createElement('button');
  btGarage.className = 'btn btn__garage';
  btGarage.innerHTML = 'GARAGE';
  const body = <HTMLBodyElement>document.querySelector('body');
  body.append(btGarage);

}
btnPage();
