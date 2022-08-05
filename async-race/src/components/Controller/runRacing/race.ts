import { Interval, Speed, Urls } from '../../types/types';

const interval: Interval = {};

async function animation(widthRoad: number, id: number, durantion: number): Promise<void> {
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  let startX = 0;
  const tick = (): void => {
    startX += durantion / 4;
    car.style.transform = `translateX(${startX}px)`;
    if (startX < widthRoad - 200) {
      interval[id] = requestAnimationFrame(tick);
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
      }
    });
  }
};
