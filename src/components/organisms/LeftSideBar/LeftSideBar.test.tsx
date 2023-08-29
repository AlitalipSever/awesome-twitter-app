import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeftSideBar from './index';
import { NAVIGATION_ITEMS } from './LeftSideBar.constants';

describe('LeftSideBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LeftSideBar />
      </MemoryRouter>,
    );
  });

  test('renders Twitter icon', () => {
    const twitterIcon = screen.getByRole('link', { name: '' });
    expect(twitterIcon).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    NAVIGATION_ITEMS.forEach((item) => {
      const link = screen.getByRole('link', { name: item.title });
      expect(link).toBeInTheDocument();
    });
  });

  test('renders Post button', () => {
    const postButton = screen.getByRole('button', { name: /post/i });
    expect(postButton).toBeInTheDocument();
  });
});
