class Basket {
  private count: number;
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
  countIncrement() {
    this.count += 1;
  }
  countDecrement() {
    this.count -= 1;
  }
  basketEndCount(): void {
    if (this.basket instanceof HTMLDivElement) {
      this.basket.textContent = `${this.count}`;
    }
  }
}

const basket = new Basket();
export default Basket;
