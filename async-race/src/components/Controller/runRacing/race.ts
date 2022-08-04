import { Speed, Urls } from '../../types/types';

const runRace = async (el: SVGSVGElement, count: number) => {
  // eslint-disable-next-line no-param-reassign
  el.style.left = `${count}px`;
};

const getRunRace = async (id: number, speed: number, el: HTMLDivElement) => {
  let count = 0;
  const raceRoad = <HTMLDivElement>document.querySelector('.racing__slider');
  const widthRoad: number = raceRoad.offsetWidth;
  // eslint-disable-next-line no-param-reassign
  const car = el.querySelector('svg') as SVGSVGElement;
  const interval = setInterval(() => {
    if (count >= widthRoad - 200) clearInterval(interval);
    count += 4;
    runRace(car, count);
  }, speed);
  const response = await fetch(`${Urls.engine}/?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  if (response.status === 200) {
    setTimeout(() => interval, 15000);
  }
  if (response.status === 500) {
    clearInterval(interval);
  }
};

export const getStartOneRace = async (id: number, el: HTMLDivElement) => {
  const response = await fetch(`${Urls.engine}/?id=${id}&status=started`, {
    method: 'PATCH',
  });
  if (response.status === 200) {
    const res: Speed = await response.json();
    const speed: number = res.velocity;
    await getRunRace(id, speed, el);
  }
};
