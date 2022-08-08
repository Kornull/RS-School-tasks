import './_winner.scss';
// eslint-disable-next-line import/no-cycle
import { getUlEl, pageWinCount, winCarCount } from './header-win/win';
import { viewCars } from '../../../Controller/rest/rest-win/win-get';
import { getCountAllCars } from '../../../Controller/rest/rest-garage/GET/get-run';
import { CarsAttribute, Winners } from '../../../types/types';

const winnerChar = async (carList: Winners[]) => {
  const winners: Winners[] = await carList;
  const AllCars = await getCountAllCars();
  const winDescr = document.createElement('div');
  winDescr.className = 'win__car-all';
  winDescr.id = 'list-win-car';
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

export const winnerTable = async (): Promise<HTMLDivElement> => {
  const divWin = document.createElement('div');
  divWin.className = 'win__table win';
  divWin.append(winCarCount());
  divWin.append(pageWinCount());
  divWin.append(getUlEl());
  const cars = await viewCars(1);
  winnerChar(cars).then((res) => {
    divWin.appendChild(res);
  });
  return divWin;
};

export const getWinnerTable = async (): Promise<HTMLDivElement> => winnerTable();

export const setWinnerTable = async (num: number) => {
  const tableWin = document.querySelector('#list-win-car') as HTMLDivElement;
  tableWin.innerHTML = '';
  const cars: Winners[] = await viewCars(num);
  winnerChar(cars).then((res) => {
    tableWin.appendChild(res);
  });
};
