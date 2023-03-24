import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from './Header';
import React from 'react';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(
    <HashRouter>
      <Header />
    </HashRouter>
  );
  const linkElement = screen.getByText(/Activity/i);
  expect(linkElement).toBeInTheDocument();
});
