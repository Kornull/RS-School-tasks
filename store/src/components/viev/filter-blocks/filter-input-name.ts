// import employee from '../../../laptop.json';
import FilterBlocksDiv from './filters-blocks';

class InputName extends FilterBlocksDiv {
  constructor() {
    super();
  }

  filterName(): HTMLDivElement {
    this.filter.className = 'filter__name';
    this.filterSearch.className = 'filter__search';
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type = 'text';
    input.id = 'search';
    input.placeholder = 'enter brand';
    label.setAttribute('for', input.id);
    label.innerText = 'Brand';

    form.append(label);
    form.append(input);
    this.filterSearch.appendChild(form);
    this.filter.appendChild(this.filterSearch);

    return this.filter;
  }
}

export default InputName;
