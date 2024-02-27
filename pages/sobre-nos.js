import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeaderNormal from '../components/header/HeaderNormal';
import TitleSection from '../components/heading/TitleSection';
import ParallaxImage from '../components/Image/ParallaxImage';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import List from '../components/list/List';
import DsnGrid from '../layout/DsnGrid';
import Layout from '../layout/Layout';
import BoxGallery, {
  BoxGalleryItem
} from '../components/box-gallery/BoxGallery';
import Team from '../components/Team/Team';
import Testimonial from '../components/testimonial/Testimonial';
import SwiperPagination from '../components/swiper-pagination/SwiperPagination';
import NextPage from '../components/next/NextPage';
import BrandClient from '../components/brand-client/BrandClient';
import Awards from '../components/awards/Awards';
import { getTeamData } from '../data/team';
import Service from '../components/services/Service';
import { getServiceData } from '../data/service';
import Image from 'next/image';
import ModalContact from '../components/model-right/ModalContact';
import Head from 'next/head';
import { ServiceGrid } from '../components/services/Service';
import { NakamaIcon } from '../components/Nakamaicon';

function About() {
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
        <title>Quem somos | Estúdio Nákama</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal className="">
        <p className="subtitle p-relative line-shape line-shape-after mb-30">
          <span className="background-section pl-10 pr-10">ESTUDIO NÁKAMA</span>
        </p>
        <h1 className="title text-uppercase">
          Marcas que conectam, <br />
          São marcas que marcam.
        </h1>
      </HeaderNormal>
      {/*========== End Header Normal ==========*/}
<main>
      {/*Start Parallax Img*/}
      <section className="overlay-nakama">
      <ParallaxImage
      priority
        alt={'Aderbal e Andre sorrindo'}
        src={'/img/sobre/hero.jpg'}
        parallaxFrom={{ scale: 1.3 }}
        parallax={{ scale: 1 }}
        overlay={3}
        
      />
      {/*End Parallax Img*/}
      </section>
      {/*<!-- ========== About Section ========== */}
      <div className="section-margin container" data-dsn-title="Sobre nós">
        <TitleSection
          className="mb-15"
          description={'O que e como fazemos'}
          defaultSpace={false}
        />
        <DsnGrid col={2} colTablet={1}>
          <div className="box-left pb-30">
            <h4>
              {' '}
              Acreditamos que: Saber “quem não somos”, é tão importante quanto a clareza de quem devemos ser!{' '}
            </h4>
            
          </div>
          <div className="box-right">
            <p className="pl-30 dsn-up mb-15 pb-30  ">
            Buscamos ir além do óbvio, explorando o terreno dos significados e
              da autenticidade para moldar marcas memoráveis e duradouras.{' '}<br/><br/>

              No Estúdio Nákama, acreditamos no poder das conexões autênticas
              para forjar “Marcas mais marcantes”.
            </p>

           
          </div>
        </DsnGrid>
        <ServiceGrid
          className="icon-left border-top pt-30  align-items-start p-0"
          iconOption={{
            className: 'background-main p-15 align-self-center'
          }}
          col={3}
          colTablet={1}
          colGap={75}
          data={[
            {
              icon: NakamaIcon,
              title: 'Imersão Profunda',
              description:
                'Não somos apenas prestadores de serviços; mergulhamos profundamente na essência de cada marca para compreender suas origens e direcionamento estratégico.'
            },
            {
              icon: NakamaIcon,
              title: 'Especialistas em Branding e Design',
              description:
                'Somos uma equipe de profissionais apaixonados por branding e design, focados em fornecer soluções personalizadas e inovadoras para cada desafio.'
            },
            {
              icon: NakamaIcon,
              title: 'Conexão Humana',
              description:
                ' Valorizamos os relacionamentos e a colaboração estreita com nossos clientes, trabalhando lado a lado para atingir metas e resultados excepcionais.'
            }
          ]}
        />
      </div>
      {/*<!-- ========== End About Section ========== */}

      {/*Start Gallery List*/}
      <BoxGallery className="section-margin container" col={2}>
        <BoxGalleryItem src="/img/sobre/box2.jpg" groupPopup="gallery" />
        <BoxGalleryItem src="/img/sobre/box1.jpg" groupPopup="gallery" />
      </BoxGallery>
      {/*End Gallery List*/}

      {/*Start awards Section*/}
      <section
        className="section-padding background-section"
        data-dsn-title="Serviços"
      >
        <div className="container">
          <TitleSection description="Nossos serviços">
            Oferecemos um leque de serviços especializados, carinhosamente
            chamados de:
          </TitleSection>
          <Service.grid
            className="icon-left important-services flex-column justify-content-start "
            styleBox="list"
            data={[
              {
                icon: NakamaIcon,
                title: 'Aura - Identidade e Posicionamento de Marca',
                description: ` Para estabelecer bases sólidas e criar uma identidade marcante que ressoa com seu público.`
              },
              {
                icon: NakamaIcon,
                title: 'Ambiente - Pontos de Contato e Experiência da Marca',
                description: `Criando experiências autênticas e impactantes para seus clientes em todos os pontos de contato. `
              },
              {
                icon: NakamaIcon,
                title: 'Autonomia - Consultoria de Gestão de Marcas',
                description: `Capacitando marcas para gerenciar e fortalecer suas identidades no mercado. `
              },              
            ]}
          />
        </div>
      </section>
      {/*End awards Section*/}

      {/*}
            <section className="awards-section section-margin" data-dsn-title="Awards">
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-left">
                            <TitleSection description={" Awards & Honors"} defaultSpace={false}>
                                The awards won by our project.
                            </TitleSection>
                            <Awards/>
                        </div>

                        <div className="box-right">
                            <div className="container-img p-relative">
                                <Image className="cover-bg-img" alt={""} src={"/img/agency-1.jpg"} width={1280}
                                       height={840}
                                       sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
                                />
                            </div>
                        </div>
                    </DsnGrid>
                </div>
            </section>
        */}

      {/*========== team Section ========== */}
      <section className="section-margin container " data-dsn-title="Equipe">
        <TitleSection description={'Nosso time'}>
          Especialistas em Branding, Design e Negócios.
        </TitleSection>

        <Team data={getTeamData().slice(0, 2)} col={2} colTablet={2} colMobile={2} colGap={20}
          rowGap={80} />
      </section>
      {/*========== End team Section ========== */}

      {/*Start testimonial Section*/}
      <div className="section-margin container" data-dsn-title="Depoimentos">
        <TitleSection description={' Feedback'}>O que dizem</TitleSection>

        <Testimonial
          className=" text-center"
          styleBox={'corner'}
          skin={['testimonials-personal', 'box-line']}
          centeredSlides
          desktop={{ slidesPerView: 3 }}
          tablet={{ slidesPerView: 1 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          autoHeight = {true}
          loopedSlides={2}
          parallax
          parallaxImage={{ 'data-swiper-parallax-scale': 0.7 }}
          parallaxContent={{
            'data-swiper-parallax-opacity': 0,
            'data-swiper-parallax': '30%'
          }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </Testimonial>
      </div>
      {/*End testimonial Section*/}

      {/*========== Start brand-client Section ==========*/}
      <section className="section-margin container" data-dsn-title="Clientes">
        <TitleSection description={'Nossos clientes'}>
          Seu sucesso, <br />
          Nossa reputação
        </TitleSection>

        <BrandClient col={4} colTablet={2} colGap={0} rowGap={0} />
      </section>
      {/*========== End brand-client Section ==========*/}

      {/*========== Start Next Page Section ==========*/}
      <NextPage className={`background-section section-padding`} />
      {/*========== End Next Page Section ==========*/}
      </main>
    </Layout>
  );
}

export default About;
