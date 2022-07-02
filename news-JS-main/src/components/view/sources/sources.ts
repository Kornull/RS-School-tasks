import './sources.css';
import { GetSources } from '../../types/index';
class Sources {
  public draw(data: GetSources[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item): void => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

      (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLTemplateElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    const newsBtn = document.querySelector('.sources') as HTMLDivElement;
    newsBtn.append(fragment);
  }
}

export default Sources;
