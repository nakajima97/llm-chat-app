import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSendChat } from '../../hooks/useSendChat';
import type { SendChatArgument } from '../../hooks/useSendChat';
import { useThreadMessages } from '../../hooks/useThreadMessages';
import { ChatMain } from '../ChatMain';

export type HandleSendChatType = (arg: SendChatArgument) => Promise<void>;

export const ChatMainContainer = () => {
  const [threadId, setThreadId] = useState<string | undefined>(undefined);

  const { sendChat, latestQuestion, latestAnswer, clearLatestAnswer } =
    useSendChat();

  const router = useRouter();

  useEffect(() => {
    const id = getThreadId();
    setThreadId(id);
  }, []);

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

  const { fetchThreadMessages } = useThreadMessages();
  const { data, refetch } = fetchThreadMessages(threadId);
  const chatLog = data ?? [];

  /**
   * 現在のthreadIdでURLパラメータの値を更新する。
   */
  useEffect(() => {
    const currentThreadId = getThreadId();
    if (currentThreadId && threadId && currentThreadId !== threadId) {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, threadId },
        },
        undefined,
        { shallow: true },
      );
    }
  }, [getThreadId, threadId, router.pathname, router.replace, router.query]);

  /**
   * チャットメッセージを送信します。
   * @param {SendChatArgument} param0 - 送信するメッセージ。
   */
  const handleSendChat = async ({ message }: SendChatArgument) => {
    const threadId = getThreadId();
    if (threadId) {
      refetch();
    }

    const latestThreadId = await sendChat({ message, threadId });
    clearLatestAnswer();

    if (latestThreadId !== threadId) {
      setThreadId(latestThreadId);
    }
  };

  return (
    <ChatMain
      sendChat={handleSendChat}
      latestQuestion={latestQuestion}
      latestAnswer={latestAnswer}
      chatLog={chatLog}
    />
  );
};
