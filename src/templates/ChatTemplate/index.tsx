import { ChatBaseLayout } from '@/components/layouts/ChatBaseLayout';
import { SideNavigationBar } from '@/components/layouts/SideNavigationBar';
import { ChatMain } from '@/features/chat/components/ChatMain';

export const ChatTemplate = () => {
	return (
		<ChatBaseLayout title="Chat" navigationBarContent={<SideNavigationBar />}>
			<ChatMain />
		</ChatBaseLayout>
	);
};
