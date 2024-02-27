import BoxGallery, {
  BoxGalleryItem
} from '../../components/box-gallery/BoxGallery';
import ButtonProject from '../../components/button/ButtonProject';
import ParallaxImage from '../../components/Image/ParallaxImage';
import DsnGrid from '../../layout/DsnGrid';
import Layout from '../../layout/Layout';
import NextProject from '../../components/next/NextProject';
import { getPortfolioItem } from '../../data/portfolio';
import HeaderFull from '../../components/header/HeaderFull';
import Image from 'next/image';
import Head from 'next/head';

function Project3(params) {
  const heroData = getPortfolioItem('pv-operation');
  return (
    <Layout>
      <Head>
        <title>PV Operation Case | Estudio Nákama</title>
      </Head>
      <section class="overlay-nakama">
      <HeaderFull
        className="dsn-container overlay-nakama"
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
                <strong>Website</strong>
              </li>
              <li className="p-relative">
                <strong>App</strong>
              </li>
              <li className="p-relative">
                <strong>Identidade Visual</strong>
              </li>
              <li className="p-relative">
                 <strong>2019</strong>
              </li>
            </ul>
          </div>
          <div className="intro-project-right">
            <h4 className="title-block text-uppercase mb-20">INFORMAÇÕES</h4>
            <p className="intro-project-description">
            Uma empresa pioneira com a melhor solução de gestão de

ativos de geração (Usinas) e um excelente trabalho com efici-
ência na geração de energia.
            </p>
            <div className="intro-project-cat mt-30">
              <span className="cat-item">Branding</span>
              <span className="cat-item">Authenticator </span>
              <span className="cat-item">User Research </span>
              <span className="cat-item">UX/UI</span>
            </div>
            <ButtonProject
              href="https://pvoperation.com/"
              target="_blank"
              className="mt-30"
            >
              Ver Projeto
            </ButtonProject>
          </div>
        </DsnGrid>
      </section>
      {/*End Intro Project*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={''}
        src={'/img/portfolio/pv-operation/1.png'}
        overlay={1}
        caption="Interface"
      />
      {/*End Parallax Img*/}

      {/*Start Gallery List*/}
      <BoxGallery className="section-margin container" col={2}>
        <BoxGalleryItem
          src="/img/portfolio/pv-operation/2.png"
          groupPopup="gallery"
          caption={'Folder'}
        />
        <BoxGalleryItem
          src="/img/portfolio/pv-operation/3.png"
          groupPopup="gallery"
          
        />
      </BoxGallery>
      {/*End Gallery List*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={''}
        src={'/img/portfolio/pv-operation/4.png'}
        
      />
      {/*End Parallax Img*/}

      {/*Start Intro Project*/}
      <section className="section-margin container text-center">
        <div className="p-relative">
          <h4 className="title-block dsn-text max-w570 mb-70 sm-mb-30 ml-auto mr-auto">
          Uma empresa responsável e comprometida com o gerenciamento (monitoramento), manu-
tenção e operação de usinas.
          </h4>

          <Image
            className="w-100"
            alt={''}
            src={'/img/portfolio/pv-operation/5.png'}
            width={1200}
            height={700}
            sizes="100vw"
          />
          <p className="dsn-up mt-30 max-w570 ml-auto mr-auto">
          Pela Vigilância Ativa Remota de diagnosticar possíveis falhas ou defeitos da
operação, com a capacidade de realizar manutenção preventiva e corretiva de
forma ágil. Com o melhor custo benefício do mercado.
          </p>
        </div>
      </section>
      {/*End Intro Project*/}

      <NextProject heroContent={getPortfolioItem('ricky-autocenter')} number={9} />
      </main>
    </Layout>
  );
}

export default Project3;
