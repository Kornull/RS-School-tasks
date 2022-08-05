/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Interval, Speed, Urls } from '../../types/types';

let countRace: number[] = [];
const errorCountRace: number[] = [];
const interval: Interval = {};

const winner = (time: string) => {
  if (countRace.length === 1) {
    const win = document.querySelector(`#car-${countRace[0]}`) as HTMLElement;
    const pop = document.querySelector('.popup') as HTMLDivElement;
    const poptext = document.querySelector('.popup__text') as HTMLDivElement;
    poptext.innerText = `${win.parentElement?.title} ${time} sec.`;
    pop.style.display = 'block';
    setTimeout(() => {
      pop.style.display = 'none';
    }, 3500);
  }
};

async function animation(widthRoad: number, id: number, durantion: number): Promise<void> {
  const btnRacing = document.querySelector('#all-race') as HTMLElement;
  const start = new Date().getTime();
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  countRace = [];
  let startX = 0;
  const tick = (): void => {
    startX += durantion / 4;
    car.style.transform = `translateX(${startX}px)`;
    if (startX < widthRoad - 200) {
      interval[id] = requestAnimationFrame(tick);
    } else {
      const end = new Date().getTime();
      countRace.push(id);
      const time = ((end - start) / 1000).toFixed(3);
      if (btnRacing.classList.contains('run__race')) {
        winner(time);
        btnRacing.classList.remove('run__race');
      }
    }
  };
  tick();
}

export const stopCar = async (id: number) => {
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  const controller = new AbortController();
  const stopDrive = await fetch(`${Urls.engine}/?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  await fetch(`${Urls.engine}/?id=${id}&status=drive`, {
    signal: controller.signal,
    method: 'PATCH',
  });
  if (stopDrive.status === 200) {
    controller.abort();
    cancelAnimationFrame(interval[id]);
    car.style.transform = `translateX(${0}px)`;
  }
};

export const getStartOneRace = async (id: number, str: string) => {
  const response = await fetch(`${Urls.engine}/?id=${id}&status=${str}`, {
    method: 'PATCH',
  });

  if (response.status === 200) {
    const obj: Speed = await response.json();
    const { velocity, distance } = obj;
    const durantion = Math.floor(distance / velocity / 1000);
    const raceRoad = <HTMLDivElement>document.querySelector('.racing__slider');
    const widthRoad: number = raceRoad.offsetWidth;

    animation(widthRoad, id, durantion);
    await fetch(`${Urls.engine}/?id=${id}&status=drive`, {
      method: 'PATCH',
    }).then((res) => {
      if (res.status === 500) {
        cancelAnimationFrame(interval[id]);
        if (!(id in errorCountRace)) errorCountRace.push(id);
      }
    });
  }
};

export const getStartRacing = async (objCarsId: number[], command: string) => {
  for (const i of objCarsId) {
    getStartOneRace(i, command);
  }
};

export const getStopRacing = async (objCarsId: number[]) => {
  for (const i of objCarsId) {
    stopCar(i);
  }
};
