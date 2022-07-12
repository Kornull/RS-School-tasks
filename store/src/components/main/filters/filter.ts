import employee from '../../../laptop.json';
import { Key, Laptop } from '../../types';
import Products from '../products/product';

class Filters extends Products {
  filter: HTMLDivElement;
  brandArr: string[];
  colorArr: string[];
  newSorArr: string[];
  fragment: DocumentFragment;
  sortArr: Laptop[];
  getColor: string[];
  filterSearch: HTMLDivElement;
  filterBtn: HTMLDivElement;
  btnDescr: HTMLDivElement;
  getBrand: string[];
  getRam: string[];
  setColor: Laptop[];
  setRam: Laptop[];
  memoryRam: string[];
  sortZeroArr: Laptop[];
  constructor() {
    super();
    this.filter = document.createElement('div');
    this.fragment = document.createDocumentFragment();
    this.filterSearch = document.createElement('div');
    this.filterBtn = document.createElement('div');
    this.btnDescr = document.createElement('div');
    this.brandArr = [];
    this.getBrand = [];
    this.getRam = [];
    this.newSorArr = [];
    this.sortArr = [];
    this.colorArr = [];
    this.getColor = [];
    this.setColor = [];
    this.setRam = [];
    this.memoryRam = [];
    this.sortZeroArr = [];
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
      } else {
        employee.forEach((el) => {
          if (el.brand.toLowerCase().includes(input.value.toLowerCase())) {
            this.sortArr.push(el);
            this.newSorArr.push(el.brand);
            this.newSortArr();
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
      btn.id = el;
      btn.addEventListener('click', () => {
        if (!this.newSorArr.includes(btn.id)) {
          this.newSorArr.push(btn.id);
          this.getBrand.push(btn.innerText);
          this.newSortArr();
        } else {
          this.sortArr = [];

          this.newSorArr.splice(this.newSorArr.indexOf(btn.id), 1);
          this.getBrand = this.getBrand.filter((i) => i !== btn.id);
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
        if (!this.newSorArr.includes(btn.id)) {
          this.newSorArr.push(btn.id);
          this.getColor.push(btn.id);
          this.newSortArr();
          this.zeroSort('color', btn.id);
        } else {
          this.newSorArr.splice(this.newSorArr.indexOf(btn.id), 1);
          this.getColor = this.getColor.filter((i) => i !== btn.id);
          this.setColor = [];
          this.newSortArr();
        }
      });
      this.fragment.append(btn);
    });
    console.log(this.fragment);
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
        if (!this.newSorArr.includes(btn.id)) {
          this.newSorArr.push(btn.id);
          this.getRam.push(btn.id);
          console.log(this.getRam, '1');
          this.newSortArr();
          this.zeroSort('ram', btn.id);
        } else {
          this.setRam = [];
          this.newSorArr.splice(this.newSorArr.indexOf(btn.id), 1);
          this.getRam = this.getRam.filter((i) => i !== btn.id);
          if (this.getRam.length === 0) {
            console.log('00000000000000000000');
            console.log(this.getRam);
          }
          this.newSortArr();
          console.log(this.getRam, 'getram');
        }
      });
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }

  newSortArr(): void {
    console.log('new', this.sortArr);
    console.log('newB', this.getBrand);
    if (this.getBrand.length !== 0) {
      this.getBrand.forEach((x) => {
        employee.forEach((e) => {
          if (e.brand.toLowerCase() === x.toLowerCase() && !this.sortArr.includes(e)) this.sortArr.push(e);
          this.createCard(this.sortArr);
        });
      });
      if (this.getRam.length !== 0) {
        this.getRam.forEach((x) => {
          this.sortArr.forEach((el) => {
            if (el.ram === x && !this.setRam.includes(el)) {
              this.setRam.push(el);
              this.createCard(this.setRam);
            }
          });
        });
      } else if (this.getColor.length !== 0) {
        this.getColor.forEach((x) => {
          this.sortArr.forEach((el) => {
            if (el.color === x && !this.setColor.includes(el)) {
              this.setColor.push(el);
              this.createCard(this.setColor);
            }
          });
        });
      } else {
        this.createCard(this.sortArr);
      }
    }
    if (this.sortArr.length !== 0) {
      if (this.getRam.length !== 0) {
        this.getRam.forEach((x) => {
          this.sortArr.forEach((el) => {
            if (el.ram === x && !this.setRam.includes(el)) {
              this.setRam.push(el);
              this.createCard(this.setRam);
            }
          });
        });
      } else if (this.getColor.length !== 0) {
        this.getColor.forEach((x) => {
          this.sortArr.forEach((el) => {
            if (el.color === x && !this.setColor.includes(el)) {
              this.setColor.push(el);
              this.createCard(this.setColor);
            }
          });
        });
      } else {
        this.createCard(this.sortArr);
      }
    } else {
      this.createCard(employee);
    }
  }

  zeroSort(key: string, str: string): void {
    console.log(key, str);
    if (this.sortArr.length === 0) {
      employee.forEach((el) => {
        for (const k in el) {
          if (k === 'ram' || k === 'color') {
            if (el[k] === str) {
              this.sortArr.push(el);
              console.log(this.sortArr);
              this.createCard(this.sortArr);
            }
          }
        }
      });
    }
  }
}
export default Filters;
