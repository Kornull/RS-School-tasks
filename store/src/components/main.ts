import Header from './header/header';

const h: Header = new Header();
// h.Head();
const body = <HTMLBodyElement>document.querySelector('body');
const wrapper = <HTMLDivElement>document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);
wrapper.appendChild(h.Head());
