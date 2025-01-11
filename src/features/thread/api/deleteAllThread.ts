import { axiosInstance } from '@/lib/axios';

export const deleteAllThread = async (): Promise<void> => {
  await axiosInstance.delete<void>('/threads');
};
