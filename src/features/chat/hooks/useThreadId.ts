import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export const useThreadId = () => {
  const [threadId, setThreadId] = useState<string | undefined>(undefined);
  const router = useRouter();

  /**
   * ページを開いた際にURLパラメータからthreadIdを取得します。
   */
  useEffect(() => {
    if (router.isReady) {
      const id = getThreadId();
      setThreadId(id);
    }
  }, [router.isReady]);

  /**
   * ルータークエリからthreadIdを取得します。
   * @returns {string | undefined} 利用可能な場合、threadIdを返します。
   */
  const getThreadId = useCallback((): string | undefined => {
    const queryThreadId = router.query.threadId;

    if (Array.isArray(queryThreadId)) {
      return queryThreadId[0];
    }
    return queryThreadId;
  }, [router.query.threadId]);

  /**
   * 現在のthreadIdでURLパラメータの値を更新する。
   */
  useEffect(() => {
    if (threadId) {
      router.replace(
        {
          pathname: `/chat/${threadId}`,
        },
        undefined,
        { shallow: true },
      );
    }
  }, [threadId, router.replace]);

  return { threadId, setThreadId, getThreadId };
};
