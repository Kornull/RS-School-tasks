import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';

export default class BtnsColor extends FilterBlocksDiv {
  private local: LocalStor | undefined;
  private sortedCards: SortedCard | undefined;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  public filterColor() {
    this.filter.className = 'filter__color';
    this.filterBtn.className = 'filter__btn--color';
    this.btnDescr.innerText = 'Color: ';
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
            btnColor.push(i.id);
          }
        }
        if (this.local !== undefined) {
          this.local.set('BtnBrandColor', btnColor);
          let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
          if (btnColor.length === 0) {
            countSort = countSort.filter((e) => e !== '2');
          } else {
            countSort.push('2');
          }
          countSort = Array.from(new Set(countSort));
          this.local?.set('CountSortedGet', countSort);
        }
        if (this.sortedCards !== undefined) {
          this.sortedCards.newSortArr();
        }
      });
      const btnActive: string[] | undefined = this.local?.get('BtnBrandColor');
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
