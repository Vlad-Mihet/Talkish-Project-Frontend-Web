import { useEffect } from 'react';
import { Blog } from '../../../../components';
import { Endpoints } from '../../../../config';
import type { BlogWithAuthor as BlogType } from '../../../../types/models';
import useFetchData from '../../../../hooks/useFetchData';

const fetchAllBlogsUrl = `${Endpoints.ROOT}/${Endpoints.BLOGS}`;

export default function BlogsContainer() {
  const {
    data: blogs,
    loading: blogsLoading,
    error: blogsError,
  } = useFetchData(fetchAllBlogsUrl);

  useEffect(() => {
    if (!blogsLoading && blogsError) {
      console.error(`There was an issue: ${blogsError}`);
    }
  }, [blogsLoading, blogsError]);

  return (
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
  );
}
