import React from 'react';
import { render, screen } from '@testing-library/react';
import TweetActions from './index';
import { useTweets } from '../../../hooks/useTweets';
const { toggleLike } = useTweets();

describe('<TweetActions />', () => {
  beforeEach(() => {
    render(<TweetActions onLikeToggle={toggleLike} id={'123'} liked={true} />);
  });

  it('renders all action buttons', () => {
    expect(screen.getByText('Reply')).toBeInTheDocument();
    expect(screen.getByText('Retweet')).toBeInTheDocument();
    expect(screen.getByText('Like')).toBeInTheDocument();
    expect(screen.getByText('Share')).toBeInTheDocument();
  });
});
