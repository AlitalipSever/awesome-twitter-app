import React from 'react';
import Button, { ButtonProps } from './index';
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
};

export const WithAdditionalStyles = Template.bind({});
WithAdditionalStyles.args = {
    label: 'Styled Button',
    className: 'bg-red-500'
};
