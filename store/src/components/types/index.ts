export type CountBasket = Record<string, number>;

export interface Laptop {
  brand: string;
  model: string;
  number: number;
  color: string;
  image: string;
  year: string;
  description: object[];
  ram: string;
}

export type Key<T, U> = {
  key: T;
  sort: U;
};

export type ConstructorDiv = {
  filter: HTMLDivElement;
  fragment: DocumentFragment;
  filterSearch: HTMLDivElement;
  filterBtn: HTMLDivElement;
  btnDescr: HTMLDivElement;
  brandArr: string[];
  colorArr: string[];
  memoryRam: string[];
  sortAll: string[];
  keyname: string[];
  brandCount: string[];
  sortArr: Laptop[];
  copySortLeng: Laptop[];
  availabilityCheck: number[];
  copySortAll: string[];
};
