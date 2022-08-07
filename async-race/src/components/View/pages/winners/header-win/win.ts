import './_win.scss';

export const win = <HTMLElement>(<unknown>`
    <li class="win__text">Number</li>
    <li class="win__text">Car</li>
    <li class="win__text">Name</li>
    <li class="win__text">Wins</li>
    <li class="win__text">Best time</li>
`);

export const getUlEl = () => {
  const ul = document.createElement('ul');
  ul.className = 'win__header win';
  ul.innerHTML = `${win}`;
  return ul;
};
