import { Box } from '@mui/material';
import { ChatForm } from '../ChatForm';
import { ChatLog } from '../ChatLog';

export const ChatMain = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box sx={{ width: '100%', flexGrow: 1 }}>
				<ChatLog />
			</Box>
			<Box>
				<ChatForm />
			</Box>
		</Box>
	);
};
