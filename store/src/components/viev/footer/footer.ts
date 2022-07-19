import Container from '../container/container';

class Footer extends Container {
  constructor() {
    super();
  }
  public create(): HTMLElement {
    const container = this.createContainer();
    container.className = 'footer__container';
    const footer = <HTMLElement>document.createElement('footer');
    footer.className = 'footer';
    const logo = document.createElement('a');
    logo.className = 'footer__logo';
    logo.href = 'https://rs.school/js/';
    const git = document.createElement('a');
    git.href = 'https://github.com/Kornull';
    git.className = 'footer__git';
    const descr = document.createElement('div');
    descr.className = 'footer__descr';
    descr.innerText = '2022';
    container.appendChild(git);
    container.appendChild(descr);
    container.appendChild(logo);
    footer.appendChild(container);
    return footer;
  }
}

export default Footer;
