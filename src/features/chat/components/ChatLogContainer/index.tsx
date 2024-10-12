import type { ChatLogType } from '../../types';
import { ChatLog } from '../ChatLog';

export const ChatLogContainer = () => {
	const chats: ChatLogType = [
		{
			id: '1',
			role: 'user',
			message: 'Hello',
		},
		{
			id: '2',
			role: 'assistant',
			message: 'Hi',
		},
	];

	return <ChatLog chats={chats} />;
};
