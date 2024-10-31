import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';
import { ChatMain } from '@/features/chat/components/ChatMain';
import { ChatMainContainer } from '@/features/chat/components/ChatMainContainer';

export const ChatTemplate = () => {
	return (
		<ChatBaseLayout title="Chat" navigationBarContent={<SideNavigationBar />}>
			<ChatMainContainer />
		</ChatBaseLayout>
	);
};
