import type { StoryObj } from '@storybook/react';
import { LoginCard } from '.';

export default {
	title: 'features/login/Components/LoginCard',
	component: LoginCard,
};

type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {
	args: {},
};
