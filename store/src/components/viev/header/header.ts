import Container from '../container/container';
import Basket from '../basket/basket';

class Header {
  private basket: Basket;
  private container: Container;

  constructor() {
    this.container = new Container();
    this.basket = new Basket();
  }

  public create(): HTMLElement {
    const cont = this.container.createContainer();
    const head = <HTMLElement>document.createElement('header');
    const logo = <HTMLDivElement>document.createElement('div');
    const title = <HTMLHeadingElement>document.createElement('h1');
    title.className = 'header__title';
    title.innerText = 'Laptop-Store';
    logo.className = 'header__logo';
    logo.append(title);
    head.className = 'header';
    cont.appendChild(logo);
    cont.appendChild(this.basket.create());
    head.appendChild(cont);
    return head;
  }
}

export default Header;
