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
import Button from '../../components/button/Button';

function Post4() {
  const NextContent = {
    
    buttonText: "Conheça o PAD"
};
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
          Fortalecendo Marcas no Mundo Digital: A Importância do Branding no
          Projeto Autoridade Digital | Estúdio Nákama
        </title>
      </Head>

      {/*========== Header Normal ========== */}
      <HeaderNormal container={'container'}>
        <MetaPost category={['Branding']} />
        <h1 className="title text-uppercase">
          Fortalecendo Marcas no Mundo Digital: A Importância do Branding no
          Projeto Autoridade Digital
        </h1><br/>
        <h2 >
        Descubra como o Branding é a Base do Sucesso na Construção da Sua Autoridade Online
        </h2>
      </HeaderNormal>
      <main>
      {/*========== End Header Normal ==========*/}

      {/*Start Parallax Img*/}
      <div className="overlay-nakama">
      <ParallaxImage
        alt={''}
        src={'/img/blog/Identidade-de-Marca-1200x800.jpg'}
        height={'80vh'}
        parallaxFrom={{ scale: 1.1 }}
        parallax={{ scale: 1 }}
        overlay={5}
      />
      </div>
      {/*End Parallax Img*/}

      <div className="news-content mb-section mt-40">
        <div className="single-post post-content container  ">
          <h3>A Força do Branding no Projeto Autoridade Digital
.</h3>
          <p>
          No dinâmico cenário digital, o Projeto Autoridade Digital se destaca como uma abordagem estratégica para solidificar marcas como líderes no mundo online. Central a esse projeto está o poder transformador do Branding, uma peça-chave na construção de marcas memoráveis e influentes.
          </p>
          
          <blockquote className="block-quote">
            <p>
            O Projeto Autoridade Digital é uma fusão de especialidades - Branding, Conteúdo Audiovisual, Fotografia, Consultoria, Marketing, Design e Publicidade - unidas para criar uma presença digital marcante. No centro dessa estratégia está o Branding, delineando a identidade e a essência de cada marca.
            </p>
          </blockquote>
          {/*Start Box Info Center Content*/}
          <div className="p-relative overlay-nakama text-center">
            <ParallaxImage
              src="/img/pad/estudiotime.jpg"
              overlay={4}
              height={'80vh'}
              alt={''}
            />
            <div className="v-middle z-index-1">
              <ButtonPopup href="/img/video/padvideo.mp4" />
            </div>
          </div>
          {/*End Box Info Center Content*/}

          <h3>O Papel Vital do Branding na Autoridade Digital</h3>
          <p>
          Brand Story: Construindo Identidade e Reconhecimento
          </p>
          <p>
          O Branding vai além do visual; é a narrativa que guia e conecta a marca ao seu público-alvo. É a expressão autêntica da missão, visão e valores, criando conexões emocionais que perduram.
          </p>
          <p>
          Estratégia de Branding: Fundamentação para o Sucesso
          </p>
          <p>
          No Projeto Autoridade Digital, cada estratégia de Branding é construída sob medida. Entendemos profundamente os valores e objetivos de cada cliente, transformando-os em uma identidade visual e narrativa coesa e única.
          </p><br/><br/>

          <h4>
          Participe da Revolução Digital com o Projeto Autoridade Digital
          </h4>
          <Button
                            href={"/projeto-autoridade-digital"}
                            className="mr-15 line-head"
                            borderStyle={"border-color-heading-color"}
                            borderRadius
                            transitionPage={{title: NextContent.buttonText}}
                        >
                            {NextContent.buttonText}
                        </Button>

          {/*<CommentForm className="mt-section"/>*/}

          <div className="post-tags mt-50 p-relative heading-color font-heading">
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">ProjetoAutoridadeDigital</span>
            </a>
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">PAD</span>
            </a>
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">Branding</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pagination-post d-flex align-items-center border-style border-radius section-margin background-section container">
        <div className="pagination-item w-100 p-20">
          <Link href="desvendando-a-essencia-da-sua-marca">
            <span className="mb-5">Anterior</span>
            <h4 className="title-block word-wrap">Desvendando a essencia da sua marca</h4>
          </Link>
        </div>

        <div className="icon border-right border-left p-20">
          <Link className="h-100 heading-color" href="/blog">
            <FontAwesomeIcon icon={faThLarge} />
          </Link>
        </div>
        <div className="pagination-item w-100 p-20 text-right">
          <Link href="o-poder-dos-pontos-de-contato">
            <span className="mb-5">Próximo</span>
            <h4 className="title-block word-wrap">O poder dos pontos de contato</h4>
          </Link>
        </div>
      </div>

     
{/*========== Next Page ==========*/}
<NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}
      {/*========== Footer ==========*/}
      </main>
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Post4;
