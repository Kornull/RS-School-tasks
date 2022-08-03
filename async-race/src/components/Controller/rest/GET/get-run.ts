import { CarsAttribute, Key } from '../../../types/types';
import { urlGarage } from '../../../templates/urls';

// export const getCarsInfo = async (): Promise<object> => (await fetch(`${urlGarage()}/1`)).json();
const str = (queryS: Key[] = []) => {
  if (queryS.length) {
    return `?${queryS.map((x: Key) => `${x.key}=${x.value}`).join('&')}`;
  }
  return '';
};

export const getPAge = async (num: number): Promise<CarsAttribute[]> => {
  const page: Key = {
    key: '_page',
    value: num,
  };
  const limit: Key = {
    key: '_limit',
    value: 7,
  };
  const queryStr: string = str([page, limit]);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getCountCarsPage(queryStr);
};

export const getCountCarsPage = async (queryString: string): Promise<CarsAttribute[]> => {
  const response = await fetch(`${urlGarage()}${queryString}`);

  return response.json();
};
export const getCountAllCars = async () => {
  const response = await fetch(`${urlGarage()}`);
  const countPAge = <HTMLElement>document.querySelector('#page-count-cars span');
  const data = await response.json();
  countPAge.innerText = `${data.length}`;

  return data;
};
getCountAllCars();
