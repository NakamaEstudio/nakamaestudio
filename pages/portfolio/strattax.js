import BoxGallery, {
  BoxGalleryItem
} from '../../components/box-gallery/BoxGallery';
import ButtonProject from '../../components/button/ButtonProject';
import ParallaxImage from '../../components/Image/ParallaxImage';
import DsnGrid from '../../layout/DsnGrid';
import Layout from '../../layout/Layout';
import { getPortfolioItem } from '../../data/portfolio';
import HeaderFull from '../../components/header/HeaderFull';
import NextProject from '../../components/next/NextProject';
import Head from 'next/head';


function Project10(params) {
  const heroData = getPortfolioItem('strattax');
  return (
    <Layout>
      <Head>
        <title>Strattax Case | Estudio Nákama</title>
      </Head>
       <section class="overlay-nakama">
      <HeaderFull
        className="dsn-container"
        alignItems="end"
        heroContent={heroData}
        overlay={heroData.overlay}
      />
      </section>
      <main>

      {/*Start Intro Project*/}
      <section className="intro-project section-margin container">
        <DsnGrid customGrid={{ desktop: '40% 60%' }}>
          <div className="intro-project-left">
            <h4 className="title-block text-uppercase mb-20">Projeto</h4>
            <ul className="intro-project-list">
              <li className="p-relative">
                <strong>Identidade Visual</strong>
              </li>
              <li className="p-relative">
                <strong>Pontos de Contato</strong>
              </li>
              <li className="p-relative">
                <strong>2023</strong> 
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">INFORMAÇÕES</h4>
            <p className="intro-project-description">
            Estabelecer e consolidar uma identidade visual e de branding forte.
Criação de uma imagem coesa que transmita os valores, serviços e
características únicas da consultoria tributária.<br/><br/>
A busca é por uma presença marcante no mercado, destacando-se pela
especialização, comprometimento e personalização de serviços.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">Contabilidade</span>
              <span className="cat-item">Ambiente</span>
              <span className="cat-item">Poder</span>
            </div>
            <ButtonProject
              href="https://www.instagram.com/strattax/"
              target="_blank"
              className="mt-30"
            >
              Visitar projeto
            </ButtonProject>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={''}
        src={'/img/portfolio/strattax/2.jpg'}
        
      />
      {/*End Parallax Img*/}

      {/*Start Gallery List*/}
      <div className="mt-section mb-sm-section has-in-halg-bg p-relative">
        <div className="p-absolute half-bg-bottom w-100 d-sm-none h-50 v-light bottom-0  left-0" />
        <div className="dsn-container">
          <BoxGallery col={2}>
            <BoxGalleryItem
              src="/img/portfolio/strattax/3.jpg"
              groupPopup="gallery"
            />
            <BoxGalleryItem
              src="/img/portfolio/strattax/4.jpg"
              groupPopup="gallery"
            />
          </BoxGallery>
        </div>
      </div>
      {/*End Gallery List*/}

      {/*Start Intro Project*/}
      <section className="section-padding v-light text-center">
        <div className="container">
          <div className="max-w750 ml-auto mr-auto">
            <h4 className="title-block dsn-text words splitting mb-20 overflow-hidden">
              A essência
            </h4>
            <p className="dsn-up">
            Mais do que uma consultoria tributária; é um parceiro comprometido com o crescimento sustentável e a
proteção dos negócios. Através de uma abordagem centrada na prevenção e no equilíbrio tributário, buscamos
proporcionar clareza e segurança em um ambiente fiscal complexo. Acreditamos na importância da
transparência e sinceridade em nossas interações, oferecendo soluções personalizadas e estratégias
inteligentes que possibilitam que as empresas prosperem. Nossa especialização e agilidade nos permitem
navegar pelas nuances tributárias, garantindo a conformidade e a otimização financeira. Com uma visão de
negócios bem fundamentada e um compromisso inabalável com nossos clientes, nos esforçamos para criar um
ambiente de confiança e crescimento mútuo.
            </p>
          </div>
        </div>
      </section>
      {/*End Intro Project*/}

      {/*Start Gallery List*/}
      <div className="mb-section has-in-halg-bg p-relative mt-sm-section">
        <div className="p-absolute half-bg-bottom d-sm-none w-100 h-50 v-light left-0  top-0" />
        <div className="dsn-container">
          <BoxGallery col={2}>
            <BoxGalleryItem
              src="/img/portfolio/strattax/5.jpg"
              groupPopup="gallery"
            />
            <BoxGalleryItem
              src="/img/portfolio/strattax/6.png"
              groupPopup="gallery"
            />
          </BoxGallery>
        </div>
      </div>
      {/*End Gallery List*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        className="section-margin p-relative"
        alt={'Ponto de contato da marca'}
        src={'/img/portfolio/strattax/7.png'}
       
      />
      {/*End Parallax Img*/}

      
      {/*End Gallery List*/}
      <NextProject
        heroContent={getPortfolioItem('artisan')}
        number={1}
      />
      </main>
    </Layout>
  );
}

export default Project10;
