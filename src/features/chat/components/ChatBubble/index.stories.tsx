import type { StoryObj } from '@storybook/react';
import { ChatBubble } from '.';

export default {
  title: 'features/chat/Components/ChatBubble',
  component: ChatBubble,
};

type Story = StoryObj<typeof ChatBubble>;

export const UserChat: Story = {
  args: {
    chat: {
      id: '1',
      role: 'user',
      message: 'Hello',
    },
  },
};

export const AssistantChat: Story = {
  args: {
    chat: {
      id: '1',
      role: 'assistant',
      message: 'Hello',
    },
  },
};
