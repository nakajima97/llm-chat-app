import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, TextField, useTheme } from '@mui/material';
import type { SendChatType } from '../../hooks/useSendChat';

type Props = {
	text: string;
	handleSendChat: () => void;
	handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChatForm = ({
	text,
	handleSendChat,
	handleChangeText
}: Props) => {
	const theme = useTheme();

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
			<TextField placeholder="聞きたいことを入れてね" sx={{ flexGrow: 1 }} value={text} onChange={handleChangeText}/>
			<IconButton onClick={handleSendChat}>
				<SendIcon/>
			</IconButton>
		</Box>
	);
};
