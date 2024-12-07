import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';
import { DataMain } from '@/features/data/components/DataMain';

export const DataTemplate: React.FC = () => {
  return (
    <ChatBaseLayout
      title="データ一覧"
      navigationBarContent={<SideNavigationBar />}
    >
      <DataMain />
    </ChatBaseLayout>
  );
};
