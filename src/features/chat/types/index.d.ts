export type Role = 'user' | 'assistant';

export type ChatType = {
	id: string;
	role: Role;
	message: string;
};

export type ChatHistoryType = ChatType[];

export type ThreadIdType = string | undefined;
