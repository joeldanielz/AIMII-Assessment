import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../pages/Homepage';

test('renders learn react link', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
