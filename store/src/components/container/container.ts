function contain(): HTMLDivElement {
  const container = <HTMLDivElement>document.createElement('div');
  container.className = 'container';
  return container;
}

export default contain();
