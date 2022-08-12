import './_win.scss';

export const winListEl = <HTMLElement>(<unknown>`
    <li class="win__text">Number</li>
    <li class="win__text">Car</li>
    <li class="win__text">Name</li>
    <li class="win__text" id="sort-win">Wins</li>
    <li class="win__text" id="sort-time">Best time</li>
`);

export const winCarCount = (): HTMLDivElement => {
  const countWinCar: HTMLDivElement = document.createElement('div');
  countWinCar.className = 'win__count-car';
  countWinCar.id = '#win-car-count';
  return countWinCar;
};

export const winList = (): HTMLDivElement => {
  const list: HTMLDivElement = document.createElement('div');
  list.className = 'win__list-cars';
  list.id = 'win-list-all-car';

  return list;
};
