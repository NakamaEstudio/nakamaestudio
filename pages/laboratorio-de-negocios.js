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
import LABlayout from './PADlayout';
import BgPAD from '../components/header/BgPAD';

import { Globo }  from '../public/img/pad/globo.png';
import { NakamaIcon } from '../components/Nakamaicon';
import TestimonialPad from '../components/testimonial/Testimonialpad';

export default function LAB () {
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
        <title>Talk-show: Laboratório de Negócios | Estúdio Nákama</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderPAD
        backgroundColor="background-section"
        className="text-center max-w-1/2"
      >
        <p className="subtitle p-relative line-shape   mb-30">
          <span className="pl-10 pr-10 background-main">Talk-Show Colaborativo</span>
        </p>
        <h1 className="title">
          Labotaratório de<strong> Negócios</strong>
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
          <TitleSection defaultSpace={false} description="Proposta do Encontro" />
          <h4 className="mt-25 mr-10">
          Conheça diversos experimentos de empreendedores, desde os triunfos até
as lições aprendidas, e transforme essas experiências em alavancas para o
crescimento do seu próprio negócio.
          </h4>
        </div>
        <div className="box-right">
          <TitleSection defaultSpace={false} description="Temas" />
          <ul className="mt-25">
            <li className="mb-15">Gestão Financeira</li>
            <li className="mb-15">Planejamento tributário</li>
            <li className="mb-15">Branding & Marketing</li>
            <li className="mb-15">Empreendedorismo</li>
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
            <TitleCover>Acesso Privilegiado</TitleCover>
            <TitleSection
              className="mb-30"
              description="Acesso Privilegiado "
              defaultSpace={false}
            >
              Diversidade de experimentos
de empreendedores
            </TitleSection>

            <ServiceGrid
              className=" p-0 border-top  pt-30 align-items-center"
              data={[
                {
                  description:
                    'Junte-se a uma comunidade dinâmica de empresários visionários da Grande Florianópolis, prontos para compartilhar suas estratégias, desafios superados e   soluções inovadoras.'
                }
              ]}
            />
          </div>
          <div className="p-relative box-left">
            <div className="box-im h-100  ">
            <video
  className="cover-bg-img overlay-nakama"
  autoPlay
  muted
  loop
  preload="metadata" // Carrega metadados primeiro (tamanho, duração, etc.)
  poster="img/pad/bannerone.png" // Mostra esta imagem até que o vídeo seja carregado
>
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
                <TitleCover>Keynotes:</TitleCover>
                <PADSection
                  className="text-left  "
                  tag="p"
                  dirDescription="after"
                  classDesInner="max-w570"
                  
                />
                <h4 className="mb-20  ">
                Keynotes:
          </h4>
            
          <ServiceGrid
              className=" border-top pb-30 pt-30  align-items-center p-0"
              
              data={[
                {
                 
                  title: 'Gestão Financeira ',
                  description:
                    'Alta performance nos negócios através de uma gestão financeira estratégica.'
                }
              ]}
            />
          <ServiceGrid
              className=" border-top pb-30 pt-30  align-items-center p-0"
              
              data={[
                {
                 
                  title: 'Planejamento tributário ',
                  description:
                    'Potencialize seus lucros e impulsione sua empresa para o sucesso: descubra o poder do planejamento tributário estratégico.'
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
            <ServiceGrid
              className=" border-top pb-30 pt-30  align-items-center p-0"
              
              data={[
                {
                 
                  title: 'Empreendedorismo ',
                  description:
                    'A importância da resiliência e da capacidade de adaptação no mundo dos negócios, especialmente em contextos de mudanças rápidas e imprevisíveis.'
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
        <div className="container ">
          <TitleSection
            className="text-center pb-50"
            description="Networking + Conhecimento + Cooperação"
            defaultSpace={false}
          >
           Programação do Encontro
          </TitleSection>
          <PADSection
            className="text-left mt-15"
            tag="p"
            dirDescription="after"
            classDesInner="max-w570"
            description="18:00h | Welcome Coffee. 

                                 "
          />
          <PADSection
            className="text-left mt-15"
            tag="p"
            dirDescription="after"
            classDesInner=""
            description="19:00h | Abertura
            

                                 "
          />
          <PADSection
            className="text-left mt-15"
            tag="p"
            dirDescription="after"
            classDesInner=""
            description="19:10h | Planejamento Tributário – Maiara Zacchi "
          />
          <PADSection
            className="text-left mt-15"
            tag="p"
            dirDescription="after"
            classDesInner=""
            description="19:30h | Gestão Financeira – Camila Dutra  "
          />
          <PADSection
            className="text-left mt-15"
            tag="p"
            dirDescription="after"
            classDesInner=""
            description="20:30h | Branding - Gestão de Marcas – Aderbal Amorin  "
          />
          <PADSection
            className="text-left mt-15 border-bottom pb-40"
            tag="p"
            dirDescription="after"
            classDesInner=""
            description="21:10h | Painel Experimentos de Sucesso e Aprendizados – Com Vanessa Moiseis e Fabrício Sousa  "
          />
          
          

          <ServiceGrid
            className="mt-50 p-0 text-center "
            data={[
              {
                icon: <Image src='/img/pad/globo.png' alt='Marca com Identidade Única' width={40} height={40} />,
                title: 'Palestras e Paineis',
               
              },
              {
                icon: <Image src='/img/pad/audiovisual.png' alt='Marca com Identidade Única' width={40} height={40} />,
                title: 'Networking',
             
              },
              {
                icon: <Image src='/img/pad/people.png' alt='Marca com Identidade Única' width={40} height={40} />,
                title: 'Co-Participação',
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
            
          <TitleCover>Painel</TitleCover>
            
            <h4 className="mb-30">
            Painel: Experimentos de
Sucesso e Aprendizados
            </h4>
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'p-15 '
              }}
              data={[
                {
                  icon: <Image src='/img/pad/section-logo.png' alt='Marca com Identidade Única' width={0} height={0}/>,
                  title: 'Fabricio Sousa - Fotógrafo',
                  description:
                    'Estúdio de Branding especializado em posicionamento e construção de Marcas.'
                }
              ]}
            />
             <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: ' p-15 '
              }}
              data={[
                {
                  icon: <Image src='/img/pad/zubi-ofc.png' alt='Marca com Identidade Única' width={0} height={0}/>,
                  title: 'Vanessa Moiseis - Empreendedora ',
                  description:
                    'Estúdio especializado em captação de conteúdo digital.'
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
          Keynotes e Realizadores
        </TitleSection>

        <Teampad
          data={getTeamPad().slice(0, 4)}
          className={'team-classic'}
          col={4}
          colTablet={2}
        />
      </section>

      {/*Start testimonial Section*/}
      
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
LAB.getLayout = (page) => (
  <LABlayout>
    {page}
  </LABlayout>
);



