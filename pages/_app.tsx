import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'public/static/css/bootstrap-v4-rtl.css';
import 'public/static/css/fonts.css';
import 'public/static/css/custom.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
