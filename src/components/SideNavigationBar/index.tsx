import HomeIcon from '@mui/icons-material/Home';
import { List } from '@mui/material';
import { Item } from './item';

export const SideNavigationBar = () => {
	const items = [
		{
			title: 'Home',
			icon: <HomeIcon />,
			link: '/chat',
		},
	];

	return (
		<List>
			{items.map((item) => (
				<Item
					key={item.title}
					title={item.title}
					icon={item.icon}
					link={item.link}
				/>
			))}
		</List>
	);
};
