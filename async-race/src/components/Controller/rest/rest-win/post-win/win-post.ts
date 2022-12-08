import { Winners, Urls } from '../../../../types/types';
import { returnWinners } from '../win-get';

const getUpdateWin = async (objCar: Winners): Promise<void> => {
  await fetch(`${Urls.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objCar),
  });
};

const getUpdateOldWin = async (win: Winners): Promise<void> => {
  await fetch(`${Urls.winners}/${win.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(win),
  });
};

export const setWinnerCar = async (win: Winners): Promise<void> => {
  const carList: Winners[] = await returnWinners();
  carList.forEach((carWin: Winners) => {
    if (carWin.id === win.id) {
      let num: number = carWin.wins;
      if (carWin.time < win.time) {
        // eslint-disable-next-line no-param-reassign
        win.time = carWin.time;
      }
      // eslint-disable-next-line no-param-reassign
      win.wins = ++num;
      getUpdateOldWin(win);
    }
  });
  const filterId: Winners[] = carList.filter((car) => car.id === win.id);
  if (filterId.length === 0) getUpdateWin(win);
};
