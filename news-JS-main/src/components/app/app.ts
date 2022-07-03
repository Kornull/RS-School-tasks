import AppController from '../controller/controller';
import { IContentNews } from '../types';
import AppView from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const el = document.querySelector('.sources') as HTMLElement | null;
    if (el !== null)
      el.addEventListener('click', (e: MouseEvent) =>
        this.controller.getNews(e, (data: Partial<IContentNews>) => {
          this.view.drawNews(data);
        })
      );
    this.controller.getSources((data: Partial<IContentNews>) => {
      this.view.drawSources(data);
    });
  }
}

export default App;
