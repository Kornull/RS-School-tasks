import { CarsAttribute, CountCars, Urls } from '../../../../types/types';
import { carName, carModel, colorChar } from '../../../../templates/cars-charters';

const getNewCar = async (objCar: CarsAttribute[]): Promise<void> => {
  objCar.forEach(async (car: CarsAttribute) => {
    await fetch(`${Urls.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  });
  setTimeout(() => {}, 0);
};

export const getChartersToCar = async (): Promise<void> => {
  const color = <HTMLInputElement>document.querySelector('#car-color');
  const name = <HTMLInputElement>document.querySelector('#car-name');
  if (name.value.length === 0) name.value = carName[Math.floor(Math.random() * carName.length)];
  const objCar: CarsAttribute = {
    name: name.value.slice(0, 1).toUpperCase() + name.value.slice(1),
    color: color.value,
  };
  await getNewCar([objCar]);
  name.value = '';
};

export const getOneHundredCars = (): void => {
  const ArrCar: CarsAttribute[] = [];
  for (let i = 0; i < CountCars.cars; i++) {
    const name: string = carName[Math.floor(Math.random() * carName.length)];
    const model: string = carModel[Math.floor(Math.random() * carModel.length)];
    let colorCar = '#';
    for (let j = 0; j < 6; j++) {
      colorCar += colorChar[Math.floor(Math.random() * colorChar.length)];
    }
    ArrCar.push({ name: `${name} ${model}`, color: colorCar });
  }
  getNewCar(ArrCar);
};
