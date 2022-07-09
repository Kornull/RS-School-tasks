class Footer {
  createFooter(): HTMLElement {
    const footer = <HTMLElement>document.createElement('footer');
    footer.className = 'footer';
    return footer;
  }
}

export default Footer;
