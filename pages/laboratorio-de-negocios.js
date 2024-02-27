import Layout from '../layout/Layout';
import HeaderLAB from '../components/header/HeaderLAB';
import DsnGrid from '../layout/DsnGrid';
import TitleSection from '../components/heading/TitleSection';
import Lightbox from "yet-another-react-lightbox";
import TitleCover from '../components/heading/TitleCover';

import ParallaxImage from '../components/Image/ParallaxImage';

import { ServiceGrid } from '../components/services/Service';
import LabTeam from '../components/labteam/LabTeam';

import React from 'react';
import { getTeamLab } from '../data/teamlab';
import Image from 'next/image';
import NextPage from '../components/next/NextPage';
import Footer from '../components/footer/Footer';
import ModalContact from '../components/model-right/ModalContact';
import Head from 'next/head';
import PADSection from '../components/heading/PADSection';
import Teamlab from '../components/Team/Teamlab';
import LABlayout from './LABlayout';
import BgPAD from '../components/header/BgPAD';
import FJustifiedGallery from "../components/justified-gallery/FJustifiedGallery";
import { Globo } from '../public/img/pad/globo.png';
import { NakamaIcon } from '../components/Nakamaicon';
import TestimonialPad from '../components/testimonial/Testimonialpad';
import FactsLab from '../components/facts/FactsLab';
import Button from '../components/button/Button';

