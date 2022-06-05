export interface AuthorWithBlogs {
  authorId: number;
  firstName: string;
  lastName: string;
  blogs: Blog[];
}

export interface BlogAuthor {
  authorId: number;
  authorName: string;
}

export interface Author {
  authorId: number;
  firstName: string;
  lastName: string;
  email: string;
  /* Will also receive email & bio */
}

export interface BlogWithAuthor {
  blogId: number;
  title: string;
  content: string;
  readingTime: number;
  topics: Topic[];
  author: BlogAuthor;
}

export interface Blog {
  blogId: number;
  title: string;
  content: string;
  readingTime: number;
  topics: Topic[]
}

export interface Topic {
  topicId: number;
  topicName: string;
}

export interface Publication {
  publicationId: number;
  name: string;
  owner: Author;
}

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  authorId: string;
}
