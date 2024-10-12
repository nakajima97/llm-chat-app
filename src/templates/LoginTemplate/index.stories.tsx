import type { StoryObj } from '@storybook/react';
import { LoginTemplate } from '.';

export default {
	title: 'templates/LoginTemplate',
	component: LoginTemplate,
};

type Story = StoryObj<typeof LoginTemplate>;

export const Default: Story = {
	args: {},
};
