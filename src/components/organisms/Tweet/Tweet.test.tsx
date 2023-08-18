import React from 'react';
import { render, screen } from '@testing-library/react';

import Tweet, { TweetProps } from './index';
describe('<Tweet />', () => {
  const mockProps = {
    username: 'Ali Sever',
    handle: 'alisever',
    content: 'This is a sample tweet content.',
    timestamp: '2h',
    avatarUrl: 'https://via.placeholder.com/150',
    receivedAt: 1234,
  } as TweetProps;

  beforeEach(() => {
    render(<Tweet {...mockProps} />);
  });

  it('renders user avatar', () => {
    const avatar = screen.getByAltText(`${mockProps.username}'s avatar`);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', mockProps.avatarUrl);
  });

  it('renders user profile details', () => {
    expect(screen.getByText(mockProps.username)).toBeInTheDocument();
    expect(screen.getByText(mockProps.timestamp)).toBeInTheDocument();
  });

  it('renders tweet content', () => {
    expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  });

  it('renders tweet actions', () => {
    const actionsContainer = screen.getByRole('button', { name: /reply/i });
    expect(actionsContainer).toBeInTheDocument();
  });
});
