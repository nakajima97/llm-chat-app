import { useEffect } from 'react';
import type { ChatLogType } from '../../types';
import { ChatLog } from '../ChatLog';

type Props = {
	latestAnswer: string;
}

export const ChatLogContainer = ({
	latestAnswer
}: Props) => {
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
		{
			id: '3',
			role: 'assistant',
			message: latestAnswer,
		}
	];

	return <ChatLog chatLog={chats} />;
};
