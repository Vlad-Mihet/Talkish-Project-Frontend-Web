export interface Author {
  authorId: number;
  authorName: string;
}

export interface Blog {
  blogId: number;
  title: string;
  content: string;
  authorId: number;
  author: Author;
}