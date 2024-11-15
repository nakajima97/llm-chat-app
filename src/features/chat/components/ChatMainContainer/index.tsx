import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useChatHistory } from '../../hooks/useChatHistory';
import { useSendChat } from '../../hooks/useSendChat';
import type { SendChatArgument } from '../../hooks/useSendChat';
import { ChatMain } from '../ChatMain';

export const ChatMainContainer = () => {
	const {
		sendChat,
		latestQuestion,
		latestAnswer,
		threadId,
		clearLatestAnswer,
	} = useSendChat();
	const { chatHistory, appendChats } = useChatHistory();

	const router = useRouter();

	useEffect(() => {
		if (threadId && router.query.thread !== threadId) {
			router.replace(
				{
					pathname: router.pathname,
					query: { ...router.query, thread: threadId },
				},
				undefined,
				{ shallow: true },
			);
		}
	}, [threadId, router.pathname, router.replace, router.query]);

	const handleSendChat = ({ message }: SendChatArgument) => {
		sendChat({ message });
		clearLatestAnswer();
	};

	return (
		<ChatMain
			sendChat={handleSendChat}
			latestQuestion={latestQuestion}
			latestAnswer={latestAnswer}
		/>
	);
};
