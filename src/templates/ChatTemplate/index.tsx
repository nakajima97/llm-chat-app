import { ChatBaseLayout } from '@/components/layouts/ChatBaseLayout';

export const ChatTemplate = () => {
	return (
		<ChatBaseLayout title="Chat" sideBarContent={<div>sidebar</div>}>
			メインだよ
		</ChatBaseLayout>
	);
};
