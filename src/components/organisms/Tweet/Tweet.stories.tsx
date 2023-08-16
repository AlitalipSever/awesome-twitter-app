import React from 'react';
import Tweet, { TweetProps } from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Organisms/Tweet',
  component: Tweet,
} as Meta;

const Template: Story<TweetProps> = (args) => <Tweet {...args} />;

export const DefaultTweet = Template.bind({});
DefaultTweet.args = {
  username: 'Ali Sever',
  handle: 'alisever',
  content:
    'This is a sample tweet to show the Tweet component in action. ⨌∰ 🚴🏻🏄🏻‍',
  timestamp: '2h',
  avatarUrl: 'https://via.placeholder.com/150',
};
