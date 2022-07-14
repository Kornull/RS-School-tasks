import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';

class BtnsRam extends FilterBlocksDiv {
  constructor() {
    super();
  }

  filterRam() {
    this.filter = document.createElement('div');
    this.filter.className = 'filter__ram';
    this.filterBtn = document.createElement('div');
    this.filterBtn.className = 'filter__btn--ram';
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
      this.fragment.append(btn);
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }
}

export default BtnsRam;
