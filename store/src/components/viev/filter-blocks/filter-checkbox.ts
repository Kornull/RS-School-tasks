import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
import FilterBlocksDiv from './filters-blocks';

export default class CheckboxSort extends FilterBlocksDiv {
  private local: LocalStor;
  private sortedCards: SortedCard;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  public filterName() {
    this.filter.className = 'filter__checkbox';
    const form: HTMLFormElement = document.createElement('form');
    const label: HTMLLabelElement = document.createElement('label');
    const input: HTMLInputElement = document.createElement('input');

    input.type = 'checkbox';
    input.id = 'popular';

    label.setAttribute('for', input.id);
    label.innerText = 'Popular ';

    form.addEventListener('click', () => {
      if (input.classList.contains('popular')) {
        input.classList.remove('popular');
        this.local.set('PopularCheckBox', []);
        input.setAttribute('checked', 'false');
      } else {
        input.classList.add('popular');
        this.local.set('PopularCheckBox', [input.id]);
        input.setAttribute('checked', 'true');
      }
      setTimeout(() => {
        this.sortedCards.newSortArr();
      }, 200);
    });
    if (this.local.get('PopularCheckBox').length === 1) {
      input.classList.add('popular');
      input.setAttribute('checked', 'true');
    }
    form.append(label);
    form.append(input);
    this.filter.appendChild(form);
    return this.filter;
  }
}
