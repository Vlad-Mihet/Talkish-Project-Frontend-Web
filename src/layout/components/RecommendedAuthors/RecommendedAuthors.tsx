import { useEffect } from 'react';
import { CButton } from 'src/components';
import { Endpoints } from 'src/config';
import useFetchData from 'src/hooks/useFetchData';
import { Author } from '../../../types/models';
import styles from './recommendedAuthors.module.scss';

const fetchAllAuthorsUrl = Endpoints.ROOT + '/' + Endpoints.AUTHORS;

export default function RecommendedAuthors() {
  const {
    data: authors,
    loading,
    error,
  } = useFetchData(fetchAllAuthorsUrl);
  
  useEffect(() => {
    if (!loading && error) {
      console.error(`There was an issue: ${error}`);
    }
  }, [loading, error, authors])
  
  return (
    <div className={styles.recommendedAuthors}>
      <h4>You could follow</h4>
      {loading ? (
        <p>Loading Data...</p>
      ) : (
        authors && !error ? (
          <div className={styles.authors}>
            {authors.map((author: Author) => (
              <div
                key={author.authorId}
                className={styles.authorCard}
              >
                {/* <div className={styles.authorCard__avatar} /> */}
                <div className={styles.authorCard__authorInfo}>
                  <span>
                    {author.firstName + ' ' + author.lastName}
                  </span>
                </div>
                <CButton
                  color="grey"
                  size="s"
                  rounded
                >
                  <span>Follow</span>
                </CButton>
              </div>
            ))}
          </div>
        ) : (
          <p>There was an error loading the data...</p>
        )
      )}
    </div>
  )
}
