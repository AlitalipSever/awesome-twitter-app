import React from 'react';
import TweetActions from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'molecules/TweetActions',
  component: TweetActions,
} as Meta;

const Template: Story = (args) => <TweetActions {...args} />;

export const Default = Template.bind({});
