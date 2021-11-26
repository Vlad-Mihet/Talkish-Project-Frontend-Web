import type { BlogWithAuthor as BlogType } from '../../types';
import getBlogContentPreview from './helpers/getBlogContentPreview';
import styles from './blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../routes';

type BlogProps = Omit<BlogType, 'author'> & {
  authorId: number;
  authorName: string;
} 

export default function Blog(props: BlogProps): JSX.Element {
  const navigate = useNavigate();

  const {
    title,
    content,
    authorName,
    readingTime,
    topics,
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
      <div className={styles['blog__bottom-row']}>
        <span className={styles['blog__reading-time']}>
          {readingTime} min read
        </span>
        <div className={styles['blog__topics-container']}>
          {topics.map((topic) => (
            <span
              className={styles['topic']}
              key={topic.topicId}
            >
              {topic.topicName}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
