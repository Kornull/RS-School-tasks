import { Key, KeySort, Urls, Winners } from '../../../types/types';

const strWin = (queryS: Key[] | KeySort[] = []) => {
  if (queryS.length) {
    return `?${queryS.map((x: Key | KeySort) => `${x.key}=${x.value}`).join('&')}`;
  }
  return '';
};
export const returnWinners = async (): Promise<Winners[]> => {
  const response = await fetch(`${Urls.winners}`);
  const res = await response.json();
  return res;
};
export const getCountWinCarsPage = async (queryString: string): Promise<Winners[]> => {
  const response = await fetch(`${Urls.winners}${queryString}`);
  const res: Winners[] = await response.json();
  return res;
};
export const viewCars = async (num: number) => {
  const page: Key = {
    key: '_page',
    value: num,
  };
  const limit: Key = {
    key: '_limit',
    value: 10,
  };
  const queryStr: string = strWin([page, limit]);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getCountWinCarsPage(queryStr);
};

export const viewSort = async (num: string) => {
  const page: KeySort = {
    key: '_sort',
    value: num,
  };
  const limit: KeySort = {
    key: '_order',
    value: 'ASC',
  };
  const queryStr: string = strWin([page, limit]);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getCountWinCarsPage(queryStr);
};

// export const sort = async (str: string) => {
//   await fetch(`${Urls.winners}/?_sort=${str}&&_order=ASC`);
//   viewSort(str);
// };
