export type GetContentNews = {
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  author?: string;
  content?: string;
  urlToImage?: string;
};

export type GetSources = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};

export interface IContentNews {
  articles: GetContentNews[];
  status: string;
  totalResults: number;
}

export interface IContentSources {
  status: string;
  sources: GetSources[];
}

export type Key = {
  [key: string]: string;
};
export type Callback<T> = (data: T) => void;

export interface IResponseLoader {
  endpoint: string;
  options?: { sources: string };
}
