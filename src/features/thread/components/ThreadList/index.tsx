import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  IconButton,
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

  const handleDelete = (id: string) => {
    // Implement delete functionality here
    console.log(`Delete thread with id: ${id}`);
  };

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
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(thread.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
