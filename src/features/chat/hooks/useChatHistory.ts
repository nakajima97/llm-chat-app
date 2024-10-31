import { useState } from 'react';
import type { ChatHistoryType, ChatType } from '../types';

export const useChatHistory = () => {
	const [chatHistory, setChatHistory] = useState<ChatHistoryType>([]);

	const appendChats = (newChats: ChatType) => {
		setChatHistory((prevChats) => [...prevChats, newChats]);
	};

	return {
		chatHistory,
		appendChats,
	};
};
