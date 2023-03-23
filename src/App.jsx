import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header/Header.jsx';
import ActivityPage from './pages/ActivityPage/ActivityPage.jsx';
import ActivityDetailPage from './pages/ActivityDetailPage/ActivityDetailPage.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/detail">detail</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/detail" element={<ActivityDetailPage />} />
              <Route path="/" element={<ActivityPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
