import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export const useThreadId = () => {
  const [threadId, setThreadId] = useState<string | undefined>(undefined);
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * ルータークエリからthreadIdを取得します。
   * @returns {string} 利用可能な場合、threadIdを返します。
   */
  const getThreadId = useCallback((): string => {
    const queryThreadId = searchParams.get('thread-id');

    if (Array.isArray(queryThreadId)) {
      return queryThreadId[0];
    }
    return queryThreadId ?? '';
  }, [searchParams.get]);

  /**
   * ページを開いた際にURLパラメータからthreadIdを取得します。
   */
  useEffect(() => {
    if (router.isReady) {
      const queryThreadId = searchParams.get('thread-id');
      if (queryThreadId) {
        setThreadId(queryThreadId);
      } else {
        setThreadId(undefined);
      }
    }
  }, [router.isReady, searchParams]);

  /**
   * 現在のthreadIdでURLパラメータの値を更新する。
   */

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const replace = useCallback(router.replace.bind(router), [router.replace]);

  const updateUrl = useCallback(
    (id: string) => {
      replace(
        {
          pathname: '/chat',
          query: { 'thread-id': id },
        },
        undefined,
        { shallow: true },
      );
    },
    [replace],
  );

  return { threadId, setThreadId, getThreadId };
};
