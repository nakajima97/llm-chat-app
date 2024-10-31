import { useChatHistory } from "../../hooks/useChatHistory"
import { useSendChat } from "../../hooks/useSendChat"
import { ChatMain } from "../ChatMain"

export const ChatMainContainer = () => {
  const { sendChat, latestAnswer } = useSendChat()
  const { chats, appendChats } = useChatHistory()

  return (
    <ChatMain sendChat={sendChat} latestAnswer={latestAnswer}/>
  )
}
