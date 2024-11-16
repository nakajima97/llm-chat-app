import { Box } from '@mui/material';
import type { SendChatType } from '../../hooks/useSendChat';
import type { ThreadIdType } from '../../types';
import { ChatFormContainer } from '../ChatFormContainer';
import { ChatLogContainer } from '../ChatLogContainer';

type Props = {
	sendChat: SendChatType;
	latestQuestion: string;
	latestAnswer: string;
	threadId: ThreadIdType;
};

export const ChatMain = ({
	sendChat,
	latestQuestion,
	latestAnswer,
	threadId,
}: Props) => {
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
					threadId={threadId}
				/>
			</Box>
			<Box sx={{ width: '100%' }}>
				<ChatFormContainer sendChat={sendChat} />
			</Box>
		</Box>
	);
};
