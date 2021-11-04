import Layout from "src/layout/components/Layout";
import useFetchBlogData from './hooks/useFetchBlogData';
import { useParams } from 'react-router-dom';
import styles from './blog.module.scss'

export default function Blog(): JSX.Element {
  const { blogId } = useParams(); 

  // Fetch specific blog data
  const { blog, loading, error } = useFetchBlogData(parseInt(blogId));

  if (error) {
    console.error(error);
  }

  return (
    <Layout>
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
    </Layout>
  )
}
