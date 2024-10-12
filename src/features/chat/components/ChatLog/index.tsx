import { Box } from '@mui/material';
import type { ChatLogType } from '../../types';
import { ChatBubble } from '../ChatBubble';

type Props = {
	chats: ChatLogType;
};

export const ChatLog = ({ chats }: Props) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				padding: '8px',
			}}
		>
			{chats?.map((chat) => (
				<ChatBubble key={chat.id} chat={chat} />
			))}
		</Box>
	);
};
