import { Box, useTheme } from '@mui/material';
import type { ChatType } from '../../types';

type Props = {
  chat: ChatType;
};

export const ChatBubble = ({ chat }: Props) => {
  const isUser = chat.role === 'user';

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: isUser ? 'end' : 'start',
      }}
    >
      <Box
        sx={{
          maxWidth: '80%',
          backgroundColor: isUser
            ? theme.palette.primary.light
            : theme.palette.grey[300],
          color: theme.palette.common.black,
          padding: theme.spacing(1),
          borderRadius: isUser ? '16px 0 16px 16px' : '0 16px 16px 16px',
        }}
      >
        {chat.message}
      </Box>
    </Box>
  );
};
