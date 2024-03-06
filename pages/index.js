import React from 'react';
import Layout from '../layout/Layout';
import SliderPortfolio from '../components/slider-portfolio/SliderPortfolio';
import HeroSection from '../components/hero-section/HeroSection';
import TitleSection from '../components/heading/TitleSection';

import ServicesSection from '../components/homesplitting/servicessection';



import BrandClient from '../components/brand-client/BrandClient';

import NextPage from '../components/next/NextPage';
import Footer from '../components/footer/Footer';
import ModalContact from '../components/model-right/ModalContact';
import TestimonialsSection from '../components/homesplitting/testimonialssection';
import PortfolioSection from '../components/homesplitting/portfoliosection';
import dynamic from 'next/dynamic'
import LoadingPage from '../layout/LoadingPage';

const Slider = dynamic(() => import('../components/homesplitting/slidersection'), {
  loading: () => <LoadingPage />,
})

function Home() {
  const HomeContent = {
    buttonText: 'Vamos iniciar um projeto?',
    buttonTransition: 'Se surpreenda'
  };
  TitleSection.defaultProps = {
    classDesc: 'line-shape line-shape-before',
    classDesInner: 'line-bg-right'
  };

  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: 'Contato' }
      }}
    >     
    <main>
      <Slider/>
      <HeroSection className="section-margin fill-right-container container" data-dsn-title="Quem nós somos" />

      {/*End Box Info Move Content*/}
      <ServicesSection />
      {/*Start Portfolio*/}
     <PortfolioSection/>
      {/*End Portfolio*/}

      {/*Start testimonial Section*/}
      
<TestimonialsSection />
      {/*========== End brand-client Section ==========*/}
      <section className="section-margin container" data-dsn-title="Nossos clientes">
        <TitleSection className={`align-items-center text-center`} description={'Nossos clientes'}>
          Seu sucesso, <br />
          nossa reputação
        </TitleSection>

        <BrandClient col={4} colTablet={3} colMobile={2} colGap={5} rowGap={0} />
      </section>
      {/*========== End brand-client Section ==========*/}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      </main>
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Home;
