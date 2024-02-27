import React from 'react';
import HeaderNormal from '../components/header/HeaderNormal';
import Layout from '../layout/Layout';
import NextPage from '../components/next/NextPage';
import ModalContact from '../components/model-right/ModalContact';
import Blog from '../components/bolg/Blog';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

function Work() {
  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: 'Contact' }
      }}
    >
      <Head>
        <title>Blog | Estúdio Nákama</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal
        backgroundColor="background-section"
        className="text-center"
      >
        <p className="subtitle p-relative line-shape  dsn-load-animate">
          <span className="background-main pl-10 pr-10">
            {' '}
            Conteúdos e insights exclusivos por especialistas em Branding e
            Negócios{' '}
          </span>
        </p>
        <h1 className="title text-uppercase">Nosso blog</h1>
      </HeaderNormal>
      <main>

      <div className="section-margin container">
        <Blog rowGap={120} rowGapTablet={80} />
      </div>

      <NextPage className={`background-section section-padding`} />
      
      </main>
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Work;
