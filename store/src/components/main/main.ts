import Container from '../container/container';

class Main extends Container {
  constructor() {
    super();
    this.createContainer();
  }
  mainCreate() {
    const main = document.createElement('main');
    main.className = 'main';
    main.appendChild(this.createContainer());
    return main;
  }
}

export default Main;
