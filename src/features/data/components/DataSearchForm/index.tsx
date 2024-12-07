import { Box, Button, TextField, useTheme } from '@mui/material';

export const DataSearchForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: theme.spacing(1),
      }}
    >
      <TextField label="検索したい文字を入力" sx={{ flexGrow: 1 }} />
      <Button variant="contained" color="primary">
        検索
      </Button>
    </Box>
  );
};
