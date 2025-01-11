import { useDeleteThread } from '../../hooks/useDeleteThread';
import { useFetchThreadList } from '../../hooks/useFetchThreadList';
import { ThreadList } from '../ThreadList';

export const ThreadListContainer = () => {
  const { fetchThreadList } = useFetchThreadList();
  const { mutateAsync } = useDeleteThread();

  const { data, refetch } = fetchThreadList();

  const handleDelete = async (id: string) => {
    await mutateAsync(id);
    refetch();
  };

  return <ThreadList threads={data ?? []} handleDelete={handleDelete} />;
};
