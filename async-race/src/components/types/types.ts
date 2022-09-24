export type CarsAttribute = {
  name: string;
  color: string;
  id?: number;
};

export enum Urls {
  garage = 'https://asyncrace.onrender.com/garage',
  engine = 'https://asyncrace.onrender.com/engine',
  winners = 'https://asyncrace.onrender.com/winners',
}

export type Key = {
  key: string;
  value: number | string;
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

export enum Sort {
  time = 'time',
  wins = 'wins',
  asc = 'ASC',
  desk = 'DESC',
}

export type Winners = {
  id: number;
  time: number;
  wins: number;
};

export enum StartPage {
  startpage = 1,
}

export enum CounterSort {
  countStart = 0,
  countReset = 1,
  countStop = 11,
}
