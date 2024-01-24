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

function Project6(params) {
  const heroData = getPortfolioItem('famillevet');
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
                <strong>Branding</strong>
              </li>
              <li className="p-relative">
                <strong>Pontos de Contato</strong>
              </li>
              <li className="p-relative">
                <strong>2020</strong> 
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">INFORMAÇÕES</h4>
            <p className="intro-project-description">
            Uma clínica veterinária que visa o atendimento humanizado e uma relação próxima, onde o principal
objetivo é resolver o problema do pet cliente, sempre mantendo a ética e a transparência.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">Ambiente</span>
              <span className="cat-item">Clinica</span>
            </div>
            <ButtonProject
              href="https://www.instagram.com/famillevet/"
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
        src={'/img/portfolio/famillevet/7.jpg'}
        
      />
      {/*End Parallax Img*/}

      {/*Start Gallery List*/}
      <div className="mt-section mb-sm-section has-in-halg-bg p-relative">
        <div className="p-absolute half-bg-bottom w-100 d-sm-none h-50 v-light bottom-0  left-0" />
        <div className="dsn-container">
          <BoxGallery col={2}>
            <BoxGalleryItem
              src="/img/portfolio/famillevet/2.png"
              groupPopup="gallery"
            />
            <BoxGalleryItem
              src="/img/portfolio/famillevet/1.png"
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
              The Small Silver Car That Changed Everything
            </h4>
            <p className="dsn-up">
              What you see in this blog post pales vastly in comparison to the
              painstaking attention to detail showcased in 000. A fine-toothed
              comb driven by a team of true Porsche enthusiasts has formed one
              of the finest pieces of automotive research, journalism, and
              photography in existence.
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
              src="/img/portfolio/famillevet/5.png"
              groupPopup="gallery"
            />
            <BoxGalleryItem
              src="/img/portfolio/famillevet/4.png"
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
        src={'/img/portfolio/famillevet/dog.jpg'}
       
      />
      {/*End Parallax Img*/}

      
      {/*End Gallery List*/}
      <NextProject
        heroContent={getPortfolioItem('principal-garden')}
        number={5}
      />
    </Layout>
  );
}

export default Project6;
