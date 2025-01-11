import { useDeleteAllThread } from '../../hooks/useDeleteAllThread';
import { useDeleteThread } from '../../hooks/useDeleteThread';
import { useFetchThreadList } from '../../hooks/useFetchThreadList';
import { ThreadList } from '../ThreadList';

export const ThreadListContainer = () => {
  const { fetchThreadList } = useFetchThreadList();
  const { mutateAsync } = useDeleteThread();
  const { mutateAsync: deleteAllThread } = useDeleteAllThread();

  const { data, refetch } = fetchThreadList();

  const handleDelete = async (id: string) => {
    await mutateAsync(id);
    refetch();
  };

  const handleAllDelete = async () => {
    await deleteAllThread();
    refetch();
  };

  return (
    <ThreadList
      threads={data ?? []}
      handleDelete={handleDelete}
      handleAllDelete={handleAllDelete}
    />
  );
};
