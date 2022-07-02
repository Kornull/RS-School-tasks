import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'f21d06b428c744a394db30ad64757c8a', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
