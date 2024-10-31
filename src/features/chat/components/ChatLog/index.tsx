import { Box, useTheme } from '@mui/material';
import type { ChatHistoryType } from '../../types';
import { ChatBubble } from '../ChatBubble';

type Props = {
	chatLog: ChatHistoryType;
};

export const ChatLog = ({ chatLog }: Props) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: theme.spacing(1),
				padding: theme.spacing(1),
			}}
		>
			{chatLog?.map((chat) => (
				chat.message && <ChatBubble key={chat.id} chat={chat} />
			))}
		</Box>
	);
};
