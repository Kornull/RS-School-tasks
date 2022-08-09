import { Key, Urls, Winners } from '../../../types/types';

const strWin = (queryS: Key[]): string => {
  if (queryS.length) {
    return `?${queryS.map((x: Key) => `${x.key}=${x.value}`).join('&')}`;
  }
  return '';
};

export const returnWinners = async (): Promise<Winners[]> => {
  const countWinnersCars: HTMLElement | null = document.querySelector('.win__count-car');
  const response = await fetch(`${Urls.winners}`);
  const res: Winners[] = await response.json();
  if (countWinnersCars !== null) countWinnersCars.innerHTML = `Cars ${res.length}`;
  return res;
};

export const getCountWinCarsPage = async (queryString: string): Promise<Winners[]> => {
  const response = await fetch(`${Urls.winners}${queryString}`);
  const res: Winners[] = await response.json();
  return res;
};
export const viewCars = async (num: number): Promise<Winners[]> => {
  const page: Key = {
    key: '_page',
    value: num,
  };
  const limit: Key = {
    key: '_limit',
    value: 10,
  };
  const queryStr: string = strWin([page, limit]);

  return getCountWinCarsPage(queryStr);
};

// eslint-disable-next-line max-len
export const viewSort = async (countPage: number, sort: string, command: string): Promise<Winners[]> => {
  const numPage: Key = {
    key: '_page',
    value: countPage,
  };
  const sorted: Key = {
    key: '_sort',
    value: sort,
  };
  const sortCommand: Key = {
    key: '_order',
    value: command,
  };
  const queryStr: string = strWin([numPage, sorted, sortCommand]);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getCountWinCarsPage(queryStr);
};
