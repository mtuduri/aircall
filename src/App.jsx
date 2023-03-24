import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header/Header.jsx';
const ActivityDetailPage = lazy(() => import('./pages/ActivityDetailPage/ActivityDetailPage.jsx'));
const ActivityPage = lazy(() => import('./pages/ActivityPage/ActivityPage.jsx'));
const ArchivedPage = lazy(() => import('./pages/ArchivedPage/ArchivedPage.jsx'));

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, ContainerView } from './App.styles.jsx';
import Loader from './components/Loader/Loader.jsx';

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <ContainerView>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/activity/:id" element={<ActivityDetailPage />} />
              <Route path="/" element={<ActivityPage />} />
              <Route path="/archived" element={<ArchivedPage />} />
              <Route path="*" element={<ActivityPage />} />
            </Routes>
          </Suspense>
        </ContainerView>
      </Router>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
