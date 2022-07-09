class Basket {
  private count: number;
  private basket: HTMLDivElement | undefined;

  constructor() {
    this.count = 0;
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
  countIncrement() {
    this.count += 1;
    this.basketEndCount();
  }
  countDecrement() {
    this.count -= 1;
    this.basketEndCount();
  }
  basketEndCount(): void {
    if (this.basket instanceof HTMLDivElement) {
      this.basket.textContent = `${this.count}`;
    }
  }
}

export default Basket;
