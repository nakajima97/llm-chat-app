import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

export const DataList = () => {
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'タイトル', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: '詳細',
      width: 100,
      getActions: (params) => [
        <Button key={params.id} variant="outlined" color="primary">
          開く
        </Button>,
      ],
    },
  ];

  const rows = [
    { id: 1, title: 'Hello' },
    { id: 2, title: 'World' },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <DataGrid columns={columns} rows={rows} checkboxSelection />
    </Box>
  );
};
