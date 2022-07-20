import employee from '../../../laptop.json';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
import FilterBlocksDiv from './filters-blocks';

export default class BtnsBrand extends FilterBlocksDiv {
  private local: LocalStor | undefined;
  private sortedCards: SortedCard | undefined;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  public filterBrand() {
    this.filter.className = 'filter__brand';
    this.filterBtn.className = 'filter__btn--brand';
    this.btnDescr.innerText = "Brand's";
    this.fragment.append(this.btnDescr);
    employee.forEach((cardBrand) => {
      if (!this.brandArr.includes(cardBrand.brand)) {
        this.brandArr.push(cardBrand.brand);
      }
    });
    const btns: HTMLElement[] = [];
    this.brandArr.forEach((card) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__brand';
      btn.innerText = card;
      btn.id = card;
      btns.push(btn);
      this.fragment.append(btn);
      btn.addEventListener('click', () => {
        const btnId: string[] = [];
        btn.classList.toggle('active');
        for (const btnBlock of btns) {
          if (btnBlock.classList.contains('active')) {
            btnId.push(btnBlock.id);
          }
        }
        if (this.local !== undefined) {
          this.local.set('BtnBrandId', btnId);
          let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
          if (btnId.length === 0) {
            countSort = countSort.filter((countProduct) => countProduct !== '1');
          } else {
            countSort.push('1');
          }
          countSort = Array.from(new Set(countSort));
          this.local?.set('CountSortedGet', countSort);
        }
        if (this.sortedCards !== undefined) {
          this.sortedCards.newSortArr();
        }
      });
      const btnActive = this.local?.get('BtnBrandId');
      btnActive?.forEach((card) => {
        btns.forEach((btn) => {
          if (btn.id === card) {
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
