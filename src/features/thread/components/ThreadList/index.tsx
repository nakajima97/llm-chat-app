import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
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
  handleDelete: (id: string) => void;
  handleAllDelete: () => void;
};

export const ThreadList = ({
  threads,
  handleDelete,
  handleAllDelete,
}: Props) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleAllDelete()}
          startIcon={<DeleteIcon />}
        >
          すべてのスレッドを削除する
        </Button>
      </Box>
      <List sx={{ width: '100%' }}>
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
