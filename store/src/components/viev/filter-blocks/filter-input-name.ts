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
    label.setAttribute('for', input.id);
    label.innerText = 'Brand';
    // input.addEventListener('input', () => {
    //   this.sortArr = [];
    //   if (input.value.length !== 0) {
    //     document.querySelectorAll('.btn__brand').forEach((e) => e.classList.remove('active'));
    //     this.brandCount.slice(this.brandCount.indexOf('brand'), 1);
    //     employee.forEach((el) => {
    //       this.sortAll = this.sortAll.filter((e) => e !== el.brand);
    //     });
    //     employee.forEach((el) => {
    //       if (el.brand.toLowerCase().includes(input.value.toLowerCase())) {
    //         this.sortAll.push(el.brand);
    //         if (!this.brandCount.includes('brand')) this.brandCount.push('brand');
    //       }
    //     });
    //     this.sortAll.sort();
    //     this.sortAll = Array.from(new Set(this.sortAll));

    //     this.newSortArr();
    //   } else if (input.value.length === 0 && this.sortAll.length !== 0) {
    //     this.brandCount.splice(this.brandCount.indexOf('brand'), 1);
    //     employee.forEach((el) => {
    //       this.sortAll = this.sortAll.filter((e) => e !== el.brand);
    //     });
    //     this.newSortArr();
    //   } else {
    //     this.createCard(employee);
    //   }
    // });

    form.append(label);
    form.append(input);
    this.filterSearch.appendChild(form);
    this.filter.appendChild(this.filterSearch);

    return this.filter;
  }
}

export default InputName;
