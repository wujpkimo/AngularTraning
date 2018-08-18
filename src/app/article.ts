export interface Articles {
  articles: Article[];
}

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: any[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

interface Author {
  username: string;
  bio?: any;
  image: string;
  following: boolean;
}
