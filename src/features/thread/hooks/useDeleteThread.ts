import { useMutation } from '@tanstack/react-query';
import { deleteThread } from '../api/deleteThraed';

export const useDeleteThread = () => {
  return useMutation({
    mutationFn: deleteThread,
  });
};
