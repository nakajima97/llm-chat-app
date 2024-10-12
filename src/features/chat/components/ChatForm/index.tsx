import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, TextField } from '@mui/material';

export const ChatForm = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				padding: '8px',
				gap: '8px',
			}}
		>
			<TextField placeholder="聞きたいことを入れてね" sx={{ flexGrow: 1 }} />
			<IconButton>
				<SendIcon />
			</IconButton>
		</Box>
	);
};
