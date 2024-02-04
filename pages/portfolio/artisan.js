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

function Project1() {
  const heroData = getPortfolioItem('artisan');
  return (
    <Layout>
      <Head>
        <title>Artisan Marcenaria Case | Estudio Nákama</title>
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
                <strong>Design de Interiores</strong>
              </li>
              <li className="p-relative">
                <strong>Pontos de Contato</strong>
              </li>
              <li className="p-relative">
                <strong>2019</strong> 
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">informações</h4>
            <p className="intro-project-description">
            A Artisan Marcenaria e Design é mais do que uma simples empresa de mobiliário personalizado - é a materialização da personalidade em cada detalhe. Fundada na ideia de trazer à vida espaços que contam histórias, cada projeto é uma obra de arte única, moldada pela habilidade artesanal e uma abordagem sofisticada. 
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">
              Identidade Visual
              </span>
              <span className="cat-item">Logotipo</span>
              <span className="cat-item">Materiais gráficos </span>
              <span className="cat-item">Uniforme</span>
            </div>
            <ButtonProject href="https://www.instagram.com/artisanmarcenaria/" className="mt-30">
              VISITAR PROJETO
            </ButtonProject>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={''}
        src={'/img/portfolio/artisan/sub-hero.jpg'}
        overlay={3}
        caption="Stationary"
      />
      {/*End Parallax Img*/}

      {/*Start Gallery List*/}
      <BoxGallery className="section-margin container" col={3}>
        <BoxGalleryItem
          src="/img/portfolio/artisan/3.jpg"
          groupPopup="gallery"
        />
        <BoxGalleryItem
          src="/img/portfolio/artisan/4.jpg"
          groupPopup="gallery"
        />
        <BoxGalleryItem
          src="/img/portfolio/artisan/5.jpg"
          groupPopup="gallery"
        />
      </BoxGallery>
      {/*End Gallery List*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
      priority
        alt={''}
        src={'/img/portfolio/artisan/8.gif'}
        caption="Crafting"
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
                src={'/img/portfolio/artisan/6.gif.gif'}
                height="100%"
              />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <TitleCover>Manifesto</TitleCover>
              <TitleSection
                className={'text-uppercase mb-30'}
                defaultSpace={false}
              >
                Manifesto
              </TitleSection>

              
              <p className="mt-15">
              Nossa missão é transcender o convencional, criando lares e ambientes comerciais que não apenas atendam às necessidades, mas celebrem a individualidade de cada cliente. Combinando precisão técnica com um olhar meticuloso para os detalhes, cada peça é um testemunho da paixão pelo artesanato e pelo design inovador. Na Artisan, a criação vai além do tangível - é a expressão autêntica do caráter e do estilo de vida, transformando espaços em experiências memoráveis.
              </p>
              
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*End box vertical Section*/}

      <NextProject heroContent={getPortfolioItem('brisapollar')} number={2} />
    </Layout>
  );
}

export default Project1;
