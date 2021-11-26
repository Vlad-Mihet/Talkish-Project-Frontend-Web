import { Topic } from '../../../types';
import styles from './recommendedTopics.module.scss';

interface RecommendedTopicsProps {
  topics: Topic[] | null;
}

export default function RecommendedTopics(props: RecommendedTopicsProps) {
  return (
    <div className={styles.recommendedTopics}>
      <h4>Recommended Topics</h4>
      {props.topics && props.topics.map((topic) => (
        <span
          key={topic.topicId}
          className={styles.topic}
        >
          {topic.topicName}
        </span>
      ))}
    </div>
  )
}
