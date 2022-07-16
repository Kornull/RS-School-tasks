import Container from '../viev/container/container';
import Products from '../controller/products/product';
import Search from '../controller/search/search';
import Header from '../viev/header/header';
import Footer from '../viev/footer/footer';
import { LocalStor } from '../controller/storage/storage';
import SortedCard from '../controller/sorted';

class Main {
  local: LocalStor;
  sort: SortedCard;
  product: Products;
  search: Search;
  container: Container;
  header: Header;
  footer: Footer;
  body: HTMLBodyElement;

  constructor() {
    this.local = new LocalStor();
    this.sort = new SortedCard();
    this.container = new Container();
    this.product = new Products();
    this.search = new Search();
    this.header = new Header();
    this.footer = new Footer();
    this.body = <HTMLBodyElement>document.querySelector('body');
  }
  create() {
    const main = document.createElement('main');
    main.className = 'main';
    const containerElements = this.container.createContainer();
    containerElements.className = 'main__container container';
    containerElements.appendChild(this.search.create());
    containerElements.appendChild(this.product.create());
    // this.search.runSearch();
    main.appendChild(containerElements);
    return main;
  }
  createHtml() {
    if (this.local.get('CountSortedGet').length === 0) {
      this.local.set('CountSortedGet', ['1']);
      setTimeout(() => {
        this.local.set('CountSortedGet', []);
      }, 1500);
    }
    this.body.appendChild(this.header.create());
    this.body.append(this.create());
    this.body.appendChild(this.footer.create());
  }
  localStore() {
    this.sort.newSortArr();
  }
}

export default Main;
