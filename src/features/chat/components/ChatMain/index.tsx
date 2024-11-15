import { Box } from '@mui/material';
import type { SendChatType } from '../../hooks/useSendChat';
import { ChatForm } from '../ChatForm';
import { ChatFormContainer } from '../ChatFormContainer';
import { ChatLogContainer } from '../ChatLogContainer';

type Props = {
	sendChat: SendChatType;
	latestQuestion: string;
	latestAnswer: string;
};

export const ChatMain = ({ sendChat, latestQuestion, latestAnswer }: Props) => {
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
				<ChatLogContainer
					latestQuestion={latestQuestion}
					latestAnswer={latestAnswer}
				/>
			</Box>
			<Box sx={{ width: '100%' }}>
				<ChatFormContainer sendChat={sendChat} />
			</Box>
		</Box>
	);
};
