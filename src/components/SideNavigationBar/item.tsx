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
};

export const Item = ({ title, icon, link }: Props) => {
	const router = useRouter();

	return (
		<ListItemButton onClick={() => router.push(link)}>
			<ListItem>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
			</ListItem>
		</ListItemButton>
	);
};
