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
    employee.forEach((colorBtn) => {
      if (!this.colorArr.includes(colorBtn.color)) {
        this.colorArr.push(colorBtn.color);
      }
    });
    const btns: HTMLElement[] = [];
    this.colorArr.forEach((colorBtn) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__color';
      btn.id = colorBtn;
      btn.style.backgroundColor = colorBtn;
      btns.push(btn);
      this.fragment.append(btn);
      btn.addEventListener('click', () => {
        const btnColor: string[] = [];
        btn.classList.toggle('active');
        for (const btnBlock of btns) {
          if (btnBlock.classList.contains('active')) {
            btnColor.push(btnBlock.id);
          }
        }
        if (this.local !== undefined) {
          this.local.set('BtnBrandColor', btnColor);
          let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
          if (btnColor.length === 0) {
            countSort = countSort.filter((countProduct) => countProduct !== '2');
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
      btnActive?.forEach((activeBtn) => {
        btns.forEach((btn) => {
          if (btn.id === activeBtn) {
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
