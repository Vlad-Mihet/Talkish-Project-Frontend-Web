import type { Blog as BlogType } from '../../types';
import getBlogContentPreview from './utils/getBlogContentPreview';
import styles from './blog.module.scss';

export default function Blog(props: BlogType) {
  const {
    blogId,
    title,
    content,
    authorName,
  } = props;

  return (
    <div
      className={styles.blog}
      key={blogId}
    >
      <h3>{title}</h3>
      <p>{getBlogContentPreview(content)}</p>
      <span>Written by {authorName}</span>
    </div>
  )
}
