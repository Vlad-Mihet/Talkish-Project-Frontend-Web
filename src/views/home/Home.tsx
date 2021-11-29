import { Suspense } from 'react';
import Layout from 'src/layout/Layout';
import Sidebar from '../../layout/components/Sidebar';
import {
  RecommendedTopics, RecommendedAuthors, TopicDataShowcase
} from '../../layout/components';
import { BlogsContainer } from './components'

export default function Home(): JSX.Element {
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
          bottomSection={
            <Suspense fallback={<p>Loading Data...</p>}>
              <TopicDataShowcase
                numberOfAuthors={32151}
                numberOfStories={534263}
              />
            </Suspense>
          }
        />
      }
    >
      <Suspense fallback={<p>Loading Data...</p>}>
        <BlogsContainer />
      </Suspense>
    </Layout>
  )
}
