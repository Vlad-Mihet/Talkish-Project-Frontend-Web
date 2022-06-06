/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unstable-nested-components */
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
import { useLocation, useNavigate } from 'react-router';
import Register from './views/register';
import useAuthUser from './hooks/useAuthUser';
import { useEffect } from 'react';
import isAuthenticated from './utils/isAuthenticated';

function AuthorOnlyRoute({ children }: { children: JSX.Element }): JSX.Element {
  const location = useLocation();
  const authUser = useAuthUser();
  const navigate = useNavigate();

  const isAuth = isAuthenticated();

  useEffect(() => {
    // Ensure that the user is actually authenticated
    if (!isAuth) {
      navigate(`/${Paths.AUTH}/${Paths.LOGIN}`, {
        replace: true,
        state: {
          from: location,
        },
      });
    }

    // Ensure that the user has been loaded & that the user has an authorId that isn't nullish (!=0)
    if (authUser.authorId !== '' && !authUser.authorId) {
      navigate('/', {
        replace: true,
        state: {
          from: location,
        },
      });
    }
  }, [authUser]);

  return children;
}

/* function AuthRequiredRoute({ children }: { children: JSX.Element }): JSX.Element {
  const location = useLocation();
  const isUserAuthenticated = isAuthenticated();

  if (!isUserAuthenticated) {
    return (
      <Navigate
        to={`/${Paths.AUTH}/${Paths.LOGIN}`}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
} */

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
            <AuthorOnlyRoute>
              <WriteStory />
            </AuthorOnlyRoute>
          )}
        />
        <Route path={Paths.AUTH}>
          <Route path={Paths.LOGIN} element={<Login />} />
          <Route path={Paths.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
