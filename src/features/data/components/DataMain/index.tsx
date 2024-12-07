import { Box, Button, useTheme } from '@mui/material';
import { DataAdd } from '../DataAdd';
import { DataSearchForm } from '../DataSearchForm';
import { DataList } from '../DataTable';

export const DataMain = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
      }}
    >
      <Box>
        <DataAdd />
      </Box>
      <Box>
        <DataSearchForm />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Button variant="outlined" color="error">
            チェックしたデータを削除
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="error">
            すべてのデータを削除
          </Button>
        </Box>
      </Box>
      <DataList />
    </Box>
  );
};
