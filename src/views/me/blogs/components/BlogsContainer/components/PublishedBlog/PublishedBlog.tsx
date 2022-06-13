import type { PublishedBlog as PublishedBlogProps } from '../../../../types';
import styles from './draftBlog.module.scss';

export default function PublishedBlog({
  content,
  title,
  readingTime,
  publishedAt,
}: PublishedBlogProps) {
  return (
    <div className={styles['published-blog']}>
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.content}>
        {content}
      </p>
      <div className={styles['additional-info-section']}>
        <span className={styles['published-at']}>
          {publishedAt}
        </span>
        <span className={styles['readint-time']}>
          {readingTime}
          {' '}
          min read
        </span>
      </div>
    </div>
  );
}
