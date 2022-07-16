import './global.scss';
import './index.html';
import Main from './components/app/main';

const main = new Main();
main.createHtml();
main.localStore();
