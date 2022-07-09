import Container from '../container/container';
import Products from './products/product';
import Search from './search/search';

class Main {
  product: Products;
  search: Search;
  container: Container;
  constructor() {
    this.container = new Container();
    this.product = new Products();
    this.search = new Search();
  }
  create() {
    const main = document.createElement('main');
    main.className = 'main';
    const containerElements = this.container.createContainer();
    containerElements.className = 'main__container container';
    containerElements.appendChild(this.search.create());
    containerElements.appendChild(this.product.create());
    main.appendChild(containerElements);
    return main;
  }
}

export default Main;
