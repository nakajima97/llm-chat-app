import type { ChatHistoryType } from '../../types';
import { ChatLog } from '../ChatLog';

type Props = {
	chatLog: ChatHistoryType;
	latestQuestion: string;
	latestAnswer: string;
};

export const ChatLogContainer = ({
	chatLog,
	latestQuestion,
	latestAnswer,
}: Props) => {
	const chats: ChatHistoryType = [
		...chatLog,
		{
			id: (chatLog.length + 1).toString(),
			role: 'user',
			message: latestQuestion,
		},
		{
			id: chatLog.length.toString(),
			role: 'assistant',
			message: latestAnswer,
		},
	];

	return <ChatLog chatLog={chats} />;
};
