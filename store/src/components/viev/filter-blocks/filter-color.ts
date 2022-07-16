import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';

export default class BtnsColor extends FilterBlocksDiv {
  local: LocalStor | undefined;
  sortedCards: SortedCard | undefined;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
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
    const btns: HTMLElement[] = [];
    this.colorArr.forEach((el) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__color';
      btn.id = el;
      btn.style.backgroundColor = el;
      btns.push(btn);
      this.fragment.append(btn);
      btn.addEventListener('click', () => {
        const btnColor: string[] = [];
        btn.classList.toggle('active');
        for (const i of btns) {
          if (i.classList.contains('active')) {
            console.log(i.id);
            btnColor.push(i.id);
          }
        }
        console.log(btnColor);
        if (this.local !== undefined) {
          this.local.set('BtnBrandColor', btnColor);
          let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
          if (btnColor.length === 0) {
            countSort = countSort.filter((e) => e !== '2');
          } else {
            countSort.push('2');
          }
          countSort = Array.from(new Set(countSort));
          console.log(countSort);
          this.local?.set('CountSortedGet', countSort);
        }
        if (this.sortedCards !== undefined) {
          this.sortedCards.newSortArr();
        }
      });
      const btnActive = this.local?.get('BtnBrandColor');
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