export default function LAB() {
  TitleSection.defaultProps = {
    classDesInner: 'line-bg-left'
  };
  const [open, setOpen] = React.useState(false);

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
      <HeaderLAB backgroundColor="background-section" className="text-center max-w-1/2">
        <p className="subtitle p-relative line-shape   mb-30">
          <span className="pl-10 pr-10 background-main">Talk-Show Colaborativo</span>
        </p>
        <h1 className="title">Laboratório de Negócios</h1>
      </HeaderLAB>
      {/*========== End Header Normal ==========*/}
      <main>
      {/*========== About Section  ==========*/}
      <DsnGrid
        className="container section-margin "
        customGrid={{ desktop: '80% 20%' }}
        rowGapTablet={50}
        data-dsn-title="O que é"
      >
        <div className="box-left ">
          <TitleSection defaultSpace={false} description="Proposta do Encontro" />
          <h4 className="mt-25 mr-30">
            Conheça diversos experimentos de empreendedores, desde os triunfos até as lições aprendidas, e transforme
            essas experiências em alavancas para o crescimento do seu próprio negócio.
          </h4>
          <Button
            href="#"
            className="mt-30 "
           
          >
            Em breve
          </Button>
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
      <section>
      <Image src={'/img/lab/evento/LN_048.jpg'} class={'pt-20 border-top lab-image '} alt={'Palestrantes do evento'} width={400} height={0}></Image>
      <button className="lightbox-btn dsn-button mb-50 " type="button" onClick={() => setOpen(true)}>
        <span className="dsn-border border-color-heading-color ">Confira as fotos do último evento</span>
      </button>

      

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/img/lab/evento/LN_048.jpg" },
          { src: "/img/lab/evento/LN_001.jpg" },
          { src: "/img/lab/evento/LN_062.jpg" },
          { src: "/img/lab/evento/LN_058.jpg" },
          { src: "/img/lab/evento/LN_059.jpg" },
          { src: "/img/lab/evento/LN_068.jpg" },
          { src: "/img/lab/evento/LN_069.jpg" },
          { src: "/img/lab/evento/LN_076.jpg" },
          { src: "/img/lab/evento/LN_100.jpg" },
          { src: "/img/lab/evento/LN_123.jpg" },
          { src: "/img/lab/evento/LN_135.jpg" },
          { src: "/img/lab/evento/LN_143.jpg" },
        ]}
      />
      <FJustifiedGallery
                images={[
                    {
                      
                        src: "/img/lab/evento/LN_048.jpg",
                       

                    },
                    {
                      
                        src: "/img/lab/evento/LN_001.jpg",
                       

                    },
                    
                    {
                      
                        src: "/img/lab/evento/LN_062.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_059.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_068.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_069.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_076.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_100.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_123.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_135.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_143.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_100.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_148.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_155.jpg",
                       

                    },
                    {
                        src: "/img/lab/evento/LN_161.jpg",
                       

                    },
                  
                    
                    
                ]}
                
                className="section-margin gallery-displaynone"
            />
           
            
          </section>
    <TitleSection className={`align-items-center text-center`}>Realização</TitleSection>
     <LabTeam col={4} colTablet={0} colMobile={0} colGap={1} rowGap={0} className={`mb-50 mt--50 flex`} />

      {/*========== End About Section  ==========*/}

      {/*<!-- ========== facts-section ==========*/}
      <div className="section-margin p-relative">
        <div className="container">
          <FactsLab className="text-center" col={2} colTablet={1} />
        </div>
      </div>
      {/*<!-- ========== end facts-section ========== */}

      {/*<!-- ========== About section ========== */}
      <div className="p-relative background-section section-padding" data-dsn-title="Desafio">
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-right">
            <TitleCover>VIP</TitleCover>
            <TitleSection className="mb-30" description="Acesso Privilegiado " defaultSpace={false}>
              Diversidade de experimentos de empreendedores
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
             <Image src={'img/lab/timetodo.jpg'} alt={'test'} width={600} height={100}
                />
            </div>
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}
      <section className="box-gallery-vertical section-margin container" data-dsn-title="Proposta">
        <DsnGrid col={2} colTablet={1} colGap={0} rowGap={0} rowGapTablet={0} rowGapMobile={0}>
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={''}
                src={'img/lab/teste.webp'}
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
                <PADSection className="text-left  " tag="p" dirDescription="after" classDesInner="max-w570" />
                <h4 className="mb-20  ">Keynotes:</h4>

                <ServiceGrid
                  className=" border-top pb-30 pt-30  align-items-center p-0"
                  data={[
                    {
                      title: 'Gestão Financeira ',
                      description: 'Alta performance nos negócios através de uma gestão financeira estratégica.'
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
      {/*}
      <div className="p-relative background-section section-padding" data-dsn-title="Abordagem Integrada">
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
        </div>
      </div>
                */}
      {/*<!-- ========== End About section ========== */}
      <div className="p-relative section-margin" data-dsn-title="Proposta">
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative background-section p-40 order-md-2">
           

            <h4 className="mb-30">Painel: Experimentos de Sucesso e Aprendizados</h4>
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'p-15 '
              }}
              data={[
                {
                  icon: <Image src="/img/pad/fabimidia2.png" alt="Marca da Fabimidia" width={0} height={0} />,
                  title: 'Fabricio Sousa - Fotógrafo',
                  description: 'Fotógrafo e videomaker há 19 anos, é especialista em retratos e vídeos de posicionamento estratégico de imagem, com forte embasamento em marketing, contribuindo para o crescimento das marcas de vários empreendedores no digital.'
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
                  icon: <Image src="/img/lab/vanessa.png" alt="Marca da Vanessa" width={0} height={0} />,
                  title: 'Vanessa Moiseis - Empreendedora ',
                  description: 'Empreendedora na região da Grande Florianópolis, destacando-se no ramo de vestuário, com faturamento anual superior a 2 milhões de reais. Em uma trajetória de sucesso, ela compartilha valiosos aprendizados sobre como despertar o desejo de compra através do Instagram.'
                }
              ]}
            />
          </div>
          <div className="p-relative ">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={''}
                src={'img/lab/duplalab.jpg'}
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
      <section className="container section-margin " data-dsn-title="Especialistas">
        <TitleSection description={'Especialistas'}>Keynotes e Realizadores</TitleSection>

        <Teamlab data={getTeamLab().slice(0, 4)} className={'team-classic'} col={4} colTablet={3} colMobile={2} colGap={0} rowGap={20} />
      </section>

      {/*Start testimonial Section*/}
      {/*}
      <section className="background-section p-40 mb-50 text-center container">
        <h4 className=" ">Garanta sua vaga!</h4>
        <PADSection
          className="text-center mt-15 max-w750"
          tag="p"
          dirDescription="after"
          classDesInner=""
          description="Junte-se a uma comunidade de empreendedores e descubra
          insights valiosos para impulsionar o seu negócio. "
        />
        <Button
          href="#"
         
        >
         Em breve
        </Button>
      </section>
            */}
      {/*========== End team Section ========== */}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}
      </main>
      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}
LAB.getLayout = (page) => <LABlayout>{page}</LABlayout>;
