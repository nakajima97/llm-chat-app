import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, TextField, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import type { SendChatType } from '../../hooks/useSendChat';

type Props = {
	text: string;
	handleSendChat: () => void;
	handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const ChatForm = ({
	text,
	handleSendChat,
	handleChangeText,
	handleKeyDown,
}: Props) => {
	const theme = useTheme();
	const textFieldRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (textFieldRef.current) {
			textFieldRef.current.focus();
		}
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				padding: theme.spacing(1),
				gap: theme.spacing(1),
			}}
		>
			<TextField
				placeholder="聞きたいことを入れてね"
				sx={{ flexGrow: 1 }}
				value={text}
				onChange={handleChangeText}
				onKeyDown={handleKeyDown}
				inputRef={textFieldRef}
			/>
			<IconButton onClick={handleSendChat}>
				<SendIcon />
			</IconButton>
		</Box>
	);
};
