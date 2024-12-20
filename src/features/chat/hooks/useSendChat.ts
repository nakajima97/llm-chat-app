import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
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

      const optionalQuery = threadId ? `&thread_id=${threadId}` : '';
      let newThreadId: string | undefined = undefined;

      try {
        await axiosInstance.get(`/chat/sse?text=${message}${optionalQuery}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
          },
          responseType: 'stream',
          onDownloadProgress: (progressEvent) => {
            const chunk = progressEvent.event.target.response;
            if (!chunk) return;

            const lines = chunk
              .split('data: ')
              .map((line: string) => line.trim())
              .filter((s: string) => s);

            for (const json of lines) {
              try {
                if (json === '[DONE]') {
                  return;
                }
                const data = JSON.parse(json);
                const text = data.content;

                setLatestAnswer(text);

                if (!newThreadId && data.thread_id) {
                  newThreadId = data.thread_id;
                }
              } catch (error) {
                console.error('Error parsing JSON:', error);
              }
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
