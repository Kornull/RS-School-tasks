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
