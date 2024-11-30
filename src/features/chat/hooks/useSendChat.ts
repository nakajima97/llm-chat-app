import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export type SendChatArgument = {
  message: string;
  threadId?: string;
};

export type SendChatType = (arg: SendChatArgument) => void;

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

      const response = await fetch(
        `http://localhost:8000/chat/sse?text=${message}${optionalQuery}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
          },
        },
      );

      // エラーハンドリング
      if (!response.ok) {
        throw new Error('Failed to send chat message');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');

      if (!reader) {
        throw new Error('Failed to send chat message');
      }

      // 戻り値用にスレッドIDを初期化
      let currentThreadId = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!value) continue;

        const lines = decoder.decode(value);
        const jsons = lines
          .split('data: ') // 各行は data: というキーワードで始まる
          .map((line) => line.trim())
          .filter((s) => s); // 余計な空行を取り除く

        for (const json of jsons) {
          try {
            if (json === '[DONE]') {
              return; // 終端記号
            }
            const chunk = JSON.parse(json);
            const text = chunk.content;

            setLatestAnswer(text);

            // スレッドIDを保存
            if (!currentThreadId && chunk.thread_id) {
              currentThreadId = chunk.thread_id;
            }
          } catch (error) {
            console.error(error);
          }
        }
      }

      return currentThreadId;
    },
    [],
  );

  /**
   * 最新の回答をクリアする
   */
  const clearLatestAnswer = useCallback(() => {
    setLatestAnswer('');
  }, []);

  return {
    latestQuestion,
    latestAnswer,
    sendChat,
    clearLatestAnswer,
  };
};
