import { useCallback, useState } from 'react';
import { postChatSSE } from '../api/postChatSSE';

export type SendChatArgument = {
  message: string;
  threadId?: string;
};

export type SendChatType = (arg: SendChatArgument) => Promise<string>;

export const useSendChat = () => {
  const [latestQuestion, setLatestQuestion] = useState<string>('');
  const [latestAnswer, setLatestAnswer] = useState<string>('');

  /**
   * チャットメッセージを送信する
   */
  const sendChat = useCallback(
    async ({ message, threadId }: SendChatArgument) => {
      setLatestQuestion(message);
      let newThreadId: string | undefined = undefined;

      try {
        await postChatSSE({
          message,
          threadId,
          onMessage: (text, threadId) => {
            setLatestAnswer(text);
            if (!newThreadId && threadId) {
              newThreadId = threadId;
            }
          },
        });

        return newThreadId;
      } catch (error) {
        console.error('Failed to send chat message:', error);
        throw new Error('Failed to send chat message');
      }
    },
    [],
  );

  /**
   * 最新の回答をクリアする
   */
  const clearLatestAnswer = useCallback(() => {
    setLatestAnswer('');
    setLatestQuestion('');
  }, []);

  return {
    latestQuestion,
    latestAnswer,
    sendChat,
    clearLatestAnswer,
  };
};
