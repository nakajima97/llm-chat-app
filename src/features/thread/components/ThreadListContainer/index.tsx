import { useFetchThreadList } from '../../hooks/useFetchThreadList';
import { ThreadList } from '../ThreadList';

export const ThreadListContainer = () => {
  const { fetchThreadList } = useFetchThreadList();

  const { data } = fetchThreadList();

  return <ThreadList threads={data ?? []} />;
};
