import useFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import styles from './blog.module.scss'
import { Endpoints } from '../../config'; 

export default function Blog(): JSX.Element {
  const { blogId } = useParams();

  const fetchBlogByIdUrl = Endpoints.ROOT + '/' + Endpoints.BLOGS + '/' + blogId;

  const { data: blog, loading, error } = useFetchData(fetchBlogByIdUrl);

  if (error) {
    console.error(error);
  }

  return (
    <div className={styles.blog}>
      {loading || !blog
        ? (<span>Loading Blog Data...</span>)
        : (
          <div>
            <h1>{blog.title}</h1>
          </div>
        )
      }
    </div>
  )
}
