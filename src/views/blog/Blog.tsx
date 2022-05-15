import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import styles from './blog.module.scss';
import { Endpoints } from '../../config';
import Layout from '../../layout/Layout';
import { AuthorHeader, OptionsToolbar, SidebarAuthorOverview } from './components';
import { Sidebar } from '../../layout/components';
import { useEffect, useRef, useState } from 'react';
import hasReachedEndOfBlogContent from './utils/hasReachedEndOfBlogContent';

export default function Blog(): JSX.Element {
  const [isAtEndOfArticle, setIsAtEndOfArticle] = useState(false);

  const blogContainerRef = useRef<HTMLDivElement | null>(null);
  const blogContentRef = useRef<HTMLDivElement | null>(null);

  const { blogId } = useParams();

  const fetchBlogByIdUrl = `${Endpoints.ROOT}/${Endpoints.BLOGS}/${blogId}`;

  const { data: blog, loading, error } = useFetchData(fetchBlogByIdUrl);

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    const layoutContainerElm = blogContainerRef.current?.parentElement;
    const blogContentElm = blogContentRef.current;

    const handleHasReachedEndOfBlogContent = () => {
      if (!layoutContainerElm || !blogContentElm) return;

      // eslint-disable-next-line max-len
      const isReachingEndOfArticleContent = hasReachedEndOfBlogContent(layoutContainerElm, blogContentElm);

      setIsAtEndOfArticle(isReachingEndOfArticleContent);
    };

    if (layoutContainerElm && blogContentElm) {
      layoutContainerElm.addEventListener('scroll', handleHasReachedEndOfBlogContent);
    }

    return () => {
      if (layoutContainerElm && blogContentElm) {
        layoutContainerElm.removeEventListener('scroll', handleHasReachedEndOfBlogContent);
      }
    };
  }, [blogContainerRef, blogContentRef, loading]);

  return (
    <Layout
      sidebar={(
        <Sidebar
          topSection={
            blog?.author?.authorId && (
              <SidebarAuthorOverview authorId={blog?.author?.authorId} />
            )
          }
        />
      )}
    >
      {loading || !blog
        ? (<span>Loading Blog Data...</span>)
        : (
          <div
            ref={blogContainerRef}
            className={styles.blog}
          >
            <AuthorHeader
              articlePublishDate={blog.publishedAt}
              authorFirstName={blog.author.authorName.split(' ')[0]}
              authorLastName={blog.author.authorName.split(' ')[1]}
              articleReadingTime={blog.readingTime}
            />
            <div className={styles['blog-content-wrapper']}>
              <h1 className={styles['blog-title']}>{blog.title}</h1>
              <div
                ref={blogContentRef}
                className={`${styles['blog-content']} ${!isAtEndOfArticle ? styles['is-toolbar-floating'] : ''}`}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
            <OptionsToolbar
              isAtEndOfArticle={isAtEndOfArticle}
            />
          </div>
        )}
    </Layout>
  );
}
