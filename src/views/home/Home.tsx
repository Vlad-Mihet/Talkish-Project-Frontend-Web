import { Suspense, useEffect } from 'react';
import Layout from 'src/layout/components/Layout';
import { Blog } from '../../components';
import Sidebar from '../../layout/components/Sidebar';
import useFetchData from '../../hooks/useFetchData';
import { Endpoints } from '../../config';
import type { BlogWithAuthor as BlogType } from '../../types';
import RecommendedTopics from '../../layout/components/RecommendedTopics';
import RecommendedAuthors from '../../layout/components/RecommendedAuthors';

export default function Home(): JSX.Element {
  // Fetch all blog data here
  const fetchAllBlogsUrl = Endpoints.ROOT + '/' + Endpoints.BLOGS;

  const {
    data: blogs,
    loading: blogsLoading,
    error: blogsError,
  } = useFetchData(fetchAllBlogsUrl);

  /*
    TODO:
      Banner Component for errors
  */

  useEffect(() => {
    if (!blogsLoading && blogsError) {
      console.error(`There was an issue: ${blogsError}`);
    }
  }, [blogsLoading, blogsError]);

  return (
    <Layout
      sidebar={
        <Sidebar
          topSection={
            <Suspense fallback={<p>Loading Data...</p>}>
              <RecommendedTopics />
            </Suspense>
          }
          middleSection={
            <Suspense fallback={<p>Loading Data...</p>}>
              <RecommendedAuthors />
            </Suspense>
          }
        />
      }
    >
      {blogsLoading
        ? (<span>Loading data...</span>)
        : (
          <div>
            {blogs && blogs.map((blog: BlogType) => (
              <Blog
                key={blog.blogId}
                blogId={blog.blogId}
                title={blog.title}
                content={blog.content}
                topics={blog.topics}
                readingTime={blog.readingTime}
                authorId={blog.author.authorId}
                authorName={blog.author.authorName}
              />
            ))}
          </div>
        )}
    </Layout>
  )
}
