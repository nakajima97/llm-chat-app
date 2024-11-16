import { useQuery } from '@tanstack/react-query';
import { getThreadMessages } from '../api/getThreadMessages';
import type { ChatHistoryType, ThreadIdType } from '../types';

/**
 * 指定されたスレッドIDに基づいてスレッドメッセージを取得するカスタムフック
 * @param {ThreadIdType} threadId - スレッドのID
 * @returns {object} fetchThreadMessages関数を含むオブジェクト
 */
export const useThreadMessages = () => {
	/**
	 * スレッドメッセージを取得する関数
	 * @returns {ReturnType<typeof useQuery>} React Queryのクエリ結果
	 */
	const fetchThreadMessages = (threadId: ThreadIdType) => {
		return useQuery<ChatHistoryType>({
			queryKey: ['thread', threadId],
			queryFn: () => getThreadMessages({ threadId }),
			enabled: !!threadId,
		});
	};

	return {
		fetchThreadMessages,
	};
};
