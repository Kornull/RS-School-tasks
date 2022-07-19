import { LocalStor } from '../../controller/storage/storage';

class Basket {
  private local: LocalStor;
  private basket: HTMLDivElement | undefined;
  constructor() {
    this.local = new LocalStor();
  }

  create(): HTMLDivElement {
    const basket = <HTMLDivElement>document.createElement('div');
    basket.className = 'header__basket basket';
    const basketCounts = <HTMLDivElement>document.createElement('div');
    basketCounts.className = 'basket__count';
    this.basket = basketCounts;
    basket.appendChild(this.basket);
    this.basketEndCount();
    return basket;
  }
  basketEndCount(): void {
    if (this.basket instanceof HTMLDivElement) {
      if (this.local.get('BasketCount').length !== 0) {
        this.basket.textContent = `${this.local.get('BasketCount')[0]}`;
      } else {
        this.basket.textContent = `0`;
      }
    }
  }
}

export default Basket;
