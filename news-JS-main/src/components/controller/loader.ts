import { Key, Callback, IResponseLoader } from '../types/index';

enum HandlerError {
  Error_401 = 401,
  Error_404 = 404,
}
class Loader {
  private readonly options: Key;
  private readonly baseLink: string;
  constructor(
    baseLink: string,
    options: {
      apiKey: string;
    }
  ) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp<T>(
    { endpoint, options }: Pick<IResponseLoader, 'endpoint' | 'options'>,
    callback: Callback<T> = (): void => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  protected errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === HandlerError.Error_401 || res.status === HandlerError.Error_404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  protected makeUrl(options: object, endpoint: string) {
    const urlOptions: Key = {
      ...this.options,
      ...options,
    };
    let url = `${this.baseLink}${endpoint}?` as string;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  protected load<T>(method: 'GET' | 'POST', endpoint: string, callback: Callback<T>, options: Key = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
