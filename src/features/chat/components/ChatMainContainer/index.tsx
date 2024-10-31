import { useSendChat } from "../../hooks/useSendChat"
import { ChatMain } from "../ChatMain"

export const ChatMainContainer = () => {
  const { sendChat, latestAnswer } = useSendChat()

  return (
    <ChatMain sendChat={sendChat} latestAnswer={latestAnswer}/>
  )
}
