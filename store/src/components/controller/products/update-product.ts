import { Laptop } from '../../types';
import { LocalStor } from '../storage/storage';
class ProductsUpdate {
  private Local: LocalStor;
  constructor() {
    this.Local = new LocalStor();
  }
  public createCard(data: Laptop[]): void {
    const product: HTMLDivElement = document.createElement('div');
    product.className = 'main__product';
    const textBlock: HTMLDivElement = document.createElement('div');
    textBlock.className = 'no__product';
    textBlock.innerText = 'Sorry. Nothing found, try another query.';
    const fragnent: DocumentFragment = document.createDocumentFragment();
    const productsArr: HTMLDivElement[] = [];
    let favoriteProductsArr: string[] = [];
    data.forEach((laptopCard: Laptop) => {
      const card: HTMLDivElement = document.createElement('div');
      const img: HTMLImageElement = document.createElement('img');
      const ul: HTMLUListElement = document.createElement('ul');
      card.className = 'card';
      card.id = laptopCard.model.split(' ').join('-');
      img.className = 'card__img';
      ul.className = 'card__list';
      card.innerHTML = laptopCard.model;
      img.src = `./assets/img/${laptopCard.image}`;
      for (const i of laptopCard.description) {
        const li: HTMLLIElement = document.createElement('li');
        const arrKey: string[] = Object.keys(i);
        const arrValue: string[] = Object.values(i);
        li.innerHTML = `<b>${arrKey[0]}</b> - ${arrValue[0]}`;
        ul.appendChild(li);
      }
      productsArr.push(card);
      card.addEventListener('click', () => {
        const baskeNum: HTMLDivElement | null = document.querySelector('.basket__count');
        if (card.classList.contains('active')) {
          favoriteProductsArr = [];
          card.classList.remove('active');
          productsArr.forEach((laptop) => {
            if (laptop.classList.contains('active')) {
              favoriteProductsArr.push(laptop.id);
            }
          });
          this.Local.set('FavoriteProduct', favoriteProductsArr);
          if (baskeNum !== null) {
            let num = Number(baskeNum.innerHTML);
            num--;
            if (num < 0) {
              num = 0;
            }
            if (num === 0) {
              this.Local.set('BasketCount', [0]);
            } else {
              this.Local.set('BasketCount', [num]);
            }
            baskeNum.innerHTML = `${this.Local.get('BasketCount')[0]}`;
          }
        } else {
          favoriteProductsArr = [];
          card.classList.add('active');
          productsArr.forEach((laptop) => {
            if (laptop.classList.contains('active')) {
              favoriteProductsArr.push(laptop.id);
            }
          });
          if (baskeNum !== null) {
            let num = Number(baskeNum.innerHTML);
            num++;
            if (num > 20) {
              num = 20;
              card.classList.remove('active');
              alert('Shopping cart full,\nDelete products');
              favoriteProductsArr = favoriteProductsArr.filter((e) => e !== card.id);
            }
            this.Local.set('FavoriteProduct', favoriteProductsArr);
            if (num === 0) {
              this.Local.set('BasketCount', [0]);
            } else {
              this.Local.set('BasketCount', [num]);
            }
            baskeNum.innerHTML = `${this.Local.get('BasketCount')[0]}`;
          }
        }
        if (baskeNum !== null) {
          baskeNum.innerHTML = this.Local.get('BasketCount')[0];
        }
      });
      if (this.Local.get('FavoriteProduct').length !== 0) {
        this.Local.get('FavoriteProduct').forEach((product) => {
          productsArr.forEach((productCard) => {
            if (product === productCard.id) {
              productCard.classList.add('active');
            }
          });
        });
      }
      const stock: HTMLDivElement = document.createElement('div');
      stock.innerHTML = `<b>In stock</b> - ${laptopCard.number}`;
      const year: HTMLDivElement = document.createElement('div');
      year.innerHTML = `<b>Year</b> - ${laptopCard.year}`;
      card.appendChild(img);
      card.appendChild(ul);
      card.appendChild(stock);
      card.appendChild(year);
      fragnent.append(card);
    });
    if (data.length === 0) {
      fragnent.append(textBlock);
    }
    const prod = document.querySelector('.main__product') as Element;
    prod.innerHTML = '';
    prod.appendChild(fragnent);
  }
}
export default ProductsUpdate;
