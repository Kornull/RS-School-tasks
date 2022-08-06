/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Interval, Speed, Urls } from '../../types/types';
import { openAllBtns } from '../buttons/close-open-btn/close-btn';

let countRace: number[] = [];
let countErr: number[] = [];
let interval: Interval = {};

const winner = (time: string, id: number) => {
  const win = document.querySelector(`#car-${id}`) as HTMLElement;
  const pop = document.querySelector('.popup') as HTMLDivElement;
  const poptext = document.querySelector('.popup__text') as HTMLDivElement;
  poptext.innerText = `${win.parentElement?.title} ${time} sec.`;
  pop.style.display = 'block';
  setTimeout(() => {
    pop.style.display = 'none';
  }, 3500);
};

export const preStopCar = async (id: number) => {
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  const stopDrive = await fetch(`${Urls.engine}/?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  if (stopDrive.status === 200) {
    cancelAnimationFrame(interval[id]);
    car.style.transform = `translateX(${0}px)`;
  }
};

async function animation(widthRoad: number, id: number, durantion: number): Promise<void> {
  const btnRacing = document.querySelector('#all-race') as HTMLElement;
  const start = new Date().getTime();
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  let startX = 0;
  const tick = (): void => {
    startX += durantion / 4;
    car.style.transform = `translateX(${startX}px)`;
    if (startX < widthRoad - 200) {
      interval[id] = requestAnimationFrame(tick);
    } else {
      const end = new Date().getTime();
      const time = ((end - start) / 1000).toFixed(2);
      countRace.push(id);
      if (btnRacing.classList.contains('run__race')) {
        winner(time, id);
        btnRacing.classList.remove('run__race');
      }
    }
  };
  tick();
}

const driveCar = async (widthRoad: number, id: number, duration: number) => {
  animation(widthRoad, id, duration);
  const res = await fetch(`${Urls.engine}/?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  if (res.status === 500) {
    cancelAnimationFrame(interval[id]);
    countErr.push(id);
  }
};

export const getStartOneRace = async (id: number, str: string) => {
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

export const getStopRacing = async (objCarsId: number[]) => {
  for (const i of objCarsId) {
    preStopCar(i);
    interval = {};
  }
};

export const getStartRacing = async (objCarsId: number[], command: string) => {
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
      }, 2000);
    }
  }, 1500);
};
