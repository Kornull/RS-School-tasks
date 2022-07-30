import { CarsAttribute } from '../../types/types';

const baseUrl = 'http://127.0.0.1:3000';
const garage = `${baseUrl}/garage`;

export const getCarsInfo = async (): Promise<object> => (await fetch(`${garage}/1`)).json();

export const getCountCars = async () => {
  const response = await fetch(`${garage}`);
  const items: CarsAttribute[] = await response.json();
  return items;
};
