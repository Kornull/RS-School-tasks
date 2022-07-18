import employee from '../../../laptop.json';
import { Laptop } from '../../types';
import { LocalStor } from '../storage/storage';
class Products {
  private Local: LocalStor;
  constructor() {
    this.Local = new LocalStor();
  }
  public create() {
    const product: HTMLDivElement = document.createElement('div');
    product.className = 'main__product';
    const fragnent: DocumentFragment = document.createDocumentFragment();
    // card.className = 'card_list';
    employee.forEach((_el: Laptop) => {
      const card = document.createElement('div');
      const img = document.createElement('img');
      const ul = document.createElement('ul');
      card.className = 'card';
      card.id = _el.model;
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

  public createCard(data: Laptop[]): void {
    const fragnent: DocumentFragment = document.createDocumentFragment();
    const productsArr: HTMLDivElement[] = [];
    let favoriteProductsArr: string[] = [];
    data.forEach((_el: Laptop) => {
      const card = document.createElement('div');
      const img = document.createElement('img');
      const ul = document.createElement('ul');
      card.className = 'card';
      card.id = _el.model.split(' ').join('-');
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
      productsArr.push(card);
      card.addEventListener('click', () => {
        const a: HTMLDivElement | null = document.querySelector('.basket__count');
        if (card.classList.contains('active')) {
          favoriteProductsArr = [];
          card.classList.remove('active');
          productsArr.forEach((el) => {
            if (el.classList.contains('active')) {
              favoriteProductsArr.push(el.id);
            }
          });
          this.Local.set('FavoriteProduct', favoriteProductsArr);
          if (a !== null) {
            let num = Number(a.innerHTML);
            num--;
            if (num < 0) {
              num = 0;
            }
            if (num === 0) {
              this.Local.set('BasketCount', [0]);
            } else {
              this.Local.set('BasketCount', [num]);
            }
            a.innerHTML = `${this.Local.get('BasketCount')[0]}`;
          }
        } else {
          favoriteProductsArr = [];
          card.classList.add('active');
          productsArr.forEach((el) => {
            if (el.classList.contains('active')) {
              favoriteProductsArr.push(el.id);
            }
          });
          this.Local.set('FavoriteProduct', favoriteProductsArr);
          if (a !== null) {
            let num = Number(a.innerHTML);
            num++;
            if (num > 5) {
              num = 5;
              alert('UPPPPS');
              card.classList.remove('active');
            }
            if (num === 0) {
              this.Local.set('BasketCount', [0]);
            } else {
              this.Local.set('BasketCount', [num]);
            }
            a.innerHTML = `${this.Local.get('BasketCount')[0]}`;
          }
        }
        if (a !== null) {
          a.innerHTML = this.Local.get('BasketCount')[0];
        }
        // console.log(productsArr)
      });
      if (this.Local.get('FavoriteProduct').length !== 0) {
        this.Local.get('FavoriteProduct').forEach((el) => {
          productsArr.forEach((e) => {
            if (el === e.id) {
              e.classList.add('active');
            }
          });
        });
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
