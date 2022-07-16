// import noUiSlider from 'nouislider';
import * as noUiSlider from 'nouislider';
// import Search from '../../controller/search/search';

import FilterBlocksDiv from './filters-blocks';

class FilterYear extends FilterBlocksDiv {
  value1: HTMLDivElement;
  value2: HTMLDivElement;
  filterYear: noUiSlider.target;
  // search: Search;
  constructor() {
    super();
    this.value1 = document.createElement('div');
    this.value2 = document.createElement('div');
    this.filterYear = document.createElement('div');
    // this.search = new Search();
  }
  filterName() {
    this.filter = document.createElement('div');
    this.filter.className = 'slider__year slider';
    this.filterBtn = document.createElement('div');
    this.filterYear.className = 'slider-year';
    this.filterYear.id = 'slider-round';
    this.value1.className = 'slider__year--value1';
    this.value2.className = 'slider__year--value2';
    noUiSlider.create(this.filterYear, {
      start: [2019, 2022.5],
      connect: true,
      range: {
        min: 2019,
        '30%': 2020,
        '60%': 2021,
        max: 2022.5,
      },
    });
    const skipValues: HTMLElement[] = [this.value2, this.value1];

    this.filterYear.noUiSlider?.on('update', (values, handle: number) => {
      skipValues[handle].innerHTML = Math.floor(+values[handle]).toString();
    });

    this.filter.appendChild(this.value1);
    this.filter.appendChild(this.value2);
    this.filter.appendChild(this.filterYear);
    this.filterBtn.appendChild(this.fragment);
    return this.filter;
  }
}

export default FilterYear;
