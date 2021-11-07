import type { Blog as BlogType } from '../../types';
import getBlogContentPreview from './helpers/getBlogContentPreview';
import getReadingTime from './helpers/getReadingTime';
import styles from './blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../routes';

type BlogProps = Omit<BlogType, 'author'> & {
  authorName: string,
}

export default function Blog(props: BlogProps): JSX.Element {
  const navigate = useNavigate();

  const {
    title,
    content,
    authorName,
    blogId,
  } = props;

  const handleViewBlog = () => navigate(Paths.ROOT + Paths.BLOGS + '/' + blogId);

  return (
    <div className={styles.blog}>
      <span className={styles.blog__author}>
        Written by <span>{authorName}</span>
      </span>
      <div onClick={handleViewBlog}>
      <h2>{title}</h2>
      <h3>{getBlogContentPreview(content)}</h3>
      </div>
      <span className={styles['blog__reading-time']}>
        {getReadingTime(content)} min read
      </span>
    </div>
  )
}
