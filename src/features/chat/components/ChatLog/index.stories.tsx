import type { StoryObj } from '@storybook/react';
import { ChatLog } from '.';

export default {
  title: 'features/chat/Components/ChatLog',
  component: ChatLog,
};

type Story = StoryObj<typeof ChatLog>;

export const Default: Story = {
  args: {
    chatLog: [
      {
        id: '1',
        role: 'user',
        message: 'Hello',
      },
      {
        id: '2',
        role: 'assistant',
        message: 'Hi',
      },
    ],
  },
};
