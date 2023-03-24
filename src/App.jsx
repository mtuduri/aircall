import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header/Header.jsx';
import ActivityDetailPage from './pages/ActivityDetailPage/ActivityDetailPage.jsx';
import ActivityPage from './pages/ActivityPage/ActivityPage.jsx';
import ArchivedPage from './pages/ArchivedPage/ArchivedPage.jsx';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, ContainerView } from './App.styles.jsx';

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <ContainerView>
          <Routes>
            <Route path="/activity/:id" element={<ActivityDetailPage />} />
            <Route path="/" element={<ActivityPage />} />
            <Route path="/archived" element={<ArchivedPage />} />
            <Route path="*" element={<ActivityPage />} />
          </Routes>
        </ContainerView>
      </Router>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
