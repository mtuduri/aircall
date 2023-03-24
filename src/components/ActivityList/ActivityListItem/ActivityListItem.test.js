import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { routerWrapper } from '../../../tests/test.utils';
import ActivityListitem from './ActivityListitem';
const fakeItem = {
  direction: 'inbound',
  from: 100001,
  to: 200002,
  via: 30000003,
  duration: 10,
  is_archived: false,
  call_type: 'answered',
  id: '6393bb7b69073dc45849ca7c',
  created_at: '2022-12-09T22:49:31.911Z'
};

test('Should render the data', () => {
  render(<ActivityListitem item={fakeItem} />, { wrapper: routerWrapper });
  const element = screen.getByText(/100001/i);
  expect(element).toBeInTheDocument();
});
