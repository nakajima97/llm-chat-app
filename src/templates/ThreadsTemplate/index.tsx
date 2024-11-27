import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';

export const ThreadsTemplate = () => {
  return (
    <ChatBaseLayout
      title="スレッド一覧"
      navigationBarContent={<SideNavigationBar />}
    >
      <h1>Threads</h1>
    </ChatBaseLayout>
  );
};
