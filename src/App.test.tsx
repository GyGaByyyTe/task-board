import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const header = screen.getByText(/Design weekly/i);
  expect(header).toBeInTheDocument();
});
