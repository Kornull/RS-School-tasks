import { CarsAttribute } from '../../../types/types';
import { urlGarage } from '../../../templates/urls';

// export const getCarsInfo = async (): Promise<object> => (await fetch(`${urlGarage()}/1`)).json();

export const getCountCars = async () => {
  const response = await fetch(`${urlGarage()}`);
  const items: CarsAttribute[] = await response.json();
  return items;
};
