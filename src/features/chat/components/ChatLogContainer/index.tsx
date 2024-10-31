import { useEffect, useState } from 'react';
import type { ChatHistoryType } from '../../types';
import { ChatLog } from '../ChatLog';

type Props = {
	latestAnswer: string;
};

export const ChatLogContainer = ({ latestAnswer }: Props) => {
	const [chatHistory, setChatHistory] = useState<ChatHistoryType>([]);

	const chats: ChatHistoryType = [
		...chatHistory,
		{
			id: chatHistory.length.toString(),
			role: 'assistant',
			message: latestAnswer,
		},
	];

	return <ChatLog chatLog={chats} />;
};
