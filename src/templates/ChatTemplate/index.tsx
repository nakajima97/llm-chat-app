import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';
import { ChatMain } from '@/features/chat/components/ChatMain';

export const ChatTemplate = () => {
	return (
		<ChatBaseLayout title="Chat" navigationBarContent={<SideNavigationBar />}>
			<ChatMain />
		</ChatBaseLayout>
	);
};
