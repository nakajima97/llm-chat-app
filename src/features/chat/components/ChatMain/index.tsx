import { Box } from '@mui/material';
import type { SendChatType } from '../../hooks/useSendChat';
import type { ChatLogType } from '../../types';
import { ChatFormContainer } from '../ChatFormContainer';
import { ChatLogContainer } from '../ChatLogContainer';

type Props = {
  sendChat: SendChatType;
  latestQuestion: string;
  latestAnswer: string;
  chatLog: ChatLogType;
};

export const ChatMain = ({
  sendChat,
  latestQuestion,
  latestAnswer,
  chatLog,
}: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{ width: '100%', minHeight: 0, flexGrow: 1, overflow: 'hidden' }}
      >
        <ChatLogContainer
          latestQuestion={latestQuestion}
          latestAnswer={latestAnswer}
          chatLog={chatLog}
        />
      </Box>
      <Box sx={{ width: '100%', flexShrink: 0 }}>
        <ChatFormContainer sendChat={sendChat} />
      </Box>
    </Box>
  );
};
