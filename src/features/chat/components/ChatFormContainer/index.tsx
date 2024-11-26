import { useState } from 'react';
import type { SendChatType } from '../../hooks/useSendChat';
import { ChatForm } from '../ChatForm';

type Props = {
  sendChat: SendChatType;
};

export const ChatFormContainer = ({ sendChat }: Props) => {
  const [text, setText] = useState('');

  const handleSendChat = () => {
    sendChat({ message: text });
    setText('');
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === 'Enter') {
      handleSendChat();
    }
  };

  return (
    <ChatForm
      handleSendChat={handleSendChat}
      text={text}
      handleChangeText={handleChangeText}
      handleKeyDown={handleKeyDown}
    />
  );
};
