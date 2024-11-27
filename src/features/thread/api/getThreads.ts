import { axiosInstance } from '@/lib/axios';
import type { ThreadListType } from '../types';

export const getThreads = async (): Promise<ThreadListType> => {
  const response = await axiosInstance.get<ThreadListType>('/threads');
  return response.data;
};
