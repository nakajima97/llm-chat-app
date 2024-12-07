import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

export const DataList = () => {
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [<Button key={params.id}>詳細</Button>],
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
