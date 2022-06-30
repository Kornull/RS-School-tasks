export interface IGetContentNews {
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
}

export type GetSources = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};

export interface IViewContentNews {
  articles: IGetContentNews[];
  status: string;
  totalResults: number;
}
