import { ChatBaseLayout } from '@/components/layouts/ChatBaseLayout';
import { ChatMain } from '@/features/chat/components/ChatMain';

export const ChatTemplate = () => {
	return (
		<ChatBaseLayout title="Chat" navigationBarContent={<div>sidebar</div>}>
			<ChatMain />
		</ChatBaseLayout>
	);
};
