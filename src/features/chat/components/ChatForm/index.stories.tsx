import type { StoryObj } from '@storybook/react';
import { ChatForm } from '.';

export default {
  title: 'features/chat/Components/ChatForm',
  component: ChatForm,
};

type Story = StoryObj<typeof ChatForm>;

export const Default: Story = {
  args: {},
};
