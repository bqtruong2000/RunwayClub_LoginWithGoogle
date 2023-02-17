// import { Articles } from './article.model';

// export interface News {
//   status: string;
//   totalResults: number;
//   articles: Array<Articles>;
// }

export interface News {
  type_of: string;
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: string;
}
