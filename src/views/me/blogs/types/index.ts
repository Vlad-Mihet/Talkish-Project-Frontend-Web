export type PublishedBlog = {
  title: string;
  content: string;
  publishedAt: string | Date;
  readingTime: string | number;
  // Will need to add publication (Backend change)
};

export type DraftBlog = {
  title: string;
  content: string;
  readingTime: string | number;
  // Will need to add lastEditedAt (Backend change)*/
  // Will need to add number of words (Backend change)
};
