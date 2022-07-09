import Header from './header/header';
import Footer from './footer/footer';

const h: Header = new Header();
const f: Footer = new Footer();
// h.Head();
const body = <HTMLBodyElement>document.querySelector('body');
const wrapper = <HTMLDivElement>document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);
wrapper.appendChild(h.Head());
wrapper.appendChild(f.createFooter());
