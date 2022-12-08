import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';

export default class SortList extends FilterBlocksDiv {
  private local: LocalStor;
  private sortedCards: SortedCard;
  private listSortedArr: string[];
  private optionArr: HTMLOptionElement[];
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
    this.listSortedArr = ['sort by title A-Z', 'sort by title Z-A', 'by year ascending', 'by year descending'];
    this.optionArr = [];
  }
  public filterName() {
    let count = 0;
    this.filter.className = 'filter__list list';
    const listSort = document.createElement('select');
    listSort.name = 'user_brand';
    listSort.className = 'list__sort';
    this.listSortedArr.forEach((sortedOption) => {
      const option = document.createElement('option');
      count++;
      option.value = `${count}`;
      option.innerText = sortedOption;

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
