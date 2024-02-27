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
  const heroData = getPortfolioItem('brisapollar');
  return (
    <Layout>
      <Head>
        <title>Brisapollar Case | Estudio Nákama</title>
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
                <strong>Website</strong>
              </li>
              <li className="p-relative">
                <strong>2023</strong> 
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">INFORMAÇÕES</h4>
            <p className="intro-project-description">
            entrega de um ambiente fresco e relaxante, onde o frescor único se entrelaça ao aconchego personalizado. Fundamentada na confiança e qualidade, promove soluções inovadoras e sustentáveis, não apenas climatizando, mas também elevando o bem-estar dos clientes.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">Behavior</span>
              <span className="cat-item">Ambiente</span>
            </div>
            <ButtonProject
              href="https://www.brisapollar.com.br"
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
        src={'/img/portfolio/brisapollar/1.jpg'}
        
      />
      {/*End Parallax Img*/}

      {/*Start Gallery List*/}
      <div className="mt-section mb-sm-section has-in-halg-bg p-relative">
        <div className="p-absolute half-bg-bottom w-100 d-sm-none h-50 v-light bottom-0  left-0" />
        <div className="dsn-container">
          <BoxGallery col={2}>
            <BoxGalleryItem
              src="/img/portfolio/brisapollar/3.jpg"
              groupPopup="gallery"
            />
            <BoxGalleryItem
              src="/img/portfolio/brisapollar/4.jpg"
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
            Entendemos que a climatização é essencial para um ambiente confortável, produtivo e saudável.
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
              src="/img/portfolio/brisapollar/2.jpg"
              groupPopup="gallery"
            />
            <BoxGalleryItem
              src="/img/portfolio/brisapollar/6.jpg"
              groupPopup="gallery"
            />
          </BoxGallery>
        </div>
      </div>
      {/*End Gallery List*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        className="section-margin p-relative"
        alt={''}
        src={'/img/portfolio/brisapollar/7.jpg'}
       
      />
      {/*End Parallax Img*/}

      
      {/*End Gallery List*/}
      <NextProject
        heroContent={getPortfolioItem('dellavaz')}
        number={3}
      />
      </main>
    </Layout>
  );
}

export default Project10;
