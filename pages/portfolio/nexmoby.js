import BoxGallery, {
  BoxGalleryItem
} from '../../components/box-gallery/BoxGallery';
import ButtonProject from '../../components/button/ButtonProject';
import DsnGrid from '../../layout/DsnGrid';
import Layout from '../../layout/Layout';
import HeaderFull from '../../components/header/HeaderFull';
import { getPortfolioItem } from '../../data/portfolio';
import NextProject from '../../components/next/NextProject';
import Image from 'next/image';
import Head from 'next/head';

function Project9(params) {
  const heroData = getPortfolioItem('nexmoby');
  return (
    <Layout>
      <Head>
        <title>Nexmoby Case | Estudio Nákama</title>
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
            <h4 className="title-block text-uppercase mb-20">Project</h4>
            <ul className="intro-project-list">
              <li className="p-relative">
                <strong>Website</strong>
              </li>
              <li className="p-relative">
                <strong>Identidade Visual</strong>
              </li>
              <li className="p-relative">
                <strong>2021</strong>
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">INFORMAÇÃO</h4>
            <p className="intro-project-description">
            Construção da consciência de sustentabilidade das empresas e fazer com que elas também sejam um reflexo para
sociedade, contribuindo para o meio que está inserido, se mostrando como exemplo de que é correto e importante ter
a conscientização sobre o meio ambiente.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item"> ESG</span>
              <span className="cat-item"> Ambiente </span>
              
            </div>
            <ButtonProject href="https://www.ecosintese.com.br" className="mt-30">
              Visitar projeto
            </ButtonProject>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      {/*Start Img*/}
      <div className="p-relative container">
        <Image
          className="w-100"
          alt={''}
          src={'/img/portfolio/nexmoby/4.png'}
          width={1400}
          height={688}
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
        />
      </div>
      {/*End Img*/}

      {/*Start Gallery List*/}
      <BoxGallery className="section-margin container" col={2}>
        <BoxGalleryItem
          src="/img/portfolio/nexmoby/2.png"
          groupPopup="gallery"
        />
        <BoxGalleryItem
          src="/img/portfolio/nexmoby/1.png"
          groupPopup="gallery"
        />
      </BoxGallery>
      {/*End Gallery List*/}

      {/*Start Img*/}
      <div className="p-relative container">
        <Image
          className="w-100"
          alt={''}
          src={'/img/portfolio/nexmoby/3.png'}
          width={1400}
          height={688}
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
        />
      </div>
      {/*End Img*/}

      {/*Start Gallery List*/}
      
      {/*End Gallery List*/}

      {/*Start Intro Project*/}
      <section className="section-margin container">
        <DsnGrid col={2}>
          <div>
            <h4 className="title-block dsn-text sm-mb-20 words splitting overflow-hidden">
              Visão & <br />
              Missão
            </h4>
          </div>

          <div>
            <p className="dsn-up">
            Levar conhecimento e educação de mercado. Dando suporte técnico e estando ao lado das empresas em suas
necessidades.
Ser reconhecida no mercado levando conhecimento e importância aos clientes. Dando suporte técnico e estando ao
lado das empresas em suas necessidades para seu desenvolvimento.
              it.
            </p>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      <NextProject
       heroContent={getPortfolioItem('pv-operation')} number={8}
      />
    </Layout>
  );
}

export default Project9;
