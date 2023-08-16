import React from 'react';
import TweetActions from './index';
import { Meta, Story } from '@storybook/react';
import { useTweets } from '../../../hooks/useTweets';
const { toggleLike } = useTweets();
export default {
  title: 'molecules/TweetActions',
  component: TweetActions,
} as Meta;

const Template: Story = (args) => (
  <TweetActions onLikeToggle={toggleLike} id={'123'} liked={true} {...args} />
);

export const Default = Template.bind({});
