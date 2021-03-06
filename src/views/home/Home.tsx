import { Suspense } from 'react';
import Layout from 'src/layout/Layout';
import Sidebar from '../../layout/components/Sidebar';
import {
  RecommendedTopics, RecommendedAuthors,
} from '../../layout/components';
import { BlogsContainer } from './components';

export default function Home(): JSX.Element {
  return (
    <Layout
      sidebar={(
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
      )}
    >
      <Suspense fallback={<p>Loading Data...</p>}>
        <BlogsContainer />
      </Suspense>
    </Layout>
  );
}
