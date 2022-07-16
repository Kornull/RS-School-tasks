import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
class InputName extends FilterBlocksDiv {
  local: LocalStor | undefined;
  sortedCards: SortedCard | undefined;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }

  filterName(): HTMLDivElement {
    this.filter.className = 'filter__name';
    this.filterSearch.className = 'filter__search';
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type = 'text';
    input.id = 'search';
    input.placeholder = 'enter brand';
    label.setAttribute('for', input.id);
    label.innerText = 'Brand';
    input.addEventListener('keyup', () => {
      let countSort: number[] | string[] = [];
      let count = 0;
      let btnId: string[] = [];

      employee.forEach((el) => {
        if (el.brand.toLowerCase().includes(input.value.toLowerCase())) {
          count = 1;
          btnId.push(el.brand);
        }
      });
      if (count === 0) {
        btnId = [''];
      }
      btnId = Array.from(new Set(btnId));
      if (this.local !== undefined) {
        this.local.set('ValueInput', [input.value]);
        this.local.set('BtnInputId', btnId);
        countSort = [...this.local.get('CountSortedGet')];
        if (btnId.length === 0) {
          countSort = countSort.filter((e) => e !== '4');
        } else {
          countSort.push('4');
        }
        if (input.value.length === 0) {
          this.local.set('ValueInput', []);
          this.local?.set('BtnInputId', []);
          countSort = countSort.filter((e) => e !== '4');
        }
        countSort = Array.from(new Set(countSort));
        this.local?.set('CountSortedGet', countSort);
      }

      if (this.sortedCards !== undefined) {
        this.sortedCards.newSortArr();
      }
    });
    if (this.local !== undefined) {
      input.value = this.local.get('ValueInput')[0];
    }
    form.append(label);
    form.append(input);
    this.filterSearch.appendChild(form);
    this.filter.appendChild(this.filterSearch);

    return this.filter;
  }
}

export default InputName;
