import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header/Header.jsx';
import ActivityPage from './pages/ActivityPage/ActivityPage.jsx';
import ActivityDetailPage from './pages/ActivityDetailPage/ActivityDetailPage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, ContainerView } from './App.styles.jsx';
const App = () => {
  return (
    <Container>
      <Header />
      <ContainerView>
        <Router>
          <Routes>
            <Route path="/activity/:id" element={<ActivityDetailPage />} />
            <Route path="/" element={<ActivityPage />} />
          </Routes>
        </Router>
      </ContainerView>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
