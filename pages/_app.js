import Layout from '../components/layouts/Layout';
import '../styles/globals.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'fallback',
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>
				{`
					html {
						font-family: ${poppins.style.fontFamily};
					}
				`}
			</style>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
