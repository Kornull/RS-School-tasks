import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';

export default class BtnsColor extends FilterBlocksDiv {
  constructor() {
    super();
  }
  filterColor() {
    this.filter = document.createElement('div');
    this.filter.className = 'filter__color';
    this.filterBtn = document.createElement('div');
    this.filterBtn.className = 'filter__btn--color';
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
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }
}
