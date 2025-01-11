import { useState } from 'react';
import { useDeleteAllThread } from '../../hooks/useDeleteAllThread';
import { useDeleteThread } from '../../hooks/useDeleteThread';
import { useFetchThreadList } from '../../hooks/useFetchThreadList';
import { DeleteAllThreadDialog } from '../DeleteAllThreadDialog';
import { ThreadList } from '../ThreadList';

export const ThreadListContainer = () => {
  const { fetchThreadList } = useFetchThreadList();
  const { mutateAsync } = useDeleteThread();
  const { mutateAsync: deleteAllThread } = useDeleteAllThread();
  const [open, setOpen] = useState(false);

  const { data, refetch } = fetchThreadList();

  const handleDelete = async (id: string) => {
    await mutateAsync(id);
    refetch();
  };

  const openDeleteAllThreadDialog = () => {
    setOpen(true);
  };

  const handleAllDelete = async () => {
    await deleteAllThread();
    refetch();
    setOpen(false);
  };

  return (
    <>
      <ThreadList
        threads={data ?? []}
        handleDelete={handleDelete}
        handleAllDelete={openDeleteAllThreadDialog}
      />
      <DeleteAllThreadDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleAllDelete}
      />
    </>
  );
};
