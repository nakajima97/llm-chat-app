import type { ChatLogType } from '../../types';
import { ChatLog } from '../ChatLog';

type Props = {
  chatLog: ChatLogType;
  latestQuestion: string;
  latestAnswer: string;
};

export const ChatLogContainer = ({
  chatLog,
  latestQuestion,
  latestAnswer,
}: Props) => {
  const chats: ChatLogType = [
    ...chatLog,
    {
      id: (chatLog.length + 1).toString(),
      role: 'user',
      message: latestQuestion,
    },
    {
      id: chatLog.length.toString(),
      role: 'assistant',
      message: latestAnswer,
    },
  ];

  return <ChatLog chatLog={chats} />;
};
