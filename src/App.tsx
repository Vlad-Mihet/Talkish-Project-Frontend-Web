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
import Login from './views/login';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={Paths.ROOT} element={<Home />} />
        <Route path={Paths.BLOGS}>
          <Route path={Paths.BLOG} element={<Blog />} />
        </Route>
        <Route path={Paths.WRITE_STORY} element={<WriteStory />} />
        <Route path={Paths.AUTH}>
          <Route path={Paths.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
