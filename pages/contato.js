import React from 'react';
import HeaderNormal from '../components/header/HeaderNormal';
import TitleSection from '../components/heading/TitleSection';
import Layout from '../layout/Layout';

import Map from '../components/Map/Map';
import DsnGrid from '../layout/DsnGrid';
import InfoBox from '../components/contact/InfoBox';
import ContactForm from '../components/contact/ContactForm';
import NextPage2 from '../components/next/NextPage2';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

function About() {
  TitleSection.defaultProps = {
    classDesc: 'line-shape line-shape-before',
    classDesInner: 'line-bg-right'
  };

  return (
    <Layout>
      <Head>
        <title>Fale conosco para evoluir sua marca</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal className="text-center">
        <p className="subtitle p-relative line-shape  mb-20">
          <span className="background-section pl-10 pr-10">ESTUDIO NÁKAMA</span>
        </p>
        <h1 className="title text-uppercase">
          Conecte-se
          <br /> conosco.
        </h1>
        <p className="dsn-heading-title mt-15 max-w570">
          Na tradição japonesa, o &quot;Nákama&quot; representa uma ligação
          especial entre pessoas unidas por um objetivo comum. É isso que
          buscamos aqui: estabelecer um elo sólido para entender suas
          necessidades e ajudar sua marca a alcançar seu potencial máximo.
        </p>
      </HeaderNormal>
      <main>
      {/*========== End Header Normal ==========*/}
      {/*Start Map*/}
      <Map
        mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
        zoom={10}
        height="80vh"
        defaultCenter={{ lat: -27.49417, lng: -48.65556 }}
      />

      {/*Start Contact Form && Info Box*/}
      <div className="section-margin container">
        <DsnGrid col={2} colTablet={1}>
          <ContactForm />
          <InfoBox className="align-self-center" />
        </DsnGrid>
      </div>

      {/*========== Start Next Page Section ==========*/}
      <NextPage2 className={`background-section section-padding`} />
      {/*========== End Next Page Section ==========*/}

      {/*========== Footer ==========*/}
      </main>
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default About;
