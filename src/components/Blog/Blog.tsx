import type { Blog as BlogType } from '../../types';
import getBlogContentPreview from './helpers/getBlogContentPreview';
import getReadingTime from './helpers/getReadingTime';
import styles from './blog.module.scss';

type BlogProps = Omit<BlogType, 'author'> & {
  authorName: string,
}

export default function Blog(props: BlogProps) {
  const {
    title,
    content,
    authorName,
  } = props;

  return (
    <div className={styles.blog}>
      <span className={styles.blog__author}>
        Written by <span>{authorName}</span>
      </span>
      <h2>{title}</h2>
      <h3>{getBlogContentPreview(content)}</h3>
      <span className={styles['blog__reading-time']}>
        {getReadingTime(content)} min read
      </span>
    </div>
  )
}
