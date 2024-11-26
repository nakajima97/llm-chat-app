import { axiosInstance } from '@/lib/axios';
import type { ChatLogType, ThreadIdType } from '../types';

// APIのレスポンス型
type APIMessage = {
  id: string;
  updated_at: string;
  chat_thread_id: string;
  role_id: number; // 1: assistant, 2: user
  message: string;
  created_at: string;
};

type APIThreadResponse = APIMessage[];

/**
 * 引数の型定義
 * @property {string} threadId - スレッドのID
 */
type Arguments = {
  threadId: ThreadIdType;
};

/**
 * role_idをフロントエンドで使用するrole型に変換
 */
const convertRoleId = (roleId: number): 'assistant' | 'user' => {
  return roleId === 1 ? 'assistant' : 'user';
};

/**
 * APIレスポンスをフロントエンド用の型に変換
 */
const convertToFrontendFormat = (response: APIThreadResponse): ChatLogType => {
  return response.map((message) => ({
    id: message.id,
    role: convertRoleId(message.role_id),
    message: message.message,
  }));
};

/**
 * 指定されたスレッドIDに基づいてスレッドメッセージを取得する非同期関数
 * @param {Arguments} param0 - 引数オブジェクト
 * @returns {Promise<ChatLogType>} - スレッドメッセージのデータを含むPromise
 */
export const getThreadMessages = async ({ threadId }: Arguments) => {
  const response = await axiosInstance.get(`/threads/${threadId}`);
  return convertToFrontendFormat(response.data);
};
