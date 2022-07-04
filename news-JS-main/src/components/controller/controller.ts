import AppLoader from './appLoader';
import { IContentNews, Callback } from '../types';

enum Endpoint {
  endpointSource = 'sources',
  endpointEverything = 'everything',
}
class AppController extends AppLoader {
  public getSources(callback: Callback<IContentNews>): void {
    super.getResp(
      {
        endpoint: Endpoint.endpointSource,
      },
      callback
    );
  }

  public getNews(e: MouseEvent, callback: Callback<IContentNews>): void {
    let target = e.target as HTMLDivElement;
    const newsContainer = e.currentTarget as HTMLDivElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoint.endpointEverything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLDivElement;
    }
  }
}

export default AppController;
