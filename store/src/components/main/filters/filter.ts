import employee from '../../../laptop.json';
import { Laptop } from '../../types';
import Products from '../products/product';
import { keys } from 'ts-transformer-keys';

class Filters extends Products {
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
  constructor() {
    super();
    this.filter = document.createElement('div');
    this.fragment = document.createDocumentFragment();
    this.filterSearch = document.createElement('div');
    this.filterBtn = document.createElement('div');
    this.btnDescr = document.createElement('div');
    this.brandArr = [];
    this.sortArr = [];
    this.colorArr = [];
    this.memoryRam = [];

    this.sortAll = [];
    this.copySortLeng = [];
    this.keyname = [];
    this.brandCount = [];
  }

  filterName(): HTMLDivElement {
    this.filter.className = 'filter__name';
    this.filterSearch.className = 'filter__search';
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type = 'text';
    input.id = 'search';
    label.setAttribute('for', input.id);
    label.innerText = 'Brand';
    input.addEventListener('input', () => {
      this.sortArr = [];
      if (input.value.length === 0) {
        this.createCard(employee);
        this.sortArr = [];
        this.brandCount = [];
      } else {
        employee.forEach((el) => {
          if (el.brand.toLowerCase().includes(input.value.toLowerCase())) {
            if (!this.sortAll.includes(el.brand)) this.sortAll.push(el.brand);
            this.sortAll = this.sortAll.filter((el) => el.toLowerCase().includes(input.value.toLowerCase()));
            if (!this.brandCount.includes('brand')) this.brandCount.push('brand');
          }
        });
        this.newSortArr();
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
      btn.id = el;
      btn.addEventListener('click', () => {
        if (!this.sortAll.includes(btn.id)) {
          if (!this.brandCount.includes('brand')) this.brandCount.push('brand');
          this.sortAll.push(btn.id);
          this.keyname.push('brand');
          this.newSortArr();
        } else {
          this.sortAll.splice(this.sortAll.indexOf(btn.id), 1);
          this.keyname.splice(this.keyname.indexOf('brand'), 1);
          if (!this.keyname.includes('brand')) this.brandCount.splice(this.brandCount.indexOf('brand'), 1);
          this.newSortArr();
        }
      });
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }

  filterColor() {
    this.filterBtn = document.createElement('div');
    this.filterBtn.className = 'filter__btn--color';
    this.btnDescr = document.createElement('div');
    this.btnDescr.innerText = 'Search for color: ';
    this.fragment.append(this.btnDescr);
    employee.forEach((el) => {
      if (!this.colorArr.includes(el.color)) {
        this.colorArr.push(el.color);
      }
    });
    this.colorArr.forEach((el) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__color';
      btn.id = el;
      btn.style.backgroundColor = el;
      btn.addEventListener('click', () => {
        if (!this.sortAll.includes(btn.id)) {
          if (!this.brandCount.includes('color')) this.brandCount.push('color');
          this.keyname.push('color');
          this.sortAll.push(btn.id);
          this.newSortArr();
        } else {
          this.sortAll.splice(this.sortAll.indexOf(btn.id), 1);
          this.keyname.splice(this.keyname.indexOf('color'), 1);
          if (!this.keyname.includes('color')) this.brandCount.splice(this.brandCount.indexOf('color'), 1);
          this.newSortArr();
        }
      });
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }

  filterRam() {
    this.filterBtn = document.createElement('div');
    this.filterBtn.className = 'filter__btn--ram';
    this.btnDescr = document.createElement('div');
    this.btnDescr.innerText = 'RAM: ';
    this.fragment.append(this.btnDescr);
    employee.forEach((el) => {
      if (!this.memoryRam.includes(el.ram)) {
        this.memoryRam.push(el.ram);
      }
    });
    this.memoryRam.forEach((el) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__ram';
      btn.innerText = el;
      btn.id = el;
      btn.addEventListener('click', () => {
        if (!this.sortAll.includes(btn.id)) {
          if (!this.brandCount.includes('ram')) this.brandCount.push('ram');
          this.keyname.push('ram');
          this.sortAll.push(btn.id);
          this.newSortArr();
        } else {
          this.sortAll.splice(this.sortAll.indexOf(btn.id), 1);
          this.keyname.splice(this.keyname.indexOf('ram'), 1);
          if (!this.keyname.includes('ram')) this.brandCount.splice(this.brandCount.indexOf('ram'), 1);
          this.newSortArr();
        }
      });
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }

  newSortArr(): void {
    this.sortArr = [];
    this.copySortLeng = [];

    const keysOfLaptop = keys<Laptop>();

    employee.forEach((lapEl) => {
      let count = 0;
      this.sortAll.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            count++;
            if (count === this.brandCount.length) {
              this.sortArr.push(lapEl);
            }
          }
        });
      });
    });

    // this.copySortLeng = [];
    this.sortArr.forEach((lapEl) => {
      let count = 0;

      this.sortAll.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            count++;
            if (count === this.brandCount.length) {
              this.copySortLeng.push(lapEl);
            }
          }
        });
      });
    });

    if (this.sortAll.length === 0) {
      this.createCard(employee);
    } else {
      this.createCard(this.copySortLeng);
    }
  }
}
export default Filters;
