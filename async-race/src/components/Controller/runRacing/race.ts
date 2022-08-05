import { Interval, Urls } from '../../types/types';

const interval: Interval = {};

async function animation(widthRoad: number, id: number): Promise<void> {
  const car = document.querySelector(`#car-${id}`) as HTMLElement;
  let startX = 0;
  const tick = (): void => {
    startX += 0.5;
    car.style.transform = `translateX(${startX}px)`;
    if (startX < widthRoad - 180) {
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
    // setTimeout(() => runcar(id), 0);
    // const obj: Speed = await response.json();
    // const speed = obj.velocity;
    const raceRoad = <HTMLDivElement>document.querySelector('.racing__slider');
    const widthRoad: number = raceRoad.offsetWidth;
    // const num = widthRoad;
    // const car = document.querySelector(`#car-${id}`) as HTMLElement;

    animation(widthRoad, id);
    await fetch(`${Urls.engine}/?id=${id}&status=drive`, {
      method: 'PATCH',
    }).then((res) => {
      if (res.status === 500) {
        cancelAnimationFrame(interval[id]);
      }
    });
  }
  // console.log(interval[1]);
};
