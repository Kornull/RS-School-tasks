import employee from '../../../laptop.json';

import { Laptop } from '../../types';
class Products {
  create() {
    const product: HTMLDivElement = document.createElement('div');
    product.className = 'main__product';
    const fragnent: DocumentFragment = document.createDocumentFragment();
    // card.className = 'card_list';
    employee.forEach((_el: Laptop) => {
      const card = document.createElement('div');
      const img = document.createElement('img');
      const ul = document.createElement('ul');
      card.className = 'card';
      img.className = 'card__img';
      ul.className = 'card__list';
      card.innerHTML = _el.model;
      img.src = `./assets/img/${_el.image}`;
      for (const i of _el.description) {
        const li = document.createElement('li');
        const arrK = Object.keys(i);
        const arrV = Object.values(i);
        li.innerHTML = `${arrK[0]} - ${arrV[0]}`;
        ul.appendChild(li);
      }
      const stock = document.createElement('div');
      stock.innerHTML = `In stock - ${_el.number}`;
      const year = document.createElement('div');
      year.innerHTML = `Year - ${_el.year}`;
      card.appendChild(img);
      card.appendChild(ul);
      card.appendChild(stock);
      card.appendChild(year);
      fragnent.append(card);
    });
    product.appendChild(fragnent);
    return product;
  }

  createCard(data: Laptop[]): void {
    console.log(data);
    const fragnent: DocumentFragment = document.createDocumentFragment();
    // card.className = 'card_list';
    data.forEach((_el: Laptop) => {
      const card = document.createElement('div');
      const img = document.createElement('img');
      const ul = document.createElement('ul');
      card.className = 'card';
      img.className = 'card__img';
      ul.className = 'card__list';
      card.innerHTML = _el.model;
      img.src = `./assets/img/${_el.image}`;
      for (const i of _el.description) {
        const li = document.createElement('li');
        const arrK = Object.keys(i);
        const arrV = Object.values(i);
        li.innerHTML = `${arrK[0]} - ${arrV[0]}`;
        ul.appendChild(li);
      }
      const stock = document.createElement('div');
      stock.innerHTML = `In stock - ${_el.number}`;
      const year = document.createElement('div');
      year.innerHTML = `Year - ${_el.year}`;
      card.appendChild(img);
      card.appendChild(ul);
      card.appendChild(stock);
      card.appendChild(year);
      fragnent.append(card);
    });
    const a = document.querySelector('.main__product') as Element;
    a.innerHTML = '';
    a.appendChild(fragnent);
  }
}
export default Products;
