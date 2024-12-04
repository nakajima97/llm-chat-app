import { Box, useTheme } from '@mui/material';
import type { ChatLogType } from '../../types';
import { ChatBubble } from '../ChatBubble';

type Props = {
  scrollRouteRef: React.RefObject<HTMLDivElement | null>;
  chatLog: ChatLogType;
  handleScroll: () => void;
};

export const ChatLog = ({ scrollRouteRef, chatLog, handleScroll }: Props) => {
  const theme = useTheme();

  return (
    <Box
      ref={scrollRouteRef}
      onScroll={handleScroll}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
        padding: theme.spacing(1),
        overflowY: 'auto',
      }}
    >
      {chatLog?.map(
        (chat) => chat.message && <ChatBubble key={chat.id} chat={chat} />,
      )}
    </Box>
  );
};
