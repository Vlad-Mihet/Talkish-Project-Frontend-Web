import { useNavigate } from 'react-router-dom';
import useFetchData from 'src/hooks/useAxiosRequest';
import { useEffect } from 'react';
import { Endpoints } from 'src/config/endpoints';
import { Paths } from '../../../../../routes';
import styles from './recommendedTopics.module.scss';
import { Topic } from '../../../../../types/models';

const fetchAllTopicsUrl = `${Endpoints.ROOT}/${Endpoints.TOPICS}`;

export default function RecommendedTopics() {
  const navigateTo = useNavigate();

  const navigateToTopic = (topicId: number): void => navigateTo(`${Paths.ROOT}/${Paths.TOPICS}/${topicId}`);

  const {
    data: topics,
    loading,
    error,
  } = useFetchData(fetchAllTopicsUrl);

  useEffect(() => {
    if (!loading && error) {
      console.error(`There was an issue: ${error}`);
    }
  }, [loading, error]);

  return (
    <div className={styles.recommendedTopics}>
      <h4>Recommended Topics</h4>
      {!!loading && (
        <p>Loading Data...</p>
      )}
      {topics && !error ? (
        <div className={styles.topics}>
          {topics.map(({ topicId, topicName }: Topic) => (
            <span
              key={topicId}
              tabIndex={topicId}
              role="button"
              className={styles.topic}
              onClick={() => navigateToTopic(topicId)}
              onKeyDown={() => navigateToTopic(topicId)}
            >
              {topicName}
            </span>
          ))}
        </div>
      ) : (
        <p>There was an error loading the data.</p>
      )}
    </div>
  );
}
