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
import { Navigate, useLocation } from 'react-router';
import isAuthenticated from './utils/isAuthenticated';

function AuthRequiredRoute({ children }: { children: JSX.Element }): JSX.Element {
  const location = useLocation();
  const isUserAuthenticated = isAuthenticated();

  return (
    isUserAuthenticated ? (
      children
    ) : (
      <Navigate to={`/${Paths.AUTH}/${Paths.LOGIN}`} state={{ from: location }} replace />
    )
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={Paths.ROOT} element={<Home />} />
        <Route path={Paths.BLOGS}>
          <Route path={Paths.BLOG} element={<Blog />} />
        </Route>
        <Route
          path={Paths.WRITE_STORY}
          element={(
            <AuthRequiredRoute>
              <WriteStory />
            </AuthRequiredRoute>
          )}
        />
        <Route path={Paths.AUTH}>
          <Route path={Paths.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
