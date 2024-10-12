import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, TextField, useTheme } from '@mui/material';

export const ChatForm = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				padding: theme.spacing(1),
				gap: theme.spacing(1),
			}}
		>
			<TextField placeholder="聞きたいことを入れてね" sx={{ flexGrow: 1 }} />
			<IconButton>
				<SendIcon />
			</IconButton>
		</Box>
	);
};
