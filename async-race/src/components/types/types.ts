export type CarsAttribute = {
  name: string;
  color: string;
  id?: number;
};

export enum Urls {
  server = 'http://127.0.0.1:3000',
  garage = 'http://127.0.0.1:3000/garage',
  engine = 'http://127.0.0.1:3000/engine',
  winners = 'http://127.0.0.1:3000/winners',
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
  slow = 11,
}

export enum Sort {
  time = 'time',
  wins = 'win',
}

export type Winners = {
  id: number;
  time: number;
  wins: number;
};

export enum StartPage {
  startpage = 1,
}

export type KeySort = {
  key: string;
  value: string;
};
