class Basket {
  public count?: number;
  private basket: HTMLDivElement | undefined;

  constructor() {
    this.count = 0;
  }

  basketEl(): HTMLDivElement {
    const basket = <HTMLDivElement>document.createElement('div');
    basket.className = 'header__basket basket';
    const basketCounts = <HTMLDivElement>document.createElement('div');
    basketCounts.className = 'basket__count';
    this.basket = basketCounts;
    basket.appendChild(this.basket);
    return basket;
  }

  basketCount(count?: number): void {
    if (count) {
      this.count = count;
    }
    if (this.basket !== undefined) {
      if (this.count) {
        this.basket.textContent = `${this.count}`;
      } else {
        this.basket.textContent = `${this.count}`;
      }
    }
  }
}

const basket = new Basket();
export default basket;
