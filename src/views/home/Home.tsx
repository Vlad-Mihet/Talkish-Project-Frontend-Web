import Layout from 'src/layout/components/Layout';
import { Blog } from '../../components';
import useFetchBlogs from './hooks/useFetchBlogs';

export default function Home(): JSX.Element {
  // Fetch all blog data here
  const { blogs, loading, error } = useFetchBlogs();

  console.log(blogs);

  if (error) {
    console.log(error);
  }

  return (
    <Layout>
      {loading
        ? (<span>Loading data...</span>)
        : (
          <div>
            {blogs.map((blog) => (
              <Blog
                key={blog.blogId}
                blogId={blog.authorId}
                title={blog.title}
                content={blog.content}
                authorId={blog.authorId}
                authorName={`${blog.author.firstName} ${blog.author.lastName}`}
              />
            ))}
          </div>
        )}
    </Layout>
  )
}
