import { Topic } from '../../../../../types/models';
import styles from './recommendedTopics.module.scss';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../../../routes';
import useFetchData from 'src/hooks/useFetchData';
import { useEffect } from 'react';
import { Endpoints } from 'src/config/endpoints';

const fetchAllTopicsUrl = Endpoints.ROOT + '/' + Endpoints.TOPICS;

export default function RecommendedTopics() {
  const navigateTo = useNavigate();

  const navigateToTopic = (topicId: number): void =>
    navigateTo(`${Paths.ROOT}/${Paths.TOPICS}/${topicId}`);

  const {
    data: topics,
    loading,
    error,
  } = useFetchData(fetchAllTopicsUrl);

  useEffect(() => {
    if (!loading && error) {
      console.error(`There was an issue: ${error}`);
    }
  }, [loading, error])
  
  return (
    <div className={styles.recommendedTopics}>
      <h4>Recommended Topics</h4>
      {loading ? (
        <p>Loading Data...</p>
      ) : (
        topics && !error ? (
          <div className={styles.topics}>
            {topics.map((topic: Topic) => (
              <span
                key={topic.topicId}
                className={styles.topic}
                onClick={() => navigateToTopic(topic.topicId)}
              >
                {topic.topicName}
              </span>
            ))}
          </div>
        ) : (
          <p>There was an error loading the data.</p>
        )
      )}
    </div>
  )
}
