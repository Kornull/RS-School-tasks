import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'f522a8c79f87426cb4ad5026d012501a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
