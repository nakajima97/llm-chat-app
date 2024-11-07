import HomeIcon from '@mui/icons-material/Home';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Item } from './item';

export const SideNavigationBar = () => {
	const navigationItems = [
		{
			text: 'Home',
			icon: <HomeIcon />,
			path: '/chat',
		},
	];

	const threads = [
		{
			id: 1,
			title: 'Thread 1',
			lastUpdated: new Date(),
		},
		{
			id: 2,
			title: 'Thread 2',
			lastUpdated: new Date(),
		},
		{
			id: 3,
			title: 'Thread 3',
			lastUpdated: new Date(),
		},
		{
			id: 4,
			title: 'Thread 4',
			lastUpdated: new Date(),
		},
		{
			id: 5,
			title: 'Thread 5',
			lastUpdated: new Date(),
		},
	];

	return (
		<>
			<List>
				{navigationItems.map((item) => (
					<Item
						key={item.text}
						title={item.text}
						icon={item.icon}
						link={item.path}
					/>
				))}
			</List>
			<Divider />

			{/* Thread List */}
			<Box sx={{ flex: 1, overflow: 'auto' }}>
				<Typography
					variant="subtitle2"
					sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'medium' }}
				>
					スレッド一覧
				</Typography>
				<List>
					{threads.map((thread) => (
						<ListItem key={thread.id} disablePadding>
							<ListItemButton
							>
								<ListItemText
									primary={thread.title}
									secondary={thread.lastUpdated.toLocaleDateString()}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
};
