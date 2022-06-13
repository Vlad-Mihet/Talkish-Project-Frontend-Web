import Layout from 'src/layout/Layout';
import { Outlet } from 'react-router';
import { RecommendedAuthors, RecommendedTopics, Sidebar } from 'src/layout/components';
import { Suspense, useState } from 'react';
import styles from './blogs.module.scss';
import { CButton } from 'src/components';
import { Link } from 'react-router-dom';
import { Paths } from 'src/routes';

export default function Blogs() {
  const [selectedBlogsView, setSelectedBlogsView] = useState<'drafts' | 'published'>('drafts');

  return (
    <Layout
      sidebar={
        (
          <Sidebar
            topSection={(
              <Suspense fallback={<p>Loading Data...</p>}>
                <RecommendedTopics />
              </Suspense>
            )}
            middleSection={(
              <Suspense fallback={<p>Loading Data...</p>}>
                <RecommendedAuthors />
              </Suspense>
            )}
          />
        )
      }
    >
      <div className={styles['author-blogs-view']}>
        <div>
          <div className={styles.banner}>
            <div className={styles['top-section']}>
              <h1>Your Stories</h1>
              <div className={styles['options-buttons-container']}>
                <CButton rounded>
                  Write a story
                </CButton>
              </div>
            </div>
            <div className={styles['blogs-mode-selection-container']}>
              <div className={styles['blogs-mode-selection-container__options']}>
                <div className={selectedBlogsView === 'drafts' ? styles['option--selected'] : styles.option}>
                  <Link to={Paths.DRAFTS} onClick={() => setSelectedBlogsView('drafts')}>
                    Drafts
                  </Link>
                </div>
                <div className={selectedBlogsView === 'published' ? styles['option--selected'] : styles.option}>
                  <Link to={Paths.PUBLISHED} onClick={() => setSelectedBlogsView('published')}>
                    Published
                  </Link>
                </div>
              </div>
              <div className={styles['horizontal-rule']} />
            </div>
          </div>
        </div>
        {/* Find a way to pass appropriate blogs data
          to the outlet (drafts or published blogs view) */}
        <Outlet />
      </div>
    </Layout>
  );
}
