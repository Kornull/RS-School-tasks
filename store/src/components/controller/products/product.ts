import employee from '../../../laptop.json';
import { Laptop } from '../../types';
class Products {
  public create() {
    const product: HTMLDivElement = document.createElement('div');
    product.className = 'main__product';
    const fragnent: DocumentFragment = document.createDocumentFragment();
    employee.forEach((laptop: Laptop) => {
      const card: HTMLDivElement = document.createElement('div');
      const img: HTMLImageElement = document.createElement('img');
      const ul: HTMLUListElement = document.createElement('ul');
      card.className = 'card';
      card.id = laptop.model;
      img.className = 'card__img';
      ul.className = 'card__list';
      card.innerHTML = laptop.model;
      img.src = `./assets/img/${laptop.image}`;
      for (const i of laptop.description) {
        const li: HTMLLIElement = document.createElement('li');
        const arrK: string[] = Object.keys(i);
        const arrV: string[] = Object.values(i);
        li.innerHTML = `${arrK[0]} - ${arrV[0]}`;
        ul.appendChild(li);
      }
      const stock: HTMLDivElement = document.createElement('div');
      stock.innerHTML = `In stock - ${laptop.number}`;
      const year: HTMLDivElement = document.createElement('div');
      year.innerHTML = `Year - ${laptop.year}`;
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
