import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

type Props = {
  title: string;
  icon: React.ReactNode;
  link: string;
};

export const NavigationItem = ({ title, icon, link }: Props) => {
  return (
    <ListItemButton onClick={() => {}}>
      <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </ListItemButton>
  );
};
