import News from './news/news';
import Sources from './sources/sources';
import { IContentNews, IContentSources, GetContentNews, GetSources } from '../types/index';
export class AppView {
  news: News;
  sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IContentNews) {
    const values: GetContentNews[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IContentSources) {
    console.log(data);
    const values: GetSources[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
