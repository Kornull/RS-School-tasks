export interface GetContentNews {
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
