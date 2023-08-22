import { AppProps } from 'next/app';
import Head from 'next/head';
import IconsProvider from '@components/IconsProvider/Provider';
import TemplateProvider from '@components/Templates/Provider/Provider';
import '@styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className="app">
        <IconsProvider>
          <TemplateProvider>
            <Component {...pageProps} />
          </TemplateProvider>
        </IconsProvider>
      </main>
    </>
  );
}

export default CustomApp;
