import type { DraftBlog as DraftBlogProps } from '../../../../types';
import styles from './draftBlog.module.scss';

export default function DraftBlog({
  content,
  title,
  readingTime,
}: DraftBlogProps) {
  return (
    <div className={styles['draft-blog']}>
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.title}>
        {content}
      </p>
      <div className={styles['additional-info-section']}>
        {/* <span className={styles['last-edited-at']}>{lastEditedAt}</span> */}
        <span className={styles['readint-time']}>
          {readingTime}
          {' '}
          min read
        </span>
      </div>
    </div>
  );
}
