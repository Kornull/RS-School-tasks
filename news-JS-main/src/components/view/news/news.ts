import './news.css';
import { GetContentNews } from '../../types/index';

class News {
  public draw(data: GetContentNews[]): void {
    const news: GetContentNews[] = data.length >= 10 ? data.filter((_item: object, idx: number) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
    news.forEach((item, idx: number): void => {
      const newsClone = newsItemTemp.content.cloneNode(true) as Element;
      if (idx % 2) (<HTMLElement>newsClone.querySelector('.news__item')).classList.add('alt');

      (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (<HTMLElement>newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
      (<HTMLElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
      (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
      (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
      (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

      fragment.append(newsClone);
    });
    const newsBlock = document.querySelector('.news') as HTMLDivElement;
    newsBlock.innerHTML = '';
    newsBlock.appendChild(fragment);
  }
}

export default News;
