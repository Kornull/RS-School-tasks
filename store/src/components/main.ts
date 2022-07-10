import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

const h: Header = new Header();
const main = new Main();
const f: Footer = new Footer();
const body = <HTMLBodyElement>document.querySelector('body');
body.appendChild(h.create());
body.append(main.create());
body.appendChild(f.create());
