import employee from '../../../laptop.json';
import { Laptop } from '../../types';
import Products from '../products/product';
class Filters extends Products {
  filter: HTMLDivElement;
  brandArr: string[];
  newSorArr: string[];
  fragment: DocumentFragment;
  sortArr: Laptop[];
  filterSearch: HTMLDivElement;
  filterBtn: HTMLDivElement;
  btnDescr: HTMLDivElement;
  constructor() {
    super();
    this.filter = document.createElement('div');
    this.fragment = document.createDocumentFragment();
    this.filterSearch = document.createElement('div');
    this.filterBtn = document.createElement('div');
    this.btnDescr = document.createElement('div');
    this.brandArr = [];
    this.newSorArr = [];
    this.sortArr = [];
  }
  filterName(): HTMLDivElement {
    this.filter.className = 'filter__name';
    this.filterSearch.className = 'filter__search';
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    this.btnDescr.innerText = 'input text';

    input.type = 'text';
    input.id = 'search';
    label.setAttribute('for', input.id);
    label.innerText = 'Brand';
    input.addEventListener('input', () => {
      this.sortArr = [];
      if (input.value.length === 0) {
        this.createCard(employee);
        this.sortArr = [];
      } else {
        employee.forEach((el) => {
          if (el.brand.toLowerCase().includes(input.value.toLowerCase())) {
            this.sortArr.push(el);
            this.createCard(this.sortArr);
            this.newSorArr.push(el.brand.toLowerCase());
          }
        });
      }
    });

    form.append(label);
    form.append(input);
    this.filterSearch.appendChild(form);
    this.filter.appendChild(this.filterSearch);

    return this.filter;
  }

  filterBrand() {
    this.filter = document.createElement('div');
    this.filter.className = 'filter__brand';
    this.filterBtn.className = 'filter__btn';
    this.btnDescr.innerText = "Brand's";
    this.fragment.append(this.btnDescr);
    employee.forEach((el) => {
      if (!this.brandArr.includes(el.brand)) {
        this.brandArr.push(el.brand);
      }
    });
    this.brandArr.forEach((el) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__brand';
      btn.innerText = el;
      btn.addEventListener('click', () => {
        this.newSortArr(btn.innerText);
      });
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
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
