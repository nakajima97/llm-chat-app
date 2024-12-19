import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import type { ThreadListType } from '../../types';

type Props = {
  threads: ThreadListType;
};

export const ThreadList = ({ threads }: Props) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {threads.map((thread) => (
          <ListItem key={thread.id}>
            <ListItemButton
              onClick={() => router.push(`/chat?thread-id=${thread.id}`)}
            >
              <ListItemText primary={thread.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
