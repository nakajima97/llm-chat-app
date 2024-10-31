import { useChatHistory } from '../../hooks/useChatHistory';
import { useSendChat } from '../../hooks/useSendChat';
import type { SendChatArgument } from '../../hooks/useSendChat';
import { ChatMain } from '../ChatMain';

export const ChatMainContainer = () => {
	const { sendChat, latestAnswer, clearLatestAnswer } = useSendChat();
	const { chatHistory, appendChats } = useChatHistory();

	const handleSendChat = ({ message }: SendChatArgument) => {
		sendChat({ message });
		clearLatestAnswer();
	};

	return <ChatMain sendChat={handleSendChat} latestAnswer={latestAnswer} />;
};
