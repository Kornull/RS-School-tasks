import * as noUiSlider from 'nouislider';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
class FilterYear extends FilterBlocksDiv {
  private value1: HTMLDivElement;
  private value2: HTMLDivElement;
  private filterYear: noUiSlider.target;
  private local: LocalStor;
  private sortedCards: SortedCard;
  constructor() {
    super();
    this.value1 = document.createElement('div');
    this.value2 = document.createElement('div');
    this.filterYear = document.createElement('div');
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  filterName() {
    this.filter.className = 'slider__year slider';
    this.filterYear.className = 'slider-year';
    this.filterYear.id = 'slider-round';
    this.btnDescr.className = 'slider__description';
    this.btnDescr.innerText = 'Filter years';
    this.value1.className = 'slider__year--value1';
    this.value2.className = 'slider__year--value2';

    noUiSlider.create(this.filterYear, {
      start: this.local.get('UiSliderCallbackYears'),
      connect: true,
      range: {
        min: 2019,
        '30%': 2020,
        '60%': 2021,
        max: 2022.5,
      },
    });
    let yearsArr: string[] = [];
    const skipValues: HTMLElement[] = [this.value1, this.value2];
    this.filterYear.noUiSlider?.on('update', (values, handle: number, callback) => {
      yearsArr = [];
      skipValues[handle].innerHTML = Math.floor(+values[handle]).toString();
      this.local?.set('UiSliderCallbackYears', callback);
      for (let i = Math.floor(+values[0]); i <= Math.floor(+values[1]); i++) {
        yearsArr.push(i.toString());
      }
      yearsArr = Array.from(new Set(yearsArr));
      if (this.local !== undefined) {
        this.local.set('YearsBrand', yearsArr);
        let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
        if (yearsArr.length === 0) {
          countSort = countSort.filter((brandCount) => brandCount !== '5');
        } else {
          countSort.push('5');
        }
        countSort = Array.from(new Set(countSort));
        this.local?.set('CountSortedGet', countSort);
      }
      setTimeout(() => this.sortedCards.newSortArr(), 200);
    });
    this.filter.appendChild(this.btnDescr);
    this.filter.appendChild(this.value1);
    this.filter.appendChild(this.value2);
    this.filter.appendChild(this.filterYear);
    this.filterBtn.appendChild(this.fragment);
    return this.filter;
  }
}

export default FilterYear;
