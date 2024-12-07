import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';

export const DataTemplate: React.FC = () => {
  return (
    <ChatBaseLayout
      title="データ一覧"
      navigationBarContent={<SideNavigationBar />}
    >
      データ一覧
    </ChatBaseLayout>
  );
};
