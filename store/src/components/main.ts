import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

const h: Header = new Header();
const main = new Main();
const f: Footer = new Footer();

// const main: HTMLElement = this.mainCreate();
// h.Head();
const body = <HTMLBodyElement>document.querySelector('body');
// const wrapper = <HTMLDivElement>document.createElement('div');
// wrapper.className = 'wrapper';
body.appendChild(h.Head());
body.append(main.mainCreate());
body.appendChild(f.createFooter());
