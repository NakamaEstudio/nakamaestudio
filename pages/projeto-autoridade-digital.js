import Layout from '../layout/Layout';
import HeaderPAD from '../components/header/HeaderPAD';
import DsnGrid from '../layout/DsnGrid';
import TitleSection from '../components/heading/TitleSection';
import BgDot from '../components/header/BgDot';
import Facts from '../components/facts/Facts';
import TitleCover from '../components/heading/TitleCover';
import SwiperPagination from '../components/swiper-pagination/SwiperPagination';
import Testimonial from '../components/testimonial/Testimonial';
import ParallaxImage from '../components/Image/ParallaxImage';
import Accordion, { AccordionItem } from '../components/accordion/Accordion';
import { ServiceGrid } from '../components/services/Service';
import BrandTeam from '../components/padteam/BrandTeam';

import { getPadServiceData } from '../data/padservice';

import React from 'react';
import { getTeamPad } from '../data/teampad';
import Image from 'next/image';
import NextPage from '../components/next/NextPage';
import Footer from '../components/footer/Footer';
import ModalContact from '../components/model-right/ModalContact';
import Head from 'next/head';
import PADSection from '../components/heading/PADSection';
import Teampad from '../components/Team/Teampad';
import PADlayout from './PADlayout';
import BgPAD from '../components/header/BgPAD';

import { Globo }  from '../public/img/pad/globo.png';
import { NakamaIcon } from '../components/Nakamaicon';
import TestimonialPad from '../components/testimonial/Testimonialpad';

export default function PAD () {
  TitleSection.defaultProps = {
    classDesInner: 'line-bg-left'
  };
 
  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: 'Contato' }
      }}
    >
      <Head>
        <title>Projeto Autoridade Digital | Estúdio Nákama</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderPAD
        backgroundColor="background-section"
        className="text-center max-w-1/2"
      >
        <p className="subtitle p-relative line-shape   mb-30">
          <span className="pl-10 pr-10 background-main">Que tal</span>
        </p>
        <h1 className="title">
          Tornar-se uma <strong>Autoridade Digital</strong>?
        </h1>
      </HeaderPAD>
      {/*========== End Header Normal ==========*/}

      {/*========== About Section  ==========*/}
      <DsnGrid
        className="container section-margin  mx-auto"
        customGrid={{ desktop: '80% 20%' }}
        rowGapTablet={50}
        data-dsn-title="O que é"
      >
        <div className="box-left">
          <TitleSection defaultSpace={false} description="/imagine" />
          <h4 className="mt-25 mr-10">
            Imagine um cenário onde você não apenas está presente no mundo
            digital, mas se destaca como uma voz influente e respeitada. Um
            lugar onde sua marca brilha e é reconhecida como uma verdadeira
            autoridade em seu setor.
          </h4>
        </div>
        <div className="box-right">
          <TitleSection defaultSpace={false} description="Serviços" />
          <ul className="mt-25">
            <li className="mb-15">Branding & Design</li>
            <li className="mb-15">Audiovisual / Conteúdo digital</li>
            <li className="mb-15">Fotografia / Imagem pessoal</li>
            <li className="mb-15">Consultoria estratégica</li>
          </ul>
          
        </div>
        
      </DsnGrid>
      <BrandTeam
          col={3}
          colTablet={0}
          colMobile={0}
          colGap={1}
          rowGap={0}
         className={ `mb-50 mt--50 flex`} />
        <TitleSection
          className={`align-items-center text-center`}
          
        >
          Toda equipe reunida soma mais de:
        </TitleSection>
      {/*========== End About Section  ==========*/}
     
      {/*<!-- ========== facts-section ==========*/}
      <div className="section-margin p-relative">
       
        
        <div className="container">
          <Facts className="text-center" col={3} colTablet={1} />
        </div>
      </div>
      {/*<!-- ========== end facts-section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative background-section section-padding"
        data-dsn-title="Desafio"
      >
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-right">
            <TitleCover>Projeto Autoridade Digital</TitleCover>
            <TitleSection
              className="mb-30"
              description="Desafio Digital: "
              defaultSpace={false}
            >
              Posicionar-se como Autoridade
            </TitleSection>

            <ServiceGrid
              className=" p-0 border-top  pt-30 align-items-center"
              data={[
                {
                  description:
                    'Nossos dias são dominados pela era digital, e estar presente nesse ambiente é crucial. No entanto, muitos se deparam com o dilema: Como se posicionar como uma autoridade em meio a tantas vozes? É aqui que entra o nosso serviço.'
                }
              ]}
            />
          </div>
          <div className="p-relative box-left">
            <div className="box-im h-100  ">
            <video className="cover-bg-img overlay-nakama" autoPlay muted loop>
    <source src="/img/video/padvideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
            </div>
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}
      <section
        className="box-gallery-vertical section-margin container"
        data-dsn-title="Proposta"
      >
        <DsnGrid
          col={2}
          colTablet={1}
          colGap={0}
          rowGap={0}
          rowGapTablet={0}
          rowGapMobile={0}
        >
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={''}
                src={'img/pad/bannerone.png'}
                overlay={3}
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
                <TitleCover>PAD</TitleCover>
                <PADSection
                  className="text-left  "
                  tag="p"
                  dirDescription="after"
                  classDesInner="max-w570"
                  description="Unimos os esforços de três empresas especializadas, cada uma trazendo suas habilidades únicas para a mesa. Juntos, lapidamos seu conteúdo, levando sua mensagem mais longe de maneira estratégica e coesa. Nossa abordagem é colaborativa, orientada para resultados e adaptada às suas necessidades. "
                />
                <h4 className="mb-20  ">
                Unimos esforços para potencializar conquistas. 
          </h4>
            
          <ServiceGrid
              className=" border-top pb-30 pt-30  align-items-center p-0"
              
              data={[
                {
                 
                  title: 'Branding ',
                  description:
                    'Plano estratégico de posicionamento, ID visual e materiais de apoio.'
                }
              ]}
            />
          <ServiceGrid
              className=" border-top pb-30 pt-30  align-items-center p-0"
              
              data={[
                {
                 
                  title: 'Audiovisual ',
                  description:
                    'Gravação de conteúdio digital: Videocast e livestream, Vídeoaulas, cortes, Vídeo de posicionamento digital.'
                }
              ]}
            />
          <ServiceGrid
              className=" border-top pb-30 pt-30  align-items-center p-0"
              
              data={[
                {
                 
                  title: 'Imagem pessoal ',
                  description:
                    'Retrato de posicionamento estratégico, construção de Narrativa visual e Vídeo Marketing.'
                }
              ]}
            />
              </DsnGrid>
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*<!-- ========== About section ========== */}

      {/*<!-- ========== End About section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative background-section section-padding"
        data-dsn-title="Abordagem Integrada"
      >
        <div className="container">
          <TitleSection
            className="text-center"
            description="A pergunta de ouro,"
            defaultSpace={false}
          >
            Por que escolher uma abordagem integrada?
          </TitleSection>
          <PADSection
            className="text-center mt-15"
            tag="p"
            dirDescription="after"
            classDesInner="max-w570"
            description="Acreditamos que ações isoladas não alcançam resultados duradouros nem exploram todo o potencial de uma marca e dificultam o gerenciamento. 

                                 "
          />
          <TitleSection
            className="text-center border-bottom pb-50 "
            tag="p"
            dirDescription="after"
            classDesInner="max-w570"
            description=" 

                                  Unir Branding, Audiovisual e Imagem Pessoal cria uma sinergia poderosa, construindo uma base sólida para sua autoridade digital."
          />

          <ServiceGrid
            className="mt-50 p-0 text-center "
            data={[
              {
                icon: <Image src='/img/pad/globo.png' alt='Marca com Identidade Única' width={40} height={40} />,
                title: 'Branding',
               
              },
              {
                icon: <Image src='/img/pad/audiovisual.png' alt='Marca com Identidade Única' width={40} height={40} />,
                title: 'Audiovisual',
             
              },
              {
                icon: <Image src='/img/pad/people.png' alt='Marca com Identidade Única' width={40} height={40} />,
                title: 'Imagem pessoal',
                }
            ]}
            col={3}
            colTablet={2}
            colGap={50}
            
          />
          
        </div>
      </div>
      {/*<!-- ========== End About section ========== */}
      <div
        className="p-relative section-margin"
        data-dsn-title="Proposta"
      >
        <DsnGrid className="container" col={2} colTablet={1}>
         
          <div className="p-relative background-section p-40 order-md-2">
            

            
            <h4 className="mb-30">
            Reunimos especialistas
