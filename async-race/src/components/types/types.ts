export type CarsAttribute = {
  name: string;
  color: string;
  id?: number;
};

export enum Urls {
  server = 'http://127.0.0.1:3000',
  garage = 'http://127.0.0.1:3000/garage',
  engine = 'http://127.0.0.1:3000/engine',
}

export type Key = {
  key: string;
  value: number;
};

export enum CountCars {
  cars = 100,
}

export type Speed = {
  velocity: number;
  distance: number;
};

export type Interval = Record<number, number>;
export enum RaceCommand {
  start = 'started',
  stop = 'stopped',
}
