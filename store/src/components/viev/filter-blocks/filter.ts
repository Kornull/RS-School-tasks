import BtnsBrand from './filter-brand';
import BtnsColor from './filter-color';
import InputName from './filter-input-name';
import BtnsRam from './filter-ram';
import FilterYear from './filter-year';
import FilterStock from './filter-quantity-stock';
import SortList from './list-sorted';
import CheckboxSort from './filter-checkbox';

class Filters {
  btnB: BtnsBrand;
  btnC: BtnsColor;
  btnR: BtnsRam;
  input: InputName;
  filterYears: FilterYear;
  filterStock: FilterStock;
  sortList: SortList;
  sortCheckbox: CheckboxSort;

  constructor() {
    this.btnB = new BtnsBrand();
    this.btnC = new BtnsColor();
    this.btnR = new BtnsRam();
    this.input = new InputName();
    this.filterYears = new FilterYear();
    this.filterStock = new FilterStock();
    this.sortList = new SortList();
    this.sortCheckbox = new CheckboxSort();
  }
  runSearch() {
    const search: HTMLDivElement = document.createElement('div');
    search.className = 'filter__input';

    search.append(this.input.filterName());
    search.append(this.filterYears.filterName());
    search.append(this.filterStock.filterName());
    search.append(this.sortList.filterName());
    search.append(this.sortCheckbox.filterName());
    return search;
  }
  runBtn() {
    const btn: HTMLDivElement = document.createElement('div');
    btn.className = 'filter__btn';
    btn.appendChild(this.btnB.filterBrand());
    btn.appendChild(this.btnC.filterColor());
    btn.appendChild(this.btnR.filterRam());

    return btn;
  }
}
export default Filters;
