import { LoginCard } from '@/features/login/components/LoginCard';
import { Box } from '@mui/material';

export const LoginTemplate = () => {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100dvw',
        height: '100dvh',
      }}
    >
      <LoginCard />
    </Box>
  );
};
