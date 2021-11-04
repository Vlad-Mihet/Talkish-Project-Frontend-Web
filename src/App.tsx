import './assets/styles/main.scss';
import Home from './views/home/Home';
import { Paths } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.ROOT} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
