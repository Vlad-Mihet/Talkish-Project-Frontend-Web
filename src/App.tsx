import { useEffect } from 'react';
import clearHomepageBlogsCache from './utils/clearHomepageBlogsCache';
import './assets/styles/main.scss';
import { Paths } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  Home,
  Blog,
} from './views';

function App() {
  useEffect(() => {
    const timer = clearHomepageBlogsCache();

    // Clear timer on unmount
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={Paths.ROOT} element={<Home />} />
        <Route path={Paths.BLOG} element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
