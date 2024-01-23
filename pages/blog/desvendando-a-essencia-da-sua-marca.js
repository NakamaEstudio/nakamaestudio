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

function Post1({ className, ...restProps }) {
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
          Desvendando a Essência da Sua Marca: Criando uma Identidade Memorável
          | Estúdio Nákama
        </title>
      </Head>

      {/*========== Header Normal ========== */}
      <HeaderNormal container={'container'}>
        <MetaPost category={['Branding']} />
        <h1 className="title text-uppercase">
          Desvendando a Essência da Sua Marca: Criando uma Identidade Memorável
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
          <h3>
            Você já se perguntou sobre a verdadeira essência por trás de uma
            marca poderosa? Aquela sensação instantânea de reconhecimento quando
            você vê um logotipo ou interage com uma empresa? É tudo sobre a aura
            da marca.
          </h3>
          <p>
            No Estúdio Nákama, entendemos o poder de uma identidade única e como
            ela pode influenciar a percepção do seu público. Nosso serviço Aura
            - Identidade e Posicionamento de Marca foi meticulosamente
            desenvolvido para ajudar a desvendar e consolidar essa essência
            exclusiva para o seu negócio.
          </p>

          <h3>O que é a Aura da Marca?</h3>

          <blockquote className="block-quote">
            <p>
              A aura de uma marca é mais do que um logotipo elegante ou uma
              paleta de cores vibrantes. É a narrativa emocional, é a
              personalidade e é a conexão que sua marca estabelece com o mundo.
              Trabalhamos lado a lado com você para entender sua história, seus
              valores e sua visão, transformando esses elementos em uma
              identidade tangível.
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

          <h3>Como Criamos sua Identidade Única</h3>
          <ul>
            <li>
              -<strong> Diagnóstico de Branding Personalizado</strong>: Nossa
              jornada começa com uma análise profunda do seu negócio.
              Compreendemos seus objetivos, seu mercado-alvo e a concorrência
              para definir a base da sua identidade.
              <br />
              <br />
            </li>
            <li>
              -<strong> Desenvolvimento do Naming e Logotipo</strong>: Criamos
              um nome impactante e um logotipo memorável que personificam a
              essência da sua marca.
              <br />
              <br />
            </li>
            <li>
              - <strong>Identidade Visual Coesa</strong>: Desde paletas de cores
              até tipografia, cada elemento é escolhido estrategicamente para
              refletir sua identidade.
              <br />
              <br />{' '}
            </li>
            <li>
              -<strong> Manual de Marca Detalhado</strong>: Preparamos um guia
              abrangente para garantir que sua marca seja aplicada
              consistentemente em todos os canais.{' '}
            </li>
          </ul>
          <h3>Por que a Aura Importa?</h3>
          <p>
            Uma identidade de marca forte não apenas atrai clientes, mas também
            constrói lealdade. Ela se torna a base da sua narrativa, garantindo
            que cada interação seja consistente e impactante.
          </p>
          <p>
            Estamos aqui para ajudar a desvendar sua aura de marca e criar uma
            identidade que ressoe com seu público. Vamos começar a contar a
            história da sua marca juntos.
          </p>
          <p>
            Quer saber mais sobre como criar uma identidade poderosa para sua
            marca?{' '}
            <Link href="/contato" className="bolder">
              Entre em contato{' '}
            </Link>{' '}
            hoje mesmo!
          </p>

          

          <div className="post-tags p-relative heading-color font-heading">
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">Liderança</span>
            </a>
            <a href="#0" title="View All Posts in Tag " rel="tag">
              <span className="post_tag post_tag">Branding</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pagination-post d-flex align-items-center border-style border-radius section-margin background-section container">
        <div className="pagination-item w-100 p-20">
          <Link href="a-importancia-da-gestao-estrategica">
            <span className="mb-5">Anterior</span>
            <h4 className="title-block word-wrap">
              A importancia da gestao estrategica
            </h4>
          </Link>
        </div>

        <div className="icon border-right border-left p-20">
          <Link className="h-100 heading-color" href="/blog">
            <FontAwesomeIcon icon={faThLarge} />
          </Link>
        </div>
        <div className="pagination-item w-100 p-20 text-right">
          <Link href="fortacelendo-marcas-no-mundo-digital">
            <span className="mb-5">Próximo</span>
            <h4 className="title-block word-wrap">
              Fortalecendo marcas no mundo digital
            </h4>
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

export default Post1;
