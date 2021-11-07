export interface Author {
  authorId: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Blog {
  blogId: number;
  title: string;
  content: string;
  authorId: number;
  author: Author;
}