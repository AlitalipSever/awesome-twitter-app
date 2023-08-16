// UserAvatar.stories.tsx

import React from 'react';
import UserAvatar, { UserAvatarProps } from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/UserAvatar',
  component: UserAvatar,
} as Meta;

const Template: Story<UserAvatarProps> = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://via.placeholder.com/150',
  username: 'ats',
};
