import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';

class BtnsRam extends FilterBlocksDiv {
  private local: LocalStor | undefined;
  private sortedCards: SortedCard | undefined;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }

  public filterRam() {
    this.filter.className = 'filter__ram';
    this.filterBtn.className = 'filter__btn--ram';
    this.btnDescr.innerText = 'RAM: ';
    this.fragment.append(this.btnDescr);
    employee.forEach((ramBtn) => {
      if (!this.memoryRam.includes(ramBtn.ram)) {
        this.memoryRam.push(ramBtn.ram);
      }
    });
    const btns: HTMLElement[] = [];
    this.memoryRam.forEach((ramBtn) => {
      const btn: HTMLButtonElement = document.createElement('button');
      btn.className = 'btn btn__ram';
      btn.innerText = ramBtn;
      btn.id = ramBtn;
      btns.push(btn);
      this.fragment.append(btn);
      btn.addEventListener('click', () => {
        const btnRam: string[] = [];
        btn.classList.toggle('active');
        for (const i of btns) {
          if (i.classList.contains('active')) {
            btnRam.push(i.id);
          }
        }
        if (this.local !== undefined) {
          this.local.set('BtnBrandRam', btnRam);
          let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
          if (btnRam.length === 0) {
            countSort = countSort.filter((brandCount) => brandCount !== '3');
          } else {
            countSort.push('3');
          }
          countSort = Array.from(new Set(countSort));
          this.local?.set('CountSortedGet', countSort);
        }
        if (this.sortedCards !== undefined) {
          this.sortedCards.newSortArr();
        }
      });
      const btnActive: string[] | undefined = this.local?.get('BtnBrandRam');
      btnActive?.forEach((ramActive) => {
        btns.forEach((btn) => {
          if (btn.id === ramActive) {
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

export default BtnsRam;
