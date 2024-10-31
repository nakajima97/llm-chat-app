import { useCallback, useState } from 'react';

export type SendChatArgument = {
	message: string;
};

export type SendChatType = (arg: SendChatArgument) => void;

export const useSendChat = () => {
	const [latestAnswer, setLatestAnswer] = useState<string>('');

	/**
	 * チャットメッセージを送信する
	 */
	const sendChat = useCallback(async ({ message }: SendChatArgument) => {
		const response = await fetch(
			`http://localhost:8000/chat/sse?text=${message}`,
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

		while (true) {
			const { done, value } = await reader.read();

			// チャットが完了したら終了
			if (done) {
				break;
			}

			// チャットメッセージをデコード
			const foo = decoder.decode(value);
			setLatestAnswer((prev) => prev + foo);
		}
	}, []);

	/**
	 * 最新の回答をクリアする
	 */
	const clearLatestAnswer = useCallback(() => {
		setLatestAnswer('');
	}, []);

	return {
		latestAnswer,
		sendChat,
		clearLatestAnswer,
	};
};
