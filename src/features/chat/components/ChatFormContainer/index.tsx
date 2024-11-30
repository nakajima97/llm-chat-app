import { useState } from 'react';
import { ChatForm } from '../ChatForm';
import type { HandleSendChatType } from '../ChatMainContainer';

type Props = {
  sendChat: HandleSendChatType;
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
