import { AppBar, Box, Toolbar, useTheme } from '@mui/material';

type Props = {
	title: string;
	sideBarContent: React.ReactNode;
	children: React.ReactNode;
};

export const ChatBaseLayout = ({ title, sideBarContent, children }: Props) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: '100dvw',
				height: '100dvh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<AppBar position="static">
				<Toolbar>{title}</Toolbar>
			</AppBar>
			<Box sx={{ flexGrow: 1, display: 'flex' }}>
				<Box
					component="nav"
					sx={{
						width: '120px',
						height: '100%',
						backgroundColor: theme.palette.grey[100],
					}}
				>
					{sideBarContent}
				</Box>
				<Box component="main" sx={{ flexGrow: 1, height: '100%' }}>
					{children}
				</Box>
			</Box>
		</Box>
	);
};
