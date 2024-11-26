import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

export const LoginCard = () => {
  const theme = useTheme();

  return (
    <Card
      raised
      sx={{
        maxWidth: '400px',
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(1),
      }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Box>
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
    </Card>
  );
};
