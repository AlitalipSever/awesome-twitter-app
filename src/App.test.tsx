import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Home page by default', () => {
    render(
        <App />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders Profile page when navigated to /profile', () => {
    render(
        <App />
    );

    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
