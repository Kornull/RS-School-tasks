import AppController from '../controller/controller';
import AppView from '../view/appView';

interface GetSource {
  status: string;
  sources: object[];
  totalResults?: number;
  articles?: object[];
}

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    const el = document.querySelector('.sources') as HTMLElement | null;
    if (el !== null)
      el.addEventListener('click', (e: MouseEvent) =>
        this.controller.getNews(e, (data: GetSource) => {
          this.view.drawNews(data);
        })
      );
    this.controller.getSources((data: GetSource) => {
      // console.log(data)
      this.view.drawSources(data);
    });
  }
}

export default App;

