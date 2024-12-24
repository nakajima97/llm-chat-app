import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  icon: React.ReactNode;
  link: string;
  selected: boolean;
};

export const NavigationItem = ({ title, icon, link, selected }: Props) => {
  const router = useRouter();

  return (
    <ListItemButton
      onClick={() => {
        router.push(link);
      }}
      selected={selected}
    >
      <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </ListItemButton>
  );
};
