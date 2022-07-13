import employee from '../../../laptop.json';
import { Laptop } from '../../types';
import Products from '../products/product';
import { keys } from 'ts-transformer-keys';

class Filters extends Products {
  filter: HTMLDivElement;
  brandArr: string[];
  colorArr: string[];

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

  sortAll: string[];
  copySortArr: Laptop[];
  copySortLeng: Laptop[];
  keyname: string[];
  brandCount: string[];
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
    this.sortArr = [];
    this.colorArr = [];
    this.getColor = [];
    this.setColor = [];
    this.setRam = [];
    this.memoryRam = [];
    this.copySortArr = [];

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
    // input.addEventListener('input', () => {
    //   this.sortArr = [];
    //   if (input.value.length === 0) {
    //     this.createCard(employee);
    //     this.sortArr = [];
    //   } else {
    //     employee.forEach((el) => {
    //       if (el.brand.toLowerCase().includes(input.value.toLowerCase())) {
    //         this.sortArr.push(el);
    //         this.newSortColor.push(el.brand);
    //         // this.newSortArr();
    //       }
    //     });
    //   }
    // });

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
          console.log('key', this.keyname);
          this.newSortArr();
        } else {
          this.sortAll.splice(this.sortAll.indexOf(btn.id), 1);
          this.keyname.splice(this.keyname.indexOf('brand'), 1);
          if (!this.keyname.includes('brand')) this.brandCount.splice(this.brandCount.indexOf('brand'), 1);
          console.log('else', this.sortAll);
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
          console.log('BCOUNT', this.brandCount);
          this.newSortArr();
        } else {
          this.sortAll.splice(this.sortAll.indexOf(btn.id), 1);
          this.keyname.splice(this.keyname.indexOf('color'), 1);
          if (!this.keyname.includes('color')) this.brandCount.splice(this.brandCount.indexOf('color'), 1);
          console.log('else', this.sortAll);
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
          console.log('BCOUNT', this.brandCount);
          this.newSortArr();
        } else {
          this.sortAll.splice(this.sortAll.indexOf(btn.id), 1);
          this.keyname.splice(this.keyname.indexOf('ram'), 1);
          if (!this.keyname.includes('ram')) this.brandCount.splice(this.brandCount.indexOf('ram'), 1);
          console.log('ram', this.sortAll);
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
    console.log(employee);
    this.sortArr = [];
    this.copySortLeng = [];

    const keysOfLaptop = keys<Laptop>();
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11');

    employee.forEach((lapEl) => {
      let count = 0;
      this.sortAll.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            count++;
            if (count === this.brandCount.length) {
              console.log(this.brandCount.length, 'this.brandCount.length');
              this.sortArr.push(lapEl);
            }
          }
        });
      });
    });
    console.log('SORT', this.sortArr);

    console.log('COPYSORT', this.sortArr);

    this.copySortLeng = [];
    this.sortArr.forEach((lapEl) => {
      let count = 0;

      this.sortAll.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            count++;
            if (count === this.brandCount.length) {
              console.log(this.brandCount.length, 'this.brandCount.length');
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
    console.log('SORT -2', this.sortArr);
    console.log('COPYSORT-2', this.copySortLeng);
  }
}
export default Filters;
