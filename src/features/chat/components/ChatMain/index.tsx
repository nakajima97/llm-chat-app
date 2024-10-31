import { Box } from '@mui/material';
import type { SendChatType } from '../../hooks/useSendChat';
import { ChatForm } from '../ChatForm';
import { ChatFormContainer } from '../ChatFormContainer';
import { ChatLogContainer } from '../ChatLogContainer';

type Props = {
	sendChat: SendChatType;
	latestAnswer: string;
};

export const ChatMain = ({ sendChat, latestAnswer }: Props) => {
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
				<ChatLogContainer latestAnswer={latestAnswer} />
			</Box>
			<Box sx={{ width: '100%' }}>
				<ChatFormContainer sendChat={sendChat} />
			</Box>
		</Box>
	);
};
