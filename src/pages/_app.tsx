import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppCacheProvider>
			<CssBaseline />
			<Component {...pageProps} />
		</AppCacheProvider>
	);
}
