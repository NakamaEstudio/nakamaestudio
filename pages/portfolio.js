import React from 'react';
import HeaderNormal from '../components/header/HeaderNormal';
import Layout from '../layout/Layout';
import NextPage from '../components/next/NextPage';
import Portfolio from '../components/portfolio/Portfolio';
import ModalContact from '../components/model-right/ModalContact';
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
        <title>Portfólio | Estúdio Nákama</title>
      </Head>

      {/*========== Header Normal ========== */}
      <HeaderNormal
        backgroundColor="background-section"
        className="text-center"
      >
        <p className="subtitle p-relative line-shape  dsn-load-animate">
          <span className="background-main pl-10 pr-10">
            Projetos de Sucesso
          </span>
        </p>
        <h1 className="title text-uppercase">Seja mais um.</h1>
      </HeaderNormal>
      {/*========== End Header Normal ==========*/}

      <div className="section-margin container z-index-999">
        <Portfolio
          stylePortfolio={'work-section'}
          className="title-inherit h4"
          useFilter
          col={2}
          colGap={50}
          rowGap={80}
        />
      </div>

      {/*========== Start Next Page Section ==========*/}
      <NextPage className={`background-section section-padding`} />
      {/*========== End Next Page Section ==========*/}
      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Work;
