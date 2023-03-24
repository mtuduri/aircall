import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react';
import '@testing-library/jest-dom';
import { routerWrapper } from '../../tests/test.utils';

test('Nav links should be visible', () => {
  render(<Header />, { wrapper: routerWrapper });
  const activityLink = screen.getByText(/Activity/i);
  expect(activityLink).toBeInTheDocument();
  const archivedLink = screen.getByText(/Archived/i);
  expect(archivedLink).toBeInTheDocument();
});
