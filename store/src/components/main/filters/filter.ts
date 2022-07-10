import employee from '../../../laptop.json';
import { Laptop } from '../../types';
import Products from '../products/product';
class Filters {
  prod: Products;
  constructor() {
    this.prod = new Products();
  }
  filterName(): HTMLDivElement {
    const main = document.querySelector('main__product') as Element;
    console.log('main', main);
    const filterForName: HTMLDivElement = document.createElement('div');
    filterForName.className = 'filter__name';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'search';

    input.addEventListener('input', () => {
      let sortArr: Laptop[] = [];
      if (input.value.length === 0) {
        this.prod.createCard(employee);
        sortArr = [];
      } else {
        employee.forEach((el) => {
          if (el.brand.toLowerCase().includes(input.value)) {
            sortArr.push(el);
            console.log(el.brand);

            this.prod.createCard(sortArr);
          }
        });
      }
    });

    filterForName.appendChild(input);

    return filterForName;
  }
}

export default Filters;
