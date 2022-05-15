import { useNavigate } from 'react-router-dom';
import useFetchData from 'src/hooks/useFetchData';
import { useEffect } from 'react';
import { Endpoints } from 'src/config/endpoints';
import { Paths } from '../../../routes';
import styles from './recommendedTopics.module.scss';
import { Topic } from '../../../types/models';

const fetchAllTopicsUrl = `${Endpoints.ROOT}/${Endpoints.TOPICS}`;

export default function RecommendedTopics() {
  const navigateTo = useNavigate();

  const navigateToTopic = (topicId: number): void => navigateTo(`${Paths.BLOGS}?topic=${topicId}`);

  const {
    data: topics,
    loading,
    error,
  } = useFetchData(fetchAllTopicsUrl);

  useEffect(() => {
    console.log(topics);

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
      {topics && !error && (
        <div className={styles.topics}>
          {topics.map(({
            topicId: id,
            topicName: name,
          }: Topic) => (
            <span
              key={id}
              className={styles.topic}
              tabIndex={id}
              role="button"
              onClick={() => navigateToTopic(id)}
              onKeyDown={() => navigateToTopic(id)}
            >
              {name}
            </span>
          ))}
        </div>
      )}
      {!!error && (
        <p>There was an error loading the data.</p>
      )}
    </div>
  );
}
