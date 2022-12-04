import type { AppProps } from "next/app";
import { Layout } from "../components/core/Layout";

import { init } from "aos";
import { useEffect } from "react";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
	useEffect((): void => {
		init();
	});

	return (
		<Layout
			meta={{
				title: pageProps.title,
				description: pageProps.description
			}}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
