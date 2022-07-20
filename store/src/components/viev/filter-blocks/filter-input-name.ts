import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
class InputName extends FilterBlocksDiv {
  private local: LocalStor;
  private sortedCards: SortedCard;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }

  public filterName(): HTMLDivElement {
    this.filter.className = 'filter__name';
    this.filterBtn.className = 'filter__clean';
    this.filterSearch.className = 'filter__search';
    const form: HTMLFormElement = document.createElement('form');
    const label: HTMLLabelElement = document.createElement('label');
    const input: HTMLInputElement = document.createElement('input');

    input.type = 'text';
    input.id = 'search';
    input.placeholder = 'enter brand';
    input.autocomplete = 'off';
    input.setAttribute('autofocus', 'true');
    label.setAttribute('for', input.id);
    label.innerText = 'Brand';

    let countSort: number[] | string[] = [];
    input.addEventListener('keyup', () => {
      let count = 0;
      let btnId: string[] = [];

      employee.forEach((laptop) => {
        if (laptop.brand.toLowerCase().includes(input.value.toLowerCase())) {
          count = 1;
          btnId.push(laptop.brand);
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
          countSort = countSort.filter((brandCount) => brandCount !== '4');
        } else {
          countSort.push('4');
        }
        if (input.value.length === 0) {
          this.filterBtn.classList.add('active');
          this.local.set('ValueInput', []);
          this.local.set('BtnInputId', []);
          countSort = countSort.filter((brandCount) => brandCount !== '4');
        } else {
          this.filterBtn.classList.remove('active');
        }
        countSort = Array.from(new Set(countSort));
        this.local.set('CountSortedGet', countSort);
      }

      if (this.sortedCards !== undefined) {
        this.sortedCards.newSortArr();
      }
    });
    if (this.local !== undefined) {
      input.value = this.local.get('ValueInput')[0];
      if (this.local.get('ValueInput').length === 0) {
        input.value = '';
      }
    }
    this.filterBtn.addEventListener('click', () => {
      countSort = [...this.local.get('CountSortedGet')];
      input.value = '';
      this.filterBtn.classList.remove('active');
      this.local.set('ValueInput', []);
      this.local.set('BtnInputId', []);
      countSort = countSort.filter((e: string) => e !== '4');
      this.local.set('CountSortedGet', countSort);
      this.sortedCards.newSortArr();
      if (input.value.length === 0) {
        this.filterBtn.classList.add('active');
      } else {
        this.filterBtn.classList.remove('active');
      }
    });
    if (input.value.length === 0) {
      this.filterBtn.classList.add('active');
    } else {
      this.filterBtn.classList.remove('active');
    }
    form.append(label);
    form.append(input);
    this.filterSearch.appendChild(form);
    this.filterSearch.appendChild(this.filterBtn);
    this.filter.appendChild(this.filterSearch);
    return this.filter;
  }
}

export default InputName;
