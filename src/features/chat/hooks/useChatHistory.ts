import { useState } from "react";
import type { ChatHistoryType, ChatType } from "../types";

export const useChatHistory = () => {
  const [chats, setChats] = useState<ChatHistoryType>([]);

  const appendChats = (newChats: ChatType) => {
    setChats((prevChats) => [...prevChats, newChats]);
  }

  return {
    chats,
    appendChats
  };
}
