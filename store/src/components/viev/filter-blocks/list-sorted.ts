import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';

export default class SortList extends FilterBlocksDiv {
  local: LocalStor;
  sortedCards: SortedCard;
  listSortedArr: string[];
  optionArr: HTMLOptionElement[];
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
    this.listSortedArr = ['sort by name A-Z', 'sort by name Z-A', 'by year ascending', 'by year descending'];
    this.optionArr = [];
  }
  filterName() {
    let count = 0;
    this.filter = document.createElement('div');
    this.filter.className = 'filter__list list';
    const listSort = document.createElement('select');
    listSort.name = 'user_brand';
    listSort.className = 'list__sort';
    this.listSortedArr.forEach((e) => {
      const option = document.createElement('option');
      count++;
      option.value = `${count}`;
      option.innerText = e;

      listSort.appendChild(option);
      this.optionArr.push(option);
    });
    listSort.addEventListener('click', () => {
      this.local.set('ListValue', [Number(listSort.value)]);
      setTimeout(() => {
        this.sortedCards?.newSortArr();
      });
    });
    listSort.value = this.local?.get('ListValue')[0];
    this.fragment.append(listSort);

    this.filter.appendChild(this.fragment);
    return this.filter;
  }
}
