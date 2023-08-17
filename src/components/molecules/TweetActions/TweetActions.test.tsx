import React from 'react';
import { render, screen } from '@testing-library/react';
import TweetActions from './index';

const onLikeToggle = () => {
  return 1;
};

describe('<TweetActions />', () => {
  beforeEach(() => {
    render(
      <TweetActions onLikeToggle={onLikeToggle} id={'123'} liked={true} />,
    );
  });

  it('renders all action buttons', () => {
    expect(screen.getByText('Reply')).toBeInTheDocument();
    expect(screen.getByText('Retweet')).toBeInTheDocument();
    expect(screen.getByText('Like')).toBeInTheDocument();
    expect(screen.getByText('Share')).toBeInTheDocument();
  });
});
