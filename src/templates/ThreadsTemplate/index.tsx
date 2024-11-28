import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';
import { ThreadListContainer } from '@/features/thread/components/ThreadListContainer';

export const ThreadsTemplate = () => {
  return (
    <ChatBaseLayout
      title="スレッド一覧"
      navigationBarContent={<SideNavigationBar />}
    >
      <ThreadListContainer />
    </ChatBaseLayout>
  );
};
