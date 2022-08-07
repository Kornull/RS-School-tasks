import './_winner.scss';
import { getUlEl } from './header-win/win';
import { returnWinners } from '../../../Controller/rest/rest-win/win-get';
import { getCountAllCars } from '../../../Controller/rest/rest-garage/GET/get-run';
import { CarsAttribute } from '../../../types/types';

const winnerChar = async () => {
  const winners = await returnWinners();
  const AllCars = await getCountAllCars();
  const winDescr = document.createElement('div');
  winDescr.className = 'win__car-all';
  for (let i = 0; i < winners.length; i++) {
    const winCarDescr = document.createElement('div');
    winCarDescr.className = 'win__car';
    const winNumber = document.createElement('div');
    const winCar = document.createElement('div');
    const winName = document.createElement('div');
    const winCount = document.createElement('div');
    const winTime = document.createElement('div');
    winNumber.className = 'win__number';
    winNumber.innerText = `${i + 1}`;
    winCar.className = 'win__car-svg';
    winName.className = 'win__name';
    winCount.className = 'win__count';
    winTime.className = 'win__time';
    AllCars.forEach((car: CarsAttribute) => {
      if (car.id === winners[i].id) {
        winCar.innerHTML = `<svg class="car__icon-win" fill="${car.color}" id="car-${car.id}">
           <use xlink:href="../assets/img/car.svg#carview"></use>
         </svg>\``;
        winName.innerHTML = `${car.name}`;
        winCount.innerHTML = `${winners[i].wins}`;
        winTime.innerHTML = `${winners[i].time}`;
      }
    });

    winCarDescr.appendChild(winNumber);
    winCarDescr.appendChild(winCar);
    winCarDescr.appendChild(winName);
    winCarDescr.appendChild(winCount);
    winCarDescr.appendChild(winTime);
    winDescr.appendChild(winCarDescr);
  }
  return winDescr;
};

export const winnerTable = () => {
  const divWin = document.createElement('div');
  divWin.className = 'win__table win';
  divWin.append(getUlEl());
  winnerChar().then((res) => {
    divWin.appendChild(res);
  });
  winnerChar();
  return divWin;
};

export const getWinnerTable = (): HTMLDivElement => winnerTable();

export const setWinnerTable = () => {
  const tableWin = document.querySelector('.win__table') as HTMLDivElement;
  tableWin.innerHTML = '';
  tableWin.append(winnerTable());
};
