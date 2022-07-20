import employee from '../../../laptop.json';
import { Laptop } from '../../types';
class Products {
  public create() {
    const product: HTMLDivElement = document.createElement('div');
    product.className = 'main__product';
    const fragnent: DocumentFragment = document.createDocumentFragment();
    employee.forEach((_el: Laptop) => {
      const card: HTMLDivElement = document.createElement('div');
      const img: HTMLImageElement = document.createElement('img');
      const ul: HTMLUListElement = document.createElement('ul');
      card.className = 'card';
      card.id = _el.model;
      img.className = 'card__img';
      ul.className = 'card__list';
      card.innerHTML = _el.model;
      img.src = `./assets/img/${_el.image}`;
      for (const i of _el.description) {
        const li: HTMLLIElement = document.createElement('li');
        const arrK: string[] = Object.keys(i);
        const arrV: string[] = Object.values(i);
        li.innerHTML = `${arrK[0]} - ${arrV[0]}`;
        ul.appendChild(li);
      }
      const stock: HTMLDivElement = document.createElement('div');
      stock.innerHTML = `In stock - ${_el.number}`;
      const year: HTMLDivElement = document.createElement('div');
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
}
export default Products;