em três pilares fundamentais:
            </h4>
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'p-15 '
              }}
              data={[
                {
                  icon: <Image src='/img/pad/section-logo.png' alt='Marca com Identidade Única' width={0} height={0}/>,
                  title: 'Estúdio nákama',
                  description:
                    'Estúdio de Branding especializado em posicionamento e construção de Marcas.'
                }
              ]}
            />
             <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: ' p-20 '
              }}
              data={[
                {
                  icon: <Image src='/img/pad/zubi-ofc.png' alt='Marca com Identidade Única' width={0} height={0}/>,
                  title: 'ZUBI estúdio ',
                  description:
                    'Estúdio especializado em captação de conteúdo digital.'
                }
              ]}
            />
             <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: ' p-10 '
              }}
              data={[
                {
                  icon: <Image src='/img/pad/fabimidia2.png' alt='Marca com Identidade Única' width={0} height={0}/>,
                  title: 'Fabmidia ',
                  description:
                    'Fotógrafo especializado em posicionamento de imagem.'
                }
              ]}
            />
            
          </div>
          <div className="p-relative ">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={''}
                src={'img/pad/estudiotime.jpg'}
                overlay={3}
                height="100%"
                heightTable={'70vh'}
                heightMobile={'32vh'}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
              />
            </div>
          </div>
        </DsnGrid>
      </div>
      {/*========== team Section ========== */}
      <section
        className="container section-margin "
        data-dsn-title="Especialistas"
      >
        <TitleSection description={'Quem são os'}>
          Especialistas
        </TitleSection>

        <Teampad
          data={getTeamPad().slice(0, 4)}
          className={'team-classic'}
          col={4}
          colTablet={2}
        />
      </section>

      {/*Start testimonial Section*/}
      <div className="section-margin" data-dsn-title="O que falam">
        <TestimonialPad
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
            'data-swiper-parallax': '60%'
          }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </TestimonialPad>
      </div>
      {/*========== End team Section ========== */}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
      
    </Layout>
   
  );
  
}
PAD.getLayout = (page) => (
  <PADlayout>
    {page}
  </PADlayout>
);



