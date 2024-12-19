import { useSendChat } from '../../hooks/useSendChat';
import type { SendChatArgument } from '../../hooks/useSendChat';
import { useThreadId } from '../../hooks/useThreadId';
import { useThreadMessages } from '../../hooks/useThreadMessages';
import { ChatMain } from '../ChatMain';

export type HandleSendChatType = (arg: SendChatArgument) => Promise<void>;

export const ChatMainContainer = () => {
  const { sendChat, latestQuestion, latestAnswer, clearLatestAnswer } =
    useSendChat();

  const { threadId, setThreadId, getThreadId } = useThreadId();

  const { fetchThreadMessages } = useThreadMessages();
  const { data, refetch } = fetchThreadMessages(threadId);
  const chatLog = data ?? [];

  /**
   * チャットメッセージを送信します。
   * @param {SendChatArgument} param0 - 送信するメッセージ。
   */
  const handleSendChat = async ({ message }: SendChatArgument) => {
    const threadId = getThreadId();
    if (threadId) {
      refetch();
      clearLatestAnswer();
    }

    const latestThreadId = await sendChat({ message, threadId });

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
