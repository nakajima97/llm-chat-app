import { axiosInstance } from '@/lib/axios';

/**
 * 引数の型定義
 * @property {string} threadId - スレッドのID
 */
type Arguments = {
	threadId: string;
};

/**
 * 指定されたスレッドIDに基づいてスレッドメッセージを取得する非同期関数
 * @param {Arguments} param0 - 引数オブジェクト
 * @returns {Promise<any>} - スレッドメッセージのデータを含むPromise
 */
export const fetchThreadMessages = async ({ threadId }: Arguments) => {
	const response = await axiosInstance.get(`/threads/${threadId}`);
	return response.data;
};
