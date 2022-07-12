import Filters from '../filters/filter';

class Search {
  nameFilter: Filters;
  constructor() {
    this.nameFilter = new Filters();
  }
  create() {
    const search = document.createElement('div');
    search.className = 'main__filter filter';
    search.appendChild(this.nameFilter.filterName());
    search.appendChild(this.nameFilter.filterBrand());
    this.nameFilter.filterColor();
    this.nameFilter.filterRam();

    return search;
  }
}

export default Search;
