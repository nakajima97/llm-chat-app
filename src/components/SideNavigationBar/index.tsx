import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import FolderIcon from '@mui/icons-material/Folder';
import { Box, Divider, List, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { NavigationItem } from './components/NavigationItem';
import { ThreadItem } from './components/ThreadItem';

export const SideNavigationBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const navigationItems = [
    {
      text: '新規チャット',
      icon: <AddCircleOutlineIcon />,
      path: '/chat',
    },
    {
      text: 'スレッド一覧',
      icon: <ChatIcon />,
      path: '/threads',
    },
    {
      text: 'データ一覧',
      icon: <FolderIcon />,
      path: '/data',
    },
  ];

  const lastUpdated = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const threads = [
    {
      id: 1,
      title: 'Thread 1',
      lastUpdated,
    },
    {
      id: 2,
      title: 'Thread 2',
      lastUpdated,
    },
    {
      id: 3,
      title: 'Thread 3',
      lastUpdated,
    },
    {
      id: 4,
      title: 'Thread 4',
      lastUpdated,
    },
    {
      id: 5,
      title: 'Thread 5',
      lastUpdated,
    },
  ];

  return (
    <>
      <List>
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.text}
            title={item.text}
            icon={item.icon}
            link={item.path}
            selected={currentPath.includes(item.path)}
          />
        ))}
      </List>
      <Divider />

      {/* Thread List */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Typography
          variant="subtitle2"
          sx={{ px: 2, pt: 2, color: 'text.secondary', fontWeight: 'medium' }}
        >
          お気に入りスレッド
        </Typography>
        <List>
          {threads.map((thread) => (
            <ThreadItem thread={thread} key={thread.id} />
          ))}
        </List>
      </Box>
    </>
  );
};
