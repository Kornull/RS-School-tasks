import { Laptop } from '../../types';
import Products from '../../controller/products/product';
import BtnsBrand from './filter-brand';
import BtnsColor from './filter-color';
import InputName from './filter-input-name';
import BtnsRam from './filter-ram';

class Filters {
  btnB: BtnsBrand;
  btnC: BtnsColor;
  btnR: BtnsRam;
  input: InputName;

  constructor() {
    this.btnB = new BtnsBrand();
    this.btnC = new BtnsColor();
    this.btnR = new BtnsRam();
    this.input = new InputName();
  }
  runSearch() {
    const search: HTMLDivElement = document.createElement('div');
    search.className = 'filter__input';

    search.append(this.input.filterName());
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
