import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import type { ThreadListType } from '../../types';

type Props = {
  threads: ThreadListType;
};

export const ThreadList = ({ threads }: Props) => {
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
            <ListItemButton>
              <ListItemText primary={thread.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
