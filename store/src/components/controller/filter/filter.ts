import BtnsBrand from '../../viev/filter-blocks/filter-brand';
import BtnsColor from '../../viev/filter-blocks/filter-color';
import InputName from '../../viev/filter-blocks/filter-input-name';
import BtnsRam from '../../viev/filter-blocks/filter-ram';
import FilterYear from '../../viev/filter-blocks/filter-year';
import FilterStock from '../../viev/filter-blocks/filter-quantity-stock';
import SortList from '../../viev/filter-blocks/list-sorted';
import CheckboxSort from '../../viev/filter-blocks/filter-checkbox';
import ResetBtn from '../../viev/filter-blocks/reset-btn';
import AllResetBtn from '../../viev/filter-blocks/all-reset';

class Filters {
  private btnB: BtnsBrand;
  private btnC: BtnsColor;
  private btnR: BtnsRam;
  private input: InputName;
  private filterYears: FilterYear;
  private filterStock: FilterStock;
  private sortList: SortList;
  private sortCheckbox: CheckboxSort;
  private resetBtn: ResetBtn;
  private resetBtnAll: AllResetBtn;

  constructor() {
    this.btnB = new BtnsBrand();
    this.btnC = new BtnsColor();
    this.btnR = new BtnsRam();
    this.input = new InputName();
    this.filterYears = new FilterYear();
    this.filterStock = new FilterStock();
    this.sortList = new SortList();
    this.sortCheckbox = new CheckboxSort();
    this.resetBtn = new ResetBtn();
    this.resetBtnAll = new AllResetBtn();
  }
  public runSearch() {
    const search: HTMLDivElement = document.createElement('div');
    search.className = 'filter__input';

    search.append(this.input.filterName());
    search.append(this.filterYears.filterName());
    search.append(this.filterStock.filterName());
    search.append(this.sortList.filterName());
    search.append(this.sortCheckbox.filterName());
    return search;
  }
  public runBtn() {
    const btn: HTMLDivElement = document.createElement('div');
    btn.className = 'filter__btn';
    btn.appendChild(this.btnB.filterBrand());
    btn.appendChild(this.btnC.filterColor());
    btn.appendChild(this.btnR.filterRam());
    btn.appendChild(this.resetBtnAll.btnResBrand());
    btn.appendChild(this.resetBtn.btnResBrand());

    return btn;
  }
}
export default Filters;
