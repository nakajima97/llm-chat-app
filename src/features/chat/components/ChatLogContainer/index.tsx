import { useState } from 'react';
import { useThreadMessages } from '../../hooks/useThreadMessages';
import type { ChatHistoryType, ThreadIdType } from '../../types';
import { ChatLog } from '../ChatLog';

type Props = {
	threadId: ThreadIdType;
	latestQuestion: string;
	latestAnswer: string;
};

export const ChatLogContainer = ({
	threadId,
	latestQuestion,
	latestAnswer,
}: Props) => {
	const { fetchThreadMessages } = useThreadMessages();
	const { data } = fetchThreadMessages(threadId);
	const chatLog = data ?? [];

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
