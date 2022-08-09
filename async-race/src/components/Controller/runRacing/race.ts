/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line object-curly-newline
import { Interval, Speed, StartStopPosition, Urls, Winners } from '../../types/types';
import { setWinnerTable } from '../../View/pages/winners/winner';
import { openAllBtns } from '../buttons/close-open-btn/close-btn';
import { setWinnerCar } from '../rest/rest-win/post-win/win-post';

let countRace: number[] = [];
let countErr: number[] = [];
let interval: Interval = {};

export const winner = (time: string, carId: number): void => {
  const win = document.querySelector(`#car-${carId}`) as HTMLElement;
  const pop = document.querySelector('.popup') as HTMLDivElement;
  const popText = document.querySelector('.popup__text') as HTMLDivElement;
  const nameWinCar = win.parentElement?.title as string;
  popText.innerText = `${nameWinCar} ${time} sec.`;
  pop.style.display = 'block';
  setTimeout(() => {
    pop.style.display = 'none';
  }, 3500);
  const winObj: Winners = {
    id: carId,
    time: Number(time),
    wins: 1,
  };
  setWinnerCar(winObj);
  setWinnerTable();
};

export const preStopCar = async (id: number): Promise<void> => {
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  const stopDrive = await fetch(`${Urls.engine}/?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  if (stopDrive.status === 200) {
    cancelAnimationFrame(interval[id]);
    car.style.transform = `translateX(${StartStopPosition.startPos}px)`;
  }
};

const stopCar = async (id: number): Promise<void> => {
  await fetch(`${Urls.engine}/?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
};

async function animation(widthRoad: number, id: number, duration: number): Promise<void> {
  const btnRacing = document.querySelector('#all-race') as HTMLElement;
  const start: number = new Date().getTime();
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  let startX: number | null = performance.now();
  const tick = (step: number): void => {
    if (!startX) startX = step;
    const progress = (step - startX) / duration;
    car.style.transform = `translateX(${Math.min(progress)}px)`;
    if (progress < widthRoad - StartStopPosition.stopPos) {
      interval[id] = requestAnimationFrame(tick);
    } else {
      const end: number = new Date().getTime();
      cancelAnimationFrame(interval[id]);
      stopCar(id);
      countRace.push(id);
      if (btnRacing.classList.contains('run__race')) {
        const time: string = ((end - start) / 1000).toFixed(2);
        winner(time, id);
        btnRacing.classList.remove('run__race');
      }
    }
  };
  tick(1);
}

const driveCar = async (widthRoad: number, id: number, duration: number): Promise<void> => {
  animation(widthRoad, id, duration);
  const res = await fetch(`${Urls.engine}/?id=${id}&status=drive`, {
    method: 'PATCH',
  });

  if (res.status === 500) {
    cancelAnimationFrame(interval[id]);
    countErr.push(id);
  }
};

export const getStartOneRace = async (id: number, str: string): Promise<void> => {
  const response = await fetch(`${Urls.engine}/?id=${id}&status=${str}`, {
    method: 'PATCH',
  });

  if (response.status === 200) {
    const obj: Speed = await response.json();
    const { velocity, distance } = obj;
    const duration: number = Math.floor(distance / velocity / 1000);
    const raceRoad = <HTMLDivElement>document.querySelector('.racing__slider');
    const widthRoad: number = raceRoad.offsetWidth;
    driveCar(widthRoad, id, duration);
  }
};

export const getStopRacing = async (objCarsId: number[]): Promise<void> => {
  for (const i of objCarsId) {
    preStopCar(i);
    interval = {};
  }
};

export const getStartRacing = async (objCarsId: number[], command: string): Promise<void> => {
  countErr = [];
  countRace = [];
  for (const i of objCarsId) {
    getStartOneRace(i, command);
  }
  const exam = setInterval(() => {
    const allCount = Array.from(new Set([...countErr, ...countRace]));
    if (objCarsId.length === allCount.length) {
      setTimeout(() => {
        openAllBtns();
        clearInterval(exam);
      }, 2500);
    }
  }, 1500);
};
