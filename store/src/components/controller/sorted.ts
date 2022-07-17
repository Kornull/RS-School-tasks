import { keys } from 'ts-transformer-keys';
import employee from '../../laptop.json';
import { Laptop } from '../types';
import Products from './products/product';
import { LocalStor } from './storage/storage';

class SortedCard {
  product: Products;
  sortArr: Laptop[];
  copySortLeng: Laptop[];
  storage: LocalStor;
  constructor() {
    this.storage = new LocalStor();

    this.product = new Products();
    this.sortArr = [];
    this.copySortLeng = [];
  }
  newSortArr(): void {
    let count = this.storage.get('CountSortedGet');
    const arrSearch: string[] = [
      'BtnBrandId',
      'BtnBrandColor',
      'BtnBrandRam',
      'BtnInputId',
      'YearsBrand',
      'StockBrands',
    ];
    this.storage.get('StockBrands').filter((e) => Number(e));
    let data: string[] = [];

    for (const i of arrSearch) {
      if (this.storage.get(i)) {
        data = [...data, ...this.storage.get(i)];
      }
    }
    if (data.length === 0) {
      data = [...['Lenovo', 'Asus', 'Acer', 'HP', 'Honor', 'Apple']];
    }
    if (count.length === 0) {
      count.length = 1;
    }
    this.storage.get('BtnInputId').forEach((el) => {
      if (this.storage.get('BtnBrandId').includes(el)) {
        data = [
          ...this.storage.get('BtnBrandId'),
          ...this.storage.get('BtnBrandColor'),
          ...this.storage.get('BtnBrandRam'),
          ...this.storage.get('YearsBrand'),
          ...this.storage.get('StockBrands'),
        ];
        count = count.filter((e) => e !== '4');
      }
    });
    data = Array.from(new Set(data));
    this.sortArr = [];
    const keysOfLaptop = keys<Laptop>();
    employee.forEach((lapEl) => {
      let counts = 0;
      data.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            counts++;
            if (counts === count.length) {
              this.sortArr.push(lapEl);
            }
          }
        });
      });
    });
    this.copySortLeng = [];
    this.sortArr.forEach((lapEl) => {
      let counts = 0;
      data.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            counts++;
            if (counts === count.length) {
              this.copySortLeng.push(lapEl);
            }
          }
        });
      });
    });
    if (data.length === 0) {
      this.product.createCard(employee);
    } else {
      this.product.createCard(this.copySortLeng);
    }
  }
  emptyArr() {
    this.product.createCard([]);
  }
}

export default SortedCard;
