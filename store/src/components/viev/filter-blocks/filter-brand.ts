import employee from '../../../laptop.json';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
import FilterBlocksDiv from './filters-blocks';

export default class BtnsBrand extends FilterBlocksDiv {
  local: LocalStor | undefined;
  sortedCards: SortedCard | undefined;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
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
    const btns: HTMLElement[] = [];
    this.brandArr.forEach((el) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__brand';
      btn.innerText = el;
      btn.id = el;
      btns.push(btn);
      this.fragment.append(btn);
      btn.addEventListener('click', () => {
        const btnId: string[] = [];
        btn.classList.toggle('active');
        for (const i of btns) {
          if (i.classList.contains('active')) {
            console.log(i.id);
            btnId.push(i.id);
          }
        }
        console.log(btnId);
        if (this.local !== undefined) {
          this.local.set('BtnBrandId', btnId);
          let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
          if (btnId.length === 0) {
            countSort = countSort.filter((e) => e !== '1');
          } else {
            countSort.push('1');
          }
          countSort = Array.from(new Set(countSort));
          console.log(countSort);
          this.local?.set('CountSortedGet', countSort);
        }
        if (this.sortedCards !== undefined) {
          this.sortedCards.newSortArr();
        }
      });
      const btnActive = this.local?.get('BtnBrandId');
      btnActive?.forEach((el) => {
        btns.forEach((btn) => {
          if (btn.id === el) {
            btn.classList.add('active');
          }
        });
      });
    });
    this.filterBtn.appendChild(this.fragment);
    this.filter.appendChild(this.filterBtn);
    return this.filter;
  }
}
