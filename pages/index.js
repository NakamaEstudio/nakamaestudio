import React from 'react';
import Layout from '../layout/Layout';
import SliderPortfolio from '../components/slider-portfolio/SliderPortfolio';
import HeroSection from '../components/hero-section/HeroSection';
import TitleSection from '../components/heading/TitleSection';
import ServiceOne from '../components/services/grid/ServiceOne';
import ParallaxImage from '../components/Image/ParallaxImage';
import MoveBox from '../components/move-box/MoveBox';
import Button from '../components/button/Button';
import PortfolioSwiper from '../components/portfolio/PortfolioSwiper';
import SwiperPagination from '../components/swiper-pagination/SwiperPagination';
import Testimonial from '../components/testimonial/Testimonial';
import Accordion, { AccordionItem } from '../components/accordion/Accordion';
import DsnGrid from '../layout/DsnGrid';
import TitleCover from '../components/heading/TitleCover';
import BlogSwiper from '../components/bolg/BlogSwiper';
import BrandClient from '../components/brand-client/BrandClient';

import NextPage from '../components/next/NextPage';
import Footer from '../components/footer/Footer';
import ModalContact from '../components/model-right/ModalContact';
import Head from 'next/head';
import Image from 'next/image';

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
      <Head>
        <title>Estudio Nákama - Branding e Design</title>
      </Head>
      <section className="overlay-nakama">
        <SliderPortfolio
          priority={true}
          webgel
          loop={true}
          fullWidth
          loading={true}
          className={'align-items-end pb-80 overlay-nakama'}
          optionSlider={{
            autoplay: true,
            spaceBetween: 2,
            speed: 5000,
            parallax: true,
           
          }}
          webgelOptions={{
            intensity: 1,
            priority: true,
            displacement: '/img/project/project1/14.jpg',
            speedIn: 3.5,
            loading: 'lazy'
          }}
          metaData={{ hasSeparator: true }}
          
        />
      </section>
      <HeroSection className="section-margin fill-right-container container" data-dsn-title="Quem nós somos" />

     

      

      {/*End Box Info Move Content*/}
      <section className="box-gallery-vertical section-margin container" data-dsn-title="Nossos serviços">
        <DsnGrid col={2} colTablet={1} colGap={0} rowGap={0} rowGapTablet={0} rowGapMobile={0}>
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute overlay-nakama">
              <ParallaxImage
                alt={'Camada de personalizada da marca'}
                loading="lazy"
                src={'/img/home/pilares.png'}
                overlay={1}
                height="100%"
                heightTable={'70vh'}
                heightMobile={'32vh'}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
              />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <DsnGrid className="box-info-inner" col={1} colGap={0}>
                <TitleCover>NÁKAMA</TitleCover>
                <TitleSection className={'text-uppercase'} description={'Serviços'} defaultSpace={false}>
                  Os 3 pilares do posicionamento
                </TitleSection>
                <Accordion>
                  <AccordionItem title="Aura - ID e Posicionamento de Marca" active number={1}>
                    <p>
                      Criamos a alma da sua marca, desde o diagnóstico inicial até o desenvolvimento do logotipo,
                      garantindo que sua identidade transmita a mensagem certa.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Ambiente - Pontos de Contato e Experiência da Marca" number={2}>
                    <p>
                      Desenvolvemos o ambiente onde sua marca interage com o público, seja por meio do design de
                      embalagens, do site e aplicativos, ou pela criação de estratégias de mídia social.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Autonomia - Consultoria de Gestão de Marcas" number={3}>
                    <p>
                      Oferecemos orientações estratégicas para o crescimento do seu negócio, desde o diagnóstico inicial
                      até o acompanhamento e medição dos resultados, garantindo que sua marca siga um caminho de
                      sucesso.
                    </p>
                  </AccordionItem>
                </Accordion>
              </DsnGrid>
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*Start Portfolio*/}
      <div className="section-margin" data-dsn-title="Cases de Sucesso">
        <TitleSection className={`align-items-center container text-center`} description={'Cases de Sucesso'}>
          Hall da fama do
          <br />
          Estúdio Nákama
        </TitleSection>
        <PortfolioSwiper
          grabCursor
          desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
          tablet={{ spaceBetween: 0, slidesPerView: 1.3 }}
          mobile={{ slidesPerView: 1 }}
          stylePortfolio="work-section"
          className="v-dark-head title-inherit h4 text-left"
          centeredSlides
          loop
          blur
          autoHeight={true}
          parallax
          speed={1200}
          watchSlidesProgress
          loopedSlides={2}
          parallaxImage={{ 'data-swiper-parallax-scale': '0.85' }}
          parallaxContent={{ 'data-swiper-parallax-opacity': '0' }}
        >
          <SwiperPagination autoHeight={true} className={`justify-content-between dsn-container mt-30`} />
        </PortfolioSwiper>
      </div>
      {/*End Portfolio*/}

      {/*Start testimonial Section*/}
      <div className="section-margin" data-dsn-title="O que falam">
        <Testimonial
          className="section-margin container"
          title="O que falam sobre nós."
          skin={['testimonials-half']}
          backgroundColor={'background-section'}
          desktop={{ slidesPerView: 2 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          loopedSlides={2}
          parallax
          parallaxImage={{ 'data-swiper-parallax-scale': 0.7 }}
          parallaxContent={{
            'data-swiper-parallax-opacity': 0,
            'data-swiper-parallax': '30%'
          }}
        >
          <SwiperPagination className={`justify-content-between dsn-container mt-30`} />
        </Testimonial>
      </div>

     

      {/*========== End brand-client Section ==========*/}
      <section className="section-margin container" data-dsn-title="Nossos clientes">
        <TitleSection className={`align-items-center text-center`} description={'Nossos clientes'}>
          Seu sucesso, <br />
          nossa reputação
        </TitleSection>

        <BrandClient col={4} colTablet={3} colMobile={3} colGap={0} rowGap={0} />
      </section>
      {/*========== End brand-client Section ==========*/}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Home;
