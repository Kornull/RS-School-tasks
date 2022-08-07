import { Urls, Winners } from '../../../types/types';

export const returnWinners = async (): Promise<Winners[]> => {
  const response = await fetch(`${Urls.winners}/?_page=1&_sort=time`);
  const countPAge = <HTMLElement>document.querySelector('#page-count-cars span');
  const data = await response.json();
  countPAge.innerText = `${data.length}`;
  console.log(data);
  return data;
};
