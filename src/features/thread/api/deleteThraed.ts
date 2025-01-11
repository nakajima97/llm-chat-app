import { axiosInstance } from '@/lib/axios';

export const deleteThread = async (id: string): Promise<void> => {
  await axiosInstance.delete<void>(`/threads/${id}`);
};
