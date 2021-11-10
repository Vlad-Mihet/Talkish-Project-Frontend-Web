import Layout from 'src/layout/components/Layout';
import { Blog } from '../../components';
import useFetchData from '../../hooks/useFetchData';
import { Endpoints } from '../../config';
import type { Blog as BlogType } from '../../types';

export default function Home(): JSX.Element {
  // Fetch all blog data here
  const fetchAllBlogsUrl = Endpoints.ROOT + '/' + Endpoints.BLOGS;

  const { data, loading, error } = useFetchData(fetchAllBlogsUrl);

  /*
    TODO:
      Banner Component for errors
  */

  if (error) {
    console.log(error);
  }

  return (
    <Layout>
      {loading
        ? (<span>Loading data...</span>)
        : (
          <div>
            {data && data.map((blog: BlogType) => (
              <Blog
                key={blog.blogId}
                blogId={blog.blogId}
                title={blog.title}
                content={blog.content}
                authorId={blog.authorId}
                authorName={blog.author.authorName}
              />
            ))}
          </div>
        )}
    </Layout>
  )
}
