import React from 'react';
import Head from 'next/head';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';

interface IProps {
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

const MainLayout: React.FC<IProps> = ({ title, hasHeader = true, hasFooter = true, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </>
  );
};

export default MainLayout;
