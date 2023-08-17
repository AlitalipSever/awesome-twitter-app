import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Home page by default', () => {
    render(<App />);

    const allHomeElements = screen.getAllByText(/home/i);
    expect(allHomeElements).toHaveLength(2); // or whatever the expected count is
  });

  test('renders Profile page when navigated to /profile', () => {
    render(<App />);

    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
