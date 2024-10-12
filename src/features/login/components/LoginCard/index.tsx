import { Box, Button, Card, TextField, Typography } from '@mui/material';

export const LoginCard = () => {
	return (
		<Card
			raised
			sx={{
				maxWidth: '400px',
				padding: '8px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '8px',
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
