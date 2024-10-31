import type { SendChatType } from "../../hooks/useSendChat";
import { ChatForm } from "../ChatForm";

type Props = {
	sendChat: SendChatType;
}

export const ChatFormContainer = ({sendChat}: Props) => {
  const handleSendChat = () => {
    sendChat({ message: 'Hello' })
  }

  return (
    <ChatForm handleSendChat={handleSendChat}/>
  )
}