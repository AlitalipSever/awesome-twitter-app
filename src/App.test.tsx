import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Home page by default Loading', async () => {
    await act(async () => {
      render(<App />);
    });

    const allHomeElements = screen.getAllByText(/Loading/i);
    expect(allHomeElements).toHaveLength(1);
  });

  test('renders Profile page when navigated to /profile', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  test('renders Home page by default', async () => {
    await act(async () => {
      render(<App />);
    });

    const allHomeElements = screen.getAllByText(/Home/i);
    expect(allHomeElements).toHaveLength(2);
  });
});
