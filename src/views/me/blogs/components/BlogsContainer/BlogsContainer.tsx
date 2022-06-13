/* eslint-disable react/jsx-props-no-spreading */
import type {
  DraftBlog as DraftBlogType,
  PublishedBlog as PublishedBlogType,
} from '../../types';
import { DraftBlog, PublishedBlog } from './components';
import styles from './blogsContainer.module.scss';

type PropsType = {
  blogs: (PublishedBlogType | DraftBlogType)[];
};

export default function BlogsContainer({ blogs }: PropsType) {
  return (
    <div className={styles['blogs-container']}>
      {blogs.map((blog: DraftBlogType | PublishedBlogType) => (
        'publishedAt' in blog
          ? <PublishedBlog {...blog} />
          : <DraftBlog {...blog} />
      ))}
    </div>
  );
}
