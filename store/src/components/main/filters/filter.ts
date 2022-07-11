import employee from '../../../laptop.json';
import { Laptop } from '../../types';
import Products from '../products/product';
class Filters extends Products {
  filter: HTMLDivElement;
  brandArr: string[];
  newSorArr: string[];
  fragment: DocumentFragment;
  sortArr: Laptop[];
  constructor() {
    super();
    this.filter = document.createElement('div');
    this.brandArr = [];
    this.newSorArr = [];
    this.fragment = document.createDocumentFragment();
    this.sortArr = [];
  }
  filterName(): HTMLDivElement {
    this.filter.className = 'filter__name';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'search';

    input.addEventListener('input', () => {
      this.sortArr = [];
      if (input.value.length === 0) {
        this.createCard(employee);
        this.sortArr = [];
      } else {
        this.newSortArr(input.value);
      }
    });

    this.filter.appendChild(input);

    return this.filter;
  }

  filterBrand() {
    this.filter = document.createElement('div');
    this.filter.className = 'filter__brand';

    employee.forEach((el) => {
      if (!this.brandArr.includes(el.brand)) {
        this.brandArr.push(el.brand);
      }
    });
    this.brandArr.forEach((el) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn';
      btn.innerText = el;
      btn.addEventListener('click', () => {
        this.newSortArr(btn.innerText);
      });
      this.fragment.append(btn);
    });

    this.filter.appendChild(this.fragment);
    return this.filter;
  }

  newSortArr(a: string) {
    a = a.toLowerCase();
    // this.brandArr = [];
    if (!this.newSorArr.includes(a)) {
      this.newSorArr.push(a);
      employee.forEach((el) => {
        if (el.brand.toLowerCase().includes(a)) {
          this.sortArr.push(el);
          this.createCard(this.sortArr);
        }
      });
    } else {
      this.newSorArr.splice(this.newSorArr.indexOf(a), 1);
      this.sortArr = this.sortArr.filter((x) => x.brand.toLowerCase() !== a);
      if (this.sortArr.length !== 0) {
        this.createCard(this.sortArr);
      } else {
        this.createCard(employee);
      }
    }
  }
}
export default Filters;
