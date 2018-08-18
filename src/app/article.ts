export interface Article {
  title: string;
  description: string;
  favoritesCount: number;
  createdAt: Date;
  author: Author;
}

class Author {
  username: string;
}
