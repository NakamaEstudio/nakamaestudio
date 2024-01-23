import Layout from '../../layout/Layout';
import TitleSection from '../../components/heading/TitleSection';
import ParallaxImage from '../../components/Image/ParallaxImage';

import NextPage from '../../components/next/NextPage';

import Footer from '../../components/footer/Footer';
import ModalContact from '../../components/model-right/ModalContact';
import HeaderNormal from '../../components/header/HeaderNormal';

import MetaPost from '../../components/meta/MetaPost';
import ButtonPopup from '../../components/button-popup/ButtonPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import CommentForm from '../../components/bolg/CommentForm';
import Link from 'next/link';
import Head from 'next/head';

function Post2() {
  TitleSection.defaultProps = {
    classDesc: 'line-shape line-shape-before',
    classDesInner: 'line-bg-right'
  };

  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: 'Contact' }
      }}
    >
      <Head>
        <title>
          O Poder dos Pontos de Contato na Experiência do Consumidor | Estúdio
          Nákama
        </title>
      </Head>

      {/*========== Header Normal ========== */}
      <HeaderNormal container={'container'}>
        <MetaPost category={['Branding']} />
        <h1 className="title text-uppercase">
          O Poder dos Pontos de Contato na Experiência do Consumidor
        </h1>
      </HeaderNormal>
      {/*========== End Header Normal ==========*/}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={''}
        src={'/img/blog/4.jpg'}
        height={'80vh'}
        parallaxFrom={{ scale: 1.3 }}
        parallax={{ scale: 1 }}
        overlay={5}
      />
      {/*End Parallax Img*/}

      <div className="news-content mb-section mt-40">
        <div className="single-post post-content container  ">
          
          <p>
          Você já parou para considerar como as marcas criam conexões duradouras? A resposta está nos pontos de contato, os momentos em que os consumidores interagem com uma marca. Vamos explorar como esses pontos de contato moldam a experiência do consumidor.

          </p>
          <h3>Wildlife could be amazing, see why.</h3>
          <blockquote className="block-quote">
            <p>
            Pontos de contato são todas as oportunidades de interação entre uma marca e seu público. Desde o primeiro acesso ao site até a embalagem de um produto, cada interação molda a percepção e a experiência do cliente.

            </p>
          </blockquote>
          {/*Start Box Info Center Content*/}
          <div className="p-relative v-dark-head text-center">
            <ParallaxImage
              src="/img/blog/2.jpg"
              overlay={4}
              height={'80vh'}
              alt={''}
            />
            <div className="v-middle z-index-1">
              <ButtonPopup href="//media.w3.org/2010/05/sintel/trailer.mp4" />
            </div>
          </div>
          {/*End Box Info Center Content*/}

          <h3>Como Influenciam a Experiência do Consumidor?</h3>
          <p>
          Primeira Impressão: A forma como sua marca se apresenta no site ou em uma embalagem inicial pode determinar a impressão inicial do cliente.

          </p>
          <p>
          Consistência e Coerência: A consistência em todos os pontos de contato constrói confiança e familiaridade com a marca.

          </p>
          <p>
          Engajamento: Uma experiência envolvente e interativa pode criar uma conexão emocional com os consumidores.

          </p>
          <p>
          Por Que Isso Importa?
          </p>
          <p>
          Uma experiência positiva em todos os pontos de contato é essencial para a fidelização do cliente. Clientes satisfeitos não apenas retornam, mas também recomendam a marca para outros.

          </p>

          <p>
          Você já parou para considerar como as marcas criam conexões duradouras? A resposta está nos pontos de contato, os momentos em que os consumidores interagem com uma marca. Vamos explorar como esses pontos de contato moldam a experiência do consumidor.

          </p>

          {/*<CommentForm className="mt-section"/>*/}

          <div className="post-tags p-relative heading-color font-heading">
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">PontosDeContato</span>
            </a>
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">Design</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pagination-post d-flex align-items-center border-style border-radius section-margin background-section container">
        <div className="pagination-item w-100 p-20">
          <Link href="fortacelendo-marcas-no-mundo-digital">
            <span className="mb-5">Anterior</span>
            <h4 className="title-block word-wrap">Fortalecendo marcas no mundo digital</h4>
          </Link>
        </div>

        <div className="icon border-right border-left p-20">
          <a className="h-100 heading-color" href="/fortalecendo-marcas-no-mundo-digital">
            <FontAwesomeIcon icon={faThLarge} />
          </a>
        </div>
        <div className="pagination-item w-100 p-20 text-right">
          <Link href="a-importancia-da-gestao-estrategica">
            <span className="mb-5">Próximo</span>
            <h4 className="title-block word-wrap">A Importância da gestão estratégica</h4>
          </Link>
        </div>
      </div>

     
      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}
      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Post2;
