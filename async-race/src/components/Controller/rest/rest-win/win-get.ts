import { Key, Urls, Winners } from '../../../types/types';

const strWin = (queryS: Key[] = []) => {
  if (queryS.length) {
    return `?${queryS.map((x: Key) => `${x.key}=${x.value}`).join('&')}`;
  }
  return '';
};
export const returnWinners = async (): Promise<Winners[]> => {
  const response = await fetch(`${Urls.winners}`);
  const res = await response.json();
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

export const getCountWinCarsPage = async (queryString: string): Promise<Winners[]> => {
  const response = await fetch(`${Urls.winners}${queryString}`);
  const res: Winners[] = await response.json();
  return res;
};
