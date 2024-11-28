import { useQuery } from '@tanstack/react-query';
import type { ThreadListType } from '../types';

import { getThreads } from '../api/getThreads';

/**
 * useFetchThreadList フック
 *
 * このフックは、スレッド一覧を取得するためのカスタムフックです。
 * @tanstack/react-query の useQuery フックを使用して、API からスレッド一覧を非同期に取得します。
 *
 * @returns {Object} fetchThreadList - スレッド一覧を取得するための関数を含むオブジェクト。
 *
 * 使用例:
 * const { fetchThreadList } = useFetchThreadList();
 * const { data, error, isLoading } = fetchThreadList();
 *
 * data: スレッド一覧のデータ
 * error: エラー情報
 * isLoading: データ取得中の状態
 */
export const useFetchThreadList = () => {
  /**
   * fetchThreadList 関数
   *
   * この関数は、スレッド一覧を取得するための関数です。
   * @tanstack/react-query の useQuery フックを使用して、API からスレッド一覧を非同期に取得します。
   *
   * @returns {Object} - useQuery フックの戻り値を含むオブジェクト。
   */
  const fetchThreadList = () => {
    return useQuery<ThreadListType>({
      queryKey: ['threadList'],
      queryFn: getThreads,
    });
  };

  return {
    fetchThreadList,
  };
};
