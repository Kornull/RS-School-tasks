import * as noUiSlider from 'nouislider';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
class FilterStock extends FilterBlocksDiv {
  private value1: HTMLDivElement;
  private value2: HTMLDivElement;
  private filterStock: noUiSlider.target;
  private local: LocalStor;
  private sortedCards: SortedCard;
  constructor() {
    super();
    this.value1 = document.createElement('div');
    this.value2 = document.createElement('div');
    this.filterStock = document.createElement('div');
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  public filterName() {
    this.filter.className = 'slider__stock slider';
    this.filterStock.className = 'slider-stock';
    this.filterStock.id = 'slider-round';
    this.btnDescr.className = 'slider__description';
    this.btnDescr.innerText = 'Filter stock';
    this.value1.className = 'slider__stock--value1';
    this.value2.className = 'slider__stock--value2';

    noUiSlider.create(this.filterStock, {
      start: this.local.get('UiSliderCallbackStock'),
      connect: true,
      range: {
        min: 1,
        '15%': 2,
        '30%': 3,
        '40%': 4,
        '45%': 5,
        '50%': 6,
        '55%': 7,
        '60%': 8,
        '65%': 9,
        '70%': 10,
        '75%': 11,
        '80%': 12,
        '85%': 13,
        '90%': 14,
        '95%': 15,
        max: 16.5,
      },
    });
    let stockArr: number[] = [];
    const skipValues: HTMLElement[] = [this.value1, this.value2];
    this.filterStock.noUiSlider?.on('update', (values, handle: number, callback) => {
      stockArr = [];
      skipValues[handle].innerHTML = Math.floor(+values[handle]).toString();
      this.local?.set('UiSliderCallbackStock', callback);
      for (let i = Math.floor(+values[0]); i <= Math.floor(+values[1]); i++) {
        stockArr.push(i);
      }
      stockArr = Array.from(new Set(stockArr));
      if (this.local !== undefined) {
        this.local.set('StockBrands', stockArr);
        let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
        if (stockArr.length === 0) {
          countSort = countSort.filter((brandCount) => brandCount !== '6');
        } else {
          countSort.push('6');
        }
        countSort = Array.from(new Set(countSort));
        this.local?.set('CountSortedGet', countSort);
      }
      setTimeout(() => this.sortedCards.newSortArr(), 200);
    });

    this.filter.appendChild(this.btnDescr);
    this.filter.appendChild(this.value1);
    this.filter.appendChild(this.value2);
    this.filter.appendChild(this.filterStock);
    this.filterBtn.appendChild(this.fragment);
    return this.filter;
  }
}

export default FilterStock;
