import { Box } from '@mui/material';
import type { ChatType } from '../../types';

type Props = {
	chat: ChatType;
};

export const ChatBubble = ({ chat }: Props) => {
	const isUser = chat.role === 'user';

	return (
		<Box
			sx={{
				width: '100%',
				padding: '10px',
				display: 'flex',
				justifyContent: isUser ? 'end' : 'start',
			}}
		>
			<Box
				sx={{
					maxWidth: '80%',
					backgroundColor: isUser ? '#3f51b5' : '#f3f3f3',
					color: isUser ? '#fff' : '#000',
					padding: '8px',
					borderRadius: isUser ? '16px 0 16px 16px' : '0 16px 16px 16px',
				}}
			>
				{chat.message}
			</Box>
		</Box>
	);
};
