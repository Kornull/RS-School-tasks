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

export enum StartStopPosition {
  startPos = 0,
  stopPos = 200,
}

export enum SpeedCar {
  hard = 3,
  medium = 6,
  slow = 10,
}

export enum WidthWindow {
  max = 1200,
  min = 700,
}
