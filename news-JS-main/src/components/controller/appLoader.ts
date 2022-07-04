import Loader from './loader';
import { url, key } from '../content/contents';

class AppLoader extends Loader {
  constructor() {
    super(url, key);
  }
}

export default AppLoader;
