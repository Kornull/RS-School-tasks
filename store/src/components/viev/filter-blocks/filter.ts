import BtnsBrand from './filter-brand';
import BtnsColor from './filter-color';
import InputName from './filter-input-name';
import BtnsRam from './filter-ram';
import FilterYear from './filter-year';
import FilterStock from './filter-quantity-stock';

class Filters {
  btnB: BtnsBrand;
  btnC: BtnsColor;
  btnR: BtnsRam;
  input: InputName;
  filterYears: FilterYear;
  filterStock: FilterStock;

  constructor() {
    this.btnB = new BtnsBrand();
    this.btnC = new BtnsColor();
    this.btnR = new BtnsRam();
    this.input = new InputName();
    this.filterYears = new FilterYear();
    this.filterStock = new FilterStock();
  }
  runSearch() {
    const search: HTMLDivElement = document.createElement('div');
    search.className = 'filter__input';

    search.append(this.input.filterName());
    search.append(this.filterYears.filterName());
    search.append(this.filterStock.filterName());
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
