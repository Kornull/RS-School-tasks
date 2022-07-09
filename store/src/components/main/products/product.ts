import Cards from './list-cards';

class Products {
  createCard: Cards;
  constructor() {
    this.createCard = new Cards();
  }
  create() {
    const product: HTMLDivElement = document.createElement('div');
    product.className = 'main__product';
    product.appendChild(this.createCard.createCard());
    return product;
  }
}
export default Products;
