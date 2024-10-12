import type { StoryObj } from '@storybook/react';
import { ChatMain } from '.';

export default {
	title: 'features/chat/Components/ChatMain',
	component: ChatMain,
};

type Story = StoryObj<typeof ChatMain>;

export const Default: Story = {
	args: {},
};
