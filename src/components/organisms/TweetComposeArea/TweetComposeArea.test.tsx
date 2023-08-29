import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TweetComposeArea from './index';
import { AVATAR_URL, USERNAME } from '../../../utils';

describe('TweetComposeArea', () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(
      <TweetComposeArea
        tweetText=""
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        avatarUrl={AVATAR_URL}
        username={USERNAME}
      />,
    );
  });

  it('renders without crashing', () => {
    const placeholder = screen.getByPlaceholderText("What's happening?");
    expect(placeholder).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const inputElement = screen.getByPlaceholderText("What's happening?");
    fireEvent.change(inputElement, { target: { value: 'Testing tweet' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('calls onSubmit when "Post" button is clicked', () => {
    const buttonElement = screen.getByText('Post');
    fireEvent.click(buttonElement);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
