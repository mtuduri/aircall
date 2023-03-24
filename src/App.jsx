import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header/Header.jsx';
import ActivityDetailPage from './pages/ActivityDetailPage/ActivityDetailPage.jsx';
import ActivityPage from './pages/ActivityPage/ActivityPage.jsx';
import ArchivedPage from './pages/ArchivedPage/ArchivedPage.jsx';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, ContainerView } from './App.styles.jsx';

const App = () => {
  return (
    <Container>
      <Header />
      <ContainerView>
        <Router>
          <div>
            <Link to="/">Activity</Link>
            <Link to="/archived">Archived</Link>
          </div>
          <Routes>
            <Route path="/activity/:id" element={<ActivityDetailPage />} />
            <Route path="/" element={<ActivityPage />} />
            <Route path="/archived" element={<ArchivedPage />} />
          </Routes>
        </Router>
      </ContainerView>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
