import Container from '../viev/container/container';
import Products from '../controller/products/product';
import Search from '../viev/search/search';
import Header from '../viev/header/header';
import Footer from '../viev/footer/footer';
import { LocalStor } from '../controller/storage/storage';
import SortedCard from '../controller/sorted';

class Main {
  private local: LocalStor;
  private sort: SortedCard;
  private product: Products;
  private search: Search;
  private container: Container;
  private header: Header;
  private footer: Footer;
  private body: HTMLBodyElement;

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
  private create() {
    const main: HTMLElement = document.createElement('main');
    main.className = 'main';
    const containerElements: HTMLDivElement = this.container.createContainer();
    containerElements.className = 'main__container container';
    containerElements.appendChild(this.search.create());
    containerElements.appendChild(this.product.create());
    main.appendChild(containerElements);
    return main;
  }
  public createHtml() {
    if (this.local.get('UiSliderCallbackYears').length === 0) {
      this.local.set('UiSliderCallbackYears', [2019, 2022.5]);
      this.local.set('CountSortedGet', ['5']);
    }
    if (this.local.get('UiSliderCallbackStock').length === 0) {
      this.local.set('UiSliderCallbackStock', [1, 16.5]);
      this.local.set('CountSortedGet', ['6']);
    }
    if (this.local.get('ListValue').length === 0) {
      this.local.set('ListValue', [1]);
    }
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
  public localStore() {
    this.sort.newSortArr();
  }
}

export default Main;
