import ButtonProject from '../../components/button/ButtonProject';
import TitleSection from '../../components/heading/TitleSection';
import ParallaxImage from '../../components/Image/ParallaxImage';
import FJustifiedGallery from '../../components/justified-gallery/FJustifiedGallery';
import MoveBox from '../../components/move-box/MoveBox';
import DsnGrid from '../../layout/DsnGrid';
import Layout from '../../layout/Layout';
import { getPortfolioItem } from '../../data/portfolio';
import HeaderFull from '../../components/header/HeaderFull';
import NextProject from '../../components/next/NextProject';

function Project4() {
  const heroData = getPortfolioItem('gastrobeef');
  return (
    <Layout>
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
                <strong>Identidade Visual</strong>
              </li>
              <li className="p-relative">
                <strong>Clothing</strong>
              </li>
              <li className="p-relative">
                <strong>2020</strong>
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">INFORMAÇÕES</h4>
            <p className="intro-project-description">
            Um Restaurante especialista em cortes nobres, servindo pratos muito bem elaborados e
servidos por um atendimento atencioso e simpático.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">Restaurante </span>
              <span className="cat-item">Prime</span>
              <span className="cat-item">Interior Design</span>
            </div>
            <ButtonProject
              href="https://www.behance.net/gallery/98338319/Principal-Garden-I"
              target="_blank"
              className="mt-30"
            >
              Visitar projeto
            </ButtonProject>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      <FJustifiedGallery
        images={[
          {
            src: '/img/portfolio/gastrobeef/1.jpg',
            
          },
          {
            src: '/img/portfolio/gastrobeef/2.jpg',
            
          },
          
          {
            src: '/img/portfolio/gastrobeef/4.jpg',
            
          },
          {
            src: '/img/portfolio/gastrobeef/5.jpg',
            
          },
          
          {
            src: '/img/portfolio/gastrobeef/7.jpg',
            
          },
          {
            src: '/img/portfolio/gastrobeef/8.png',
            
          }          
        ]}
        className="section-margin"
      />

      {/*Start Box Info Move Content*/}
      <div className="p-relative section-margin v-light">
        <ParallaxImage
          src="/img/portfolio/gastrobeef/3.jpg"
          overlay={2}
          alt={''}
        />
        <MoveBox>
          <TitleSection
            className={`align-items-start mb-30`}
            defaultSpace={false}
          >
            A simple space for a wonderful family.
          </TitleSection>

          <p className="mb-10">
          A missão deste projeto é estabelecer a marca como referência no segmento de restaurantes especializados em cortes nobres. A visão é centrada na entrega de uma experiência gastronômica única, onde a beleza na apresentação e o sabor encantador dos pratos são oferecidos com simpatia e atenção no atendimento, seguindo o lema da empresa.
          </p>
          <p>
          Os valores fundamentais incluem um compromisso inabalável com o bom atendimento, honestidade, comprometimento, propósito claro, forte apelo visual e dedicação à gastronomia. Esses princípios são a espinha dorsal que guiará cada ação e decisão, permitindo que a marca alcance não apenas a excelência culinária, mas também estabeleça relações sólidas e duradouras com os clientes. 
          </p>
        </MoveBox>
      </div>
      {/*End Box Info Move Content*/}

      <NextProject
        heroContent={getPortfolioItem('procidade-case')}
        number={6}
      />
    </Layout>
  );
}

export default Project4;
