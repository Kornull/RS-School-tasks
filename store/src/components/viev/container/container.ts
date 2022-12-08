class Container {
  createContainer() {
    const container = <HTMLDivElement>document.createElement('div');
    container.className = 'container';
    return container;
  }
}

export default Container;
