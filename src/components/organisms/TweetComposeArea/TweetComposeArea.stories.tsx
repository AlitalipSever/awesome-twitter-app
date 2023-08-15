import React from 'react';

import TweetComposeArea, { TweetComposeAreaProps } from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/TweetComposeArea',
  component: TweetComposeArea,
} as Meta;

const Template: Story<TweetComposeAreaProps> = (args) => (
  <TweetComposeArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tweetText: '',
  onChange: (e) => console.log('Changed:', e.target.value),
  onSubmit: () => console.log('Post clicked!'),
};
