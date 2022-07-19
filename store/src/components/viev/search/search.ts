import Filters from '../../controller/filter/filter';
import FilterBlocksDiv from '../filter-blocks/filters-blocks';

class Search extends FilterBlocksDiv {
  private nameFilter: Filters;
  private search: HTMLDivElement;
  constructor() {
    super();
    this.nameFilter = new Filters();
    this.search = document.createElement('div');
  }
  public create() {
    this.search.className = 'main__filter filter';
    this.search.append(this.nameFilter.runSearch());
    this.search.append(this.nameFilter.runBtn());

    return this.search;
  }
}

export default Search;
