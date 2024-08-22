import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import Todo from './routes/Todo';
import CoinTracker from './routes/CoinTracker';
import Movies from './routes/Movies';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Detail from './routes/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));

function R() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/todo"} element={<Todo />} />
        <Route path={"/coin"} element={<CoinTracker />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movies/:id"} element={<Detail />} />
      </Routes>
    </Router>
  );
}

root.render(
    <R />
);