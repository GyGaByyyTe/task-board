import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main div', () => {
  render(<App />);
  const appElement = screen.getByText(/App works!/i);
  expect(appElement).toBeInTheDocument();
});
