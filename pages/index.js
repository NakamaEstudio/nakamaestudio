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
          priority
          webgel
          fullWidth
          className={'align-items-end pb-80 overlay-nakama'}
          optionSlider={{
            autoplay: true,
            spaceBetween: 4,
            speed: 10000,
            parallax: true
          }}
          webgelOptions={{
            intensity: 3,
            priority: true,
            displacement: '/img/project/project1/Background.jpg',
            speedIn: 6
          }}
          metaData={{ hasSeparator: true }}
          autoplayDelayStart={2000} // 10 segundos de atraso antes de iniciar o autoplay
        />
      </section>
      <HeroSection className="section-margin fill-right-container container" data-dsn-title="Quem nós somos" />

      {/*Start Service*/}
      <div className="section-margin container" data-dsn-title="Como fazemos">
        <TitleSection className="align-items-center text-center" description={'O que fazemos'}>
          &quot;Acreditamos que: Saber “quem não somos”, é tão importante quanto a clareza de quem devemos ser!&quot;
        </TitleSection>
        <ServiceOne />
        <Button
          href={'/contato'}
          className="mb-30 line-head btn-project"
          borderStyle={'border-color-heading-color'}
          borderRadius
          transitionPage={{ title: HomeContent.buttonTransition }}
        >
          {HomeContent.buttonText}
        </Button>
      </div>
      {/*End Service*/}

      {/*Start Box Info Move Content*/}
      <div className="p-relative section-margin overlay-nakama">
        <ParallaxImage
          src="/img/home/marcantes.jpg"
          height="100vh"
          heightTable={'80vh'}
          heightMobile={'25vh'}
          className={''}
          overlay={6}
          alt={'Analogia da marca às marcas marcantes'}
        />
        <MoveBox tablet={false}>
          <TitleSection
            className={`align-items-start mb-30`}
            description={'O pleonasmo intencional'}
            defaultSpace={false}
          >
            MARCAS MARCANTES
          </TitleSection>

          <p className="mb-10">
            Acreditamos que o verdadeiro poder de uma marca está na conexão genuína com seu público.
          </p>
          <p className="mb-30">
        
        Construímos marcas não apenas para serem reconhecidas, mas para serem amadas e defendidas por seus seguidores, ou seja, para serem MARCANTES
          </p>

          <Button
            href={'sobre-nos'}
            className={'image-zoom'}
            data-dsn="parallax"
            transitionPage={{ title: 'Nákama Estudio' }}
          >
            Saiba mais <span>⟶</span>
          </Button>

          <p className={`sm-p mt-30 theme-color`}>
            NOTA : Marcas são posicionadas no detalhe, na postura diante das situações boas e ruins.
          </p>
        </MoveBox>
      </div>

      {/*End Box Info Move Content*/}
      <section className="box-gallery-vertical section-margin container" data-dsn-title="Nossos serviços">
        <DsnGrid col={2} colTablet={1} colGap={0} rowGap={0} rowGapTablet={0} rowGapMobile={0}>
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute overlay-nakama">
              <ParallaxImage
                alt={''}
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

      {/*End testimonial Section*/}

      {/*Start box vertical Section*/}

      {/*End box vertical Section*/}

      {/*Start Blog*/}
      <div className="section-margin" data-dsn-title="Postagens">
        <TitleSection className={`align-items-center  container text-center`} description={'Postagens'}>
          Últimos e mais relevantes posts <br />
        </TitleSection>
        <BlogSwiper
          className="dsn-container"
          grabCursor
          desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
          tablet={{ spaceBetween: 30, slidesPerView: 1.3 }}
          mobile={{ spaceBetween: 0, slidesPerView: 1 }}
          centeredSlides
          loop
          blur
          parallax
          speed={1200}
          watchSlidesProgress
          loopedSlides={2}
          parallaxImage={{ 'data-swiper-parallax-scale': '0.85' }}
          parallaxContent={{ 'data-swiper-parallax-opacity': '0.5' }}
        >
          <SwiperPagination className={`justify-content-between dsn-container mt-30`} />
        </BlogSwiper>
      </div>
      {/*End Blog*/}

      {/*========== team Section ========== */}
      {/* <section className="container section-margin " data-dsn-title="Nosso time">
                <TitleSection
                    className={` align-items-center text-center`}
                    description={"Nosso time"}
                >
                    O time Nákama Estúdio
                </TitleSection>

                <Team col={3} colTablet={2}/>
            </section>
        */}
      {/*========== End team Section ========== */}

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
