import container from '../container/container';
import Basket from '../basket/basket';
class Header extends Basket {
  Head(): HTMLElement {
    const head = <HTMLElement>document.createElement('header');
    const logo = <HTMLDivElement>document.createElement('div');
    logo.className = 'header__logo';
    head.className = 'header';
    container.appendChild(logo);
    container.appendChild(this.basketEl());
    this.countIncrement();
    this.basketEndCount();
    head.append(container);
    return head;
  }
}

export default Header;
