import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';

export default class BtnsBrand extends FilterBlocksDiv {
  constructor() {
    super();
  }
  filterBrand() {
    this.filter = document.createElement('div');
    this.filter.className = 'filter__brand';
    this.filterBtn.className = 'filter__btn--brand';
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
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }
}
