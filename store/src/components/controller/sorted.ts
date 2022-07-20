import { keys } from 'ts-transformer-keys';
import employee from '../../laptop.json';
import { Laptop } from '../types';
import ProductsUpdate from './products/update-product';
import { LocalStor } from './storage/storage';

class SortedCard {
  public product: ProductsUpdate;
  private sortArr: Laptop[];
  private storage: LocalStor;
  constructor() {
    this.storage = new LocalStor();

    this.product = new ProductsUpdate();
    this.sortArr = [];
  }
  public newSortArr(): void {
    let counts = 0;

    let count: string[] = this.storage.get('CountSortedGet');
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
      data = ['Lenovo', 'Asus', 'Acer', 'HP', 'Honor', 'Apple'];
    }
    if (count.length === 0) {
      count.length = 1;
    }
    this.storage.get('BtnInputId').forEach((productId) => {
      if (this.storage.get('BtnBrandId').includes(productId)) {
        data = [
          ...this.storage.get('BtnBrandId'),
          ...this.storage.get('BtnBrandColor'),
          ...this.storage.get('BtnBrandRam'),
          ...this.storage.get('YearsBrand'),
          ...this.storage.get('StockBrands'),
        ];
        count = count.filter((countProducts) => countProducts !== '4');
      }
    });
    data = Array.from(new Set(data));
    this.sortArr = [];
    const keysOfLaptop = keys<Laptop>();
    employee.forEach((laptop) => {
      counts = 0;
      data.forEach((product) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (laptop[key] === product) {
            counts++;
            if (counts === count.length) {
              this.sortArr.push(laptop);
            }
          }
        });
      });
    });

    const listNumValue: string = this.storage.get('ListValue')[0];
    switch (Number(listNumValue)) {
      case 1:
        this.sortArr.sort(function (a, b) {
          const x: string = a.brand.toLowerCase();
          const y: string = b.brand.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
      case 2:
        this.sortArr.sort(function (a, b) {
          const x: string = a.brand.toLowerCase();
          const y: string = b.brand.toLowerCase();
          return x > y ? -1 : x < y ? 1 : 0;
        });
        break;
      case 3:
        this.sortArr.sort(function (a, b) {
          const x: string = a.year.toLowerCase();
          const y: string = b.year.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
      case 4:
        this.sortArr.sort(function (a, b) {
          const x: string = a.year.toLowerCase();
          const y: string = b.year.toLowerCase();
          return x > y ? -1 : x < y ? 1 : 0;
        });
        break;
    }
    if (this.storage.get('PopularCheckBox').length === 1) {
      this.sortArr = this.sortArr.filter((laptop) => laptop.number <= 5);
    }
    if (data.length === 0) {
      this.product.createCard(employee);
    } else {
      this.product.createCard(this.sortArr);
    }
  }
}

export default SortedCard;
