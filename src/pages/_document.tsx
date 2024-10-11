import {
	DocumentHeadTags,
	documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter';
import { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import type { DocumentProps } from 'next/document';

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
	return (
		<Html lang="ja">
			<Head>
				<DocumentHeadTags {...props} emotionStyleTags={[]} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

Document.getInitialProps = async (ctx: DocumentContext) => {
	const finalProps = await documentGetInitialProps(ctx);
	return finalProps;
};
