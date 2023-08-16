import { AppProps } from 'next/app';
import Head from 'next/head';
import TemplateProvider from '@components/Templates/Provider/Provider';
import '@styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className="app">
        <TemplateProvider>
          <Component {...pageProps} />
        </TemplateProvider>
      </main>
    </>
  );
}

export default CustomApp;
