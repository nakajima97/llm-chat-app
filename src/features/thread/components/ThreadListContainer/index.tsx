import { useDeleteThread } from '../../hooks/useDeleteThread';
import { useFetchThreadList } from '../../hooks/useFetchThreadList';
import { ThreadList } from '../ThreadList';

export const ThreadListContainer = () => {
  const { fetchThreadList } = useFetchThreadList();
  const { mutate } = useDeleteThread();

  const { data } = fetchThreadList();

  const handleDelete = (id: string) => {
    mutate(id);
  };

  return <ThreadList threads={data ?? []} handleDelete={handleDelete} />;
};
