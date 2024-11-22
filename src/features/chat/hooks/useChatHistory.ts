import { useState } from 'react';
import type { ChatLogType, ChatType } from '../types';

export const useChatHistory = () => {
	const [chatHistory, setChatHistory] = useState<ChatLogType>([]);

	const appendChats = (newChats: ChatType) => {
		setChatHistory((prevChats) => [...prevChats, newChats]);
	};

	return {
		chatHistory,
		appendChats,
	};
};
