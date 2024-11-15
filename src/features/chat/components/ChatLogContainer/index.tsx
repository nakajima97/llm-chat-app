import { useEffect, useState } from 'react';
import type { ChatHistoryType } from '../../types';
import { ChatLog } from '../ChatLog';

type Props = {
	latestQuestion: string;
	latestAnswer: string;
};

export const ChatLogContainer = ({ latestQuestion, latestAnswer }: Props) => {
	const [chatHistory, setChatHistory] = useState<ChatHistoryType>([]);

	const chats: ChatHistoryType = [
		...chatHistory,
		{
			id: (chatHistory.length + 1).toString(),
			role: 'user',
			message: latestQuestion,
		},
		{
			id: chatHistory.length.toString(),
			role: 'assistant',
			message: latestAnswer,
		},
	];

	return <ChatLog chatLog={chats} />;
};
