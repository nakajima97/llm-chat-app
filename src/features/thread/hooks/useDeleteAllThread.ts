import { useMutation } from '@tanstack/react-query';
import { deleteAllThread } from '../api/deleteAllThread';

export const useDeleteAllThread = () => {
  return useMutation({
    mutationFn: deleteAllThread,
  });
};
