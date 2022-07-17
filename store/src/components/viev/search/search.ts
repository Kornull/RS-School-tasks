import Filters from '../filter-blocks/filter';
import FilterBlocksDiv from '../filter-blocks/filters-blocks';
import SortedCard from '../../controller/sorted';
import FilterYear from '../filter-blocks/filter-year';
import { LocalStor } from '../../controller/storage/storage';

class Search extends FilterBlocksDiv {
  local: LocalStor;
  sort: SortedCard;
  nameFilter: Filters;
  filterUi: FilterYear;
  search: HTMLDivElement;
  brands: string[];
  yearArr: string[];
  years: string[];
  constructor() {
    super();
    this.local = new LocalStor();
    this.nameFilter = new Filters();
    this.sort = new SortedCard();
    this.search = document.createElement('div');
    this.brands = ['Lenovo', 'Asus', 'Acer', 'HP', 'Honor', 'Apple'];
    this.filterUi = new FilterYear();
    this.yearArr = [];
    this.years = ['2019', '2020', '2021', '2022'];
  }
  create() {
    this.search.className = 'main__filter filter';
    this.search.append(this.nameFilter.runSearch());
    this.search.append(this.nameFilter.runBtn());

    return this.search;
  }
}

export default Search;
