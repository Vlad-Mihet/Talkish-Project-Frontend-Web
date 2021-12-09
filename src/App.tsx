import './assets/styles/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Paths } from './routes';

import {
  Home,
  Blog,
  WriteStory,
} from './views';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={Paths.ROOT} element={<Home />} />
        <Route path={Paths.BLOG} element={<Blog />} />
        <Route path={Paths.WRITE_STORY} element={<WriteStory />} />
      </Routes>
    </Router>
  );
}

export default App;
