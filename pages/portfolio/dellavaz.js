import BoxGallery, {
  BoxGalleryItem
} from '../../components/box-gallery/BoxGallery';
import Button from '../../components/button/Button';
import ButtonProject from '../../components/button/ButtonProject';
import TitleCover from '../../components/heading/TitleCover';
import TitleSection from '../../components/heading/TitleSection';
import ParallaxImage from '../../components/Image/ParallaxImage';
import DsnGrid from '../../layout/DsnGrid';
import Layout from '../../layout/Layout';
import HeaderFull from '../../components/header/HeaderFull';
import { getPortfolioItem } from '../../data/portfolio';
import NextProject from '../../components/next/NextProject';
import Head from 'next/head';

function Project8() {
  const heroData = getPortfolioItem('dellavaz');
  return (
    <Layout>
      <Head>
        <title>DellavazBoutique Case | Estudio Nákama</title>
      </Head>
      <section class="overlay-nakama">
      <HeaderFull
        className="dsn-container"
        alignItems="end"
        heroContent={heroData}
        overlay={heroData.overlay}
      />
      </section>

      {/*Start Intro Project*/}
      <section className="intro-project section-margin container">
        <DsnGrid customGrid={{ desktop: '40% 60%' }}>
          <div className="intro-project-left">
            <h4 className="title-block text-uppercase mb-20">Projeto</h4>
            <ul className="intro-project-list">
            
              <li className="p-relative">
                <strong>Direção de Arte</strong>
              </li>
              <li className="p-relative">
                <strong>Identidade Visual</strong>
              </li>
              <li className="p-relative">
                <strong>Storytelling</strong>
              </li>
              <li className="p-relative">
                <strong>Mercado</strong>
              </li>
              <li className="p-relative">
                <strong>2022</strong> 
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">informações</h4>
            <p className="intro-project-description">
            Posicionamento da marca DellaVaz Boutique de acordo com
sua nova postura de mercado. Criando
narrativas e uma Identidade visual coerente.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">
              Elegancia
              </span>
              <span className="cat-item">Premium</span>
             
              <span className="cat-item">Grife</span>
            </div>
            <ButtonProject href="https://www.instagram.com/dellavazboutique/" className="mt-30">
              VISITAR PROJETO
            </ButtonProject>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={''}
        src={'/img/portfolio/dellavaz/6.jpg'}
        overlay={3}
        caption="Uniforme"
      />
      {/*End Parallax Img*/}

     

      
      {/*Start box vertical Section*/}
      <section className="box-gallery-vertical section-margin container">
        <DsnGrid col={2} colGap={0}>
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
              priority
                alt={''}
                src={'/img/portfolio/dellavaz/3.jpg'}
                height="100%"
              />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <TitleCover>Depoimento</TitleCover>
              <TitleSection
                className={'text-uppercase mb-30'}
                defaultSpace={false}
              >
               Construindo <br/>o seu sucesso
              </TitleSection>

              
              <p className="mt-15">
              &quot;Com certeza a melhor escolha que fizemos para nossa empresa e marca.
Profissionais do começo ao fim com foco nos objetivos do cliente.
Agradeço por tudo e super recomendo o trabalho de voces. Parabens e sucesso!&quot;<br/><br/> 

<strong>Ricky</strong>
              </p>
              
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*Start Parallax Img*/}
      <ParallaxImage
      priority
        alt={''}
        src={'/img/portfolio/dellavaz/4.jpg'}
        caption="Outdoor"
      />
      {/*End Parallax Img*/}
      {/*End box vertical Section*/}
 {/*Start Gallery List*/}
 <BoxGallery className="section-margin container" col={3}>
        <BoxGalleryItem
          src="/img/portfolio/dellavaz/2.jpg"
          groupPopup="gallery"
        />
        <BoxGalleryItem
          src="/img/portfolio/dellavaz/7.png"
          groupPopup="gallery"
        />
        <BoxGalleryItem
          src="/img/portfolio/dellavaz/5.jpg"
          groupPopup="gallery"
        />
      </BoxGallery>
      {/*End Gallery List*/}
      

      <NextProject heroContent={getPortfolioItem('ecosintese')} number={3} />
    </Layout>
  );
}

export default Project8;
