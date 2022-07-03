import News from './news/news';
import Sources from './sources/sources';
import { IContentNews, GetContentNews, GetSources } from '../types/index';
export class AppView {
  protected news: News;
  protected sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Partial<IContentNews>): void {
    const values: GetContentNews[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: Partial<IContentNews>): void {
    const values: GetSources[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
