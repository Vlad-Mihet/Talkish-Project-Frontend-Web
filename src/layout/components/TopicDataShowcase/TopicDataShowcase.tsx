import styles from './topicDataShowcase.module.scss';
import prettifyStoryStatNum from './utils/prettifyStoryStatNum';

interface TopicDataShowcaseProps {
  numberOfStories: number;
  numberOfAuthors: number;
}

export default function TopicDataShowcase({
  numberOfStories,
  numberOfAuthors,
}: TopicDataShowcaseProps) {
  return (
    <div className={styles['stats-container']}>
      <div className={styles.stories}>
        <h4>Stories</h4>
        <span>{prettifyStoryStatNum(numberOfStories)}</span>
      </div>
      <div className={styles.authors}>
        <h4>Authors</h4>
        <span>{prettifyStoryStatNum(numberOfAuthors)}</span>
      </div>
    </div>
  );
}
