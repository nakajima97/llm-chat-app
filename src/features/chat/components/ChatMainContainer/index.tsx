import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSendChat } from '../../hooks/useSendChat';
import type { SendChatArgument } from '../../hooks/useSendChat';
import { useThreadMessages } from '../../hooks/useThreadMessages';
import { ChatMain } from '../ChatMain';

export const ChatMainContainer = () => {
  const {
    sendChat,
    latestQuestion,
    latestAnswer,
    currentThreadId,
    clearLatestAnswer,
  } = useSendChat();

  const router = useRouter();

  /**
   * ルータークエリからthreadIdを取得します。
   * @returns {string | undefined} 利用可能な場合、threadIdを返します。
   */
  const getThreadId = (): string | undefined => {
    const queryThreadId = router.query.thread;

    if (Array.isArray(queryThreadId)) {
      return queryThreadId[0];
    }
    return queryThreadId;
  };

  const threadId = getThreadId();

  const { fetchThreadMessages } = useThreadMessages();
  const { data, refetch } = fetchThreadMessages(threadId);
  const chatLog = data ?? [];

  /**
   * 現在のthreadIdでURLパラメータの値を更新する。
   */
  useEffect(() => {
    if (currentThreadId && router.query.thread !== currentThreadId) {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, thread: currentThreadId },
        },
        undefined,
        { shallow: true },
      );
    }
  }, [currentThreadId, router.pathname, router.replace, router.query]);

  /**
   * チャットメッセージを送信します。
   * @param {SendChatArgument} param0 - 送信するメッセージ。
   */
  const handleSendChat = ({ message }: SendChatArgument) => {
    const threadId = getThreadId();
    if (threadId) {
      refetch();
    }

    sendChat({ message, threadId });
    clearLatestAnswer();
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
