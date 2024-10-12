import type { ChatLogType } from '../../types';
import { ChatBubble } from '../ChatBubble';

type Props = {
	chats: ChatLogType;
};

export const ChatLog = ({ chats }: Props) => {
	return (
		<>
			{chats?.map((chat) => (
				<ChatBubble key={chat.id} chat={chat} />
			))}
		</>
	);
};
