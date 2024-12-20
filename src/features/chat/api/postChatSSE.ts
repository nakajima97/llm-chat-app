import { axiosInstance } from '@/lib/axios';

type PostChatSSEArgument = {
  message: string;
  threadId?: string;
};

/**
 * Sends a GET request to the `/chat/sse` endpoint to initiate a Server-Sent Events (SSE) connection.
 *
 * @param {PostChatSSEArgument} param - The argument object containing the message and optional threadId.
 * @param {string} param.message - The message to be sent.
 * @param {string} [param.threadId] - The optional thread ID to associate with the message.
 *
 * @returns {Promise<AxiosResponse<any>>} - A promise that resolves to the Axios response containing the SSE stream.
 */
export const postChatSSE = async ({
  message,
  threadId,
}: PostChatSSEArgument) => {
  return axiosInstance.get(
    `/chat/sse?text=${message}${threadId ? `&thread_id=${threadId}` : ''}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      responseType: 'stream',
    },
  );
};
