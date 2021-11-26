import Layout from 'src/layout/components/Layout';
import { Blog } from '../../components';
import Sidebar from '../../layout/components/Sidebar';
import RecommendedTopics from '../../layout/components/RecommendedTopics';
import useFetchData from '../../hooks/useFetchData';
import { Endpoints } from '../../config';
import type { BlogWithAuthor as BlogType } from '../../types';
import { Suspense, useEffect } from 'react';

export default function Home(): JSX.Element {
  // Fetch all blog data here
  const fetchAllBlogsUrl = Endpoints.ROOT + '/' + Endpoints.BLOGS;
  const fetchAllTopicsUrl = Endpoints.ROOT + '/' + Endpoints.TOPICS;

  const {
    data: blogs,
    loading: blogsLoading,
    error: blogsError,
  } = useFetchData(fetchAllBlogsUrl);

  const {
    data: topics,
    loading: topicsLoading,
    error: topicsError,
  } = useFetchData(fetchAllTopicsUrl);

  /*
    TODO:
      Banner Component for errors
  */

  useEffect(() => {
    if (!blogsLoading && blogsError) {
      console.error(`There was an issue: ${blogsError}`);
    }
  }, [blogsLoading, blogsError]);

  useEffect(() => {
    if (!topicsLoading && topicsError) {
      console.error(`There was an issue: ${topicsError}`);
    }
  }, [topicsLoading, topicsError])

  return (
    <Layout
      sidebar={
        <Sidebar
          topSection={
            <Suspense fallback={<p>Loading Recommended Topics...</p>}>
              <RecommendedTopics
                topics={topics}
              />
            </Suspense>
          }
          middleSection={<div>This is the middle</div>}
          bottomSection={<div>This is the bottom</div>}
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
