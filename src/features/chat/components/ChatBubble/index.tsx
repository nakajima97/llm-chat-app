import { Box } from '@mui/material';
import type { ChatType } from '../../types';

type Props = {
	chat: ChatType;
};

export const ChatBubble = ({ chat }: Props) => {
	return (
		<Box
			sx={{
				maxWidth: '90%',
				padding: '10px',
				borderRadius: '16px',
				marginBottom: '10px',
				display: 'flex',
				alignItems: chat.role === 'user' ? 'end' : 'start',
				backgroundColor: chat.role === 'user' ? '#3f51b5' : '#f3f3f3',
			}}
		>
			{chat.message}
		</Box>
	);
};
