import React from 'react';
import { render } from '@testing-library/react';
import UserAvatar from './index';

describe('<UserAvatar />', () => {
  it('renders the avatar with provided url and username', () => {
    const { getByAltText } = render(
      <UserAvatar avatarUrl="https://via.placeholder.com/150" username="ats" />,
    );

    const image = getByAltText("ats's avatar");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
});
