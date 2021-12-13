import { AppProps } from 'next/app';
import Head from 'next/head';
import TopHeader from '../components/top-header/top-header';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The New York Times</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-serif pb-16">
        <TopHeader></TopHeader>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
