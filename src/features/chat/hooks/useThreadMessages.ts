import { useQuery } from '@tanstack/react-query';

/**
 * 指定されたスレッドIDに基づいてスレッドメッセージを取得するカスタムフック
 * @param {string} threadId - スレッドのID
 * @returns {object} fetchThreadMessages関数を含むオブジェクト
 */
export const useThreadMessages = (threadId: string) => {
	/**
	 * スレッドメッセージを取得する関数
	 * @returns {ReturnType<typeof useQuery>} React Queryのクエリ結果
	 */
	const fetchThreadMessages = (): ReturnType<typeof useQuery> => {
		return useQuery({
			queryKey: ['thread', threadId],
			queryFn: fetchThreadMessages,
			enabled: !!threadId,
		});
	};

	return {
		fetchThreadMessages,
	};
};
