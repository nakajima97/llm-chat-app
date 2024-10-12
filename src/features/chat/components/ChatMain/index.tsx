import { Box } from '@mui/material';
import { ChatForm } from '../ChatForm';
import { ChatLogContainer } from '../ChatLogContainer';

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
			<Box sx={{ width: '100%', flexGrow: 1, overflowY: 'scroll' }}>
				<ChatLogContainer />
			</Box>
			<Box sx={{ width: '100%' }}>
				<ChatForm />
			</Box>
		</Box>
	);
};
