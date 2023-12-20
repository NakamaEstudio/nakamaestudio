import Layout from '../layout/Layout';
import HeaderNormal from '../components/header/HeaderNormal';
import DsnGrid from '../layout/DsnGrid';
import TitleSection from '../components/heading/TitleSection';
import BgDot from '../components/header/BgDot';
import Facts from '../components/facts/Facts';
import TitleCover from '../components/heading/TitleCover';
import List from '../components/list/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ServiceGrid } from '../components/services/Service';
import { IdeaIcon } from '../components/svg';
import { NakamaIcon } from '../components/Nakamaicon';
import ButtonProject from '../components/button/ButtonProject';
import { getServiceData } from '../data/service';
import Team from '../components/Team/Team';
import React from 'react';
import { getTeamData } from '../data/team';
import Image from 'next/image';
import NextPage from '../components/next/NextPage';
import Footer from '../components/footer/Footer';
import ModalContact from '../components/model-right/ModalContact';
import Head from 'next/head';

function Servicos() {
  TitleSection.defaultProps = {
    classDesInner: 'line-bg-left'
  };
  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: 'Contato' }
      }}
    >
      <Head>
        <title>Serviços | Estúdio Nákama</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal
        backgroundColor="background-section "
        className="text-center"
      >
        <p className="subtitle p-relative line-shape   mb-30">
          <span className="background-main pl-10 pr-10">Nossos serviços</span>
        </p>
        <h1 className="title">
          Entenda: Marca não se resume a Logotipo, é a{' '}
          <strong>percepção</strong> que seu público tem sobre seu negócio.
        </h1>
        <p className="sub-heading  mt-15">E é isto que construimos.</p>
      </HeaderNormal>
      {/*========== End Header Normal ==========*/}

      {/*========== About Section  ==========*/}
      <DsnGrid
        className="section-margin container"
        customGrid={{ desktop: '70% 30%' }}
        rowGapTablet={50}
        data-dsn-title="O que nós fazemos"
      >
        <div className="box-left">
          <TitleSection defaultSpace={false} description="O que fazemos" />
          <h4 className="mt-25 mr-10">
            Nossos serviços abrangem desde a criação de identidades visuais,
            materiais Gráficos, sites, canais digitais, eventos até estratégias
            de gestão de marcas. Explore nossos pilares de serviços - Aura,
            Ambiente e Autonomia - onde combinamos criatividade, estratégia e
            paixão para elevar sua marca a um novo patamar.
          </h4>
        </div>
        <div className="box-right border-left pl-30">
          <TitleSection defaultSpace={false} description="Nossos serviços" />
          <ul className="mt-25">
            <li className="mb-15">Criação de marcas</li>
            <li className="mb-15">Materiais Gráficos</li>
            <li className="mb-15">Sites e canais digitais</li>
            <li className="mb-15">Consultoria para negócios</li>
          </ul>
        </div>
      </DsnGrid>
      {/*========== End About Section  ==========*/}

      {/*<!-- ========== facts-section ==========*/}
      <div className="section-margin p-relative">
        <BgDot />
        <BgDot rightPosition />
        <div className="container">
          <Facts className="text-center" col={4} colTablet={2} />
        </div>
      </div>
      {/*<!-- ========== end facts-section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative background-section section-padding"
        data-dsn-title="Identidade e posicionamento de marca"
      >
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-left">
            <div className="box-im h-100 ">
              <Image
                className="cover-bg-img "
                src="/img/rachel-claire.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
              />
            </div>
          </div>

          <div className="p-relative box-right">
            <TitleCover>Aura</TitleCover>
            <TitleSection
              className="mb-30"
              description="Aura"
              defaultSpace={false}
            >
              Identidade e Posicionamento de Marca
            </TitleSection>
            {/*
            <List className="border-top  pt-30 mb-30" col={2} iconSize={"15px"}>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Proin gravida nibh vel{" "}
              </List.item>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Proin gravida nibh vel{" "}
              </List.item>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Auctor aliquet aenean quis{" "}
              </List.item>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Auctor aliquet aenean quis{" "}
              </List.item>
            </List>
            */}
            <p className="max-w570 dsn-up border-top pt-30 border-bottom pb-30 mb-10">
              Construímos a essência da sua marca, desde a criação do logotipo
              até a definição dos valores. Conectando-a de forma única ao seu
              público-alvo.
            </p>

            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Diagnóstico de Branding ',
                  description:
                    'Uma análise profunda para identificar as oportunidades e pontos de melhoria no posicionamento.'
                }
              ]}
            />

            <ServiceGrid
              className="icon-left border-top pb-30 pt-30 align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Naming e Plataforma de Marca',
                  description:
                    'Criamos nomes impactantes e uma base sólida para a sua marca, seu produto ou Serviço.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Design de Logotipo e Identidade Visual',
                  description:
                    'Desenvolvemos elementos visuais que refletem a essência e os valores da sua marca.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Manual de Marca',
                  description:
                    'Um guia abrangente que estabelece diretrizes visuais e verbais para manter a consistência da marca.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Território Visual e Verbal',
                  description:
                    'Criamos uma identidade única e consistente para sua marca, recurso de suporte.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Materiais de Apoio',
                  description:
                    'Desenvolvemos materiais Gráficos que comunicam sua marca de forma eficaz e coerente.'
                }
              ]}
            />
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative section-margin"
        data-dsn-title="Experiência de Marca"
      >
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-left order-md-2">
            <TitleCover>Ambiente</TitleCover>
            <TitleSection
              className="mb-30"
              description="Ambiente"
              defaultSpace={false}
            >
              Experiência da Marca
            </TitleSection>
            <p className="max-w570 dsn-up border-top pb-30 pt-30 pb-30">
              Criamos experiências consistentes em todos os pontos de contato da
              marca, desde embalagens até a presença digital, transmitindo os
              valores e deixando uma impressão marcante.
            </p>
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Design de Produto e Embalagem ',
                  description:
                    'Criamos designs atraentes e funcionais para seus produtos e embalagens.'
                }
              ]}
            />

            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Desenvolvimento de Sites e Aplicativos',
                  description:
                    'Construímos plataformas digitais impactantes que cativam seu público.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Estratégias de Mídias Sociais',
                  description:
                    'Planejamos e executamos estratégias para maximizar o alcance e a interação com seu público-alvo.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Sinalização e Ambientação',
                  description:
                    'Criamos ambientes físicos que refletem e reforçam a identidade da marca.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pb-30 pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Endobranding',
                  description:
                    'Focamos na cultura e nos valores internos da empresa para alinhar todos os membros da equipe com a identidade da marca.'
                }
              ]}
            />
            <ServiceGrid
              className="icon-left border-top pt-30  align-items-center p-0"
              iconOption={{
                className: 'background-main p-15 align-self-center'
              }}
              data={[
                {
                  icon: NakamaIcon,
                  title: 'Produção de Eventos / Live Marketing',
                  description:
                    'Criamos experiências que refletem sua marca. Planejamos e executamos eventos marcantes e memoráveis, desde conferências a lançamentos de produtos, conectando sua marca de forma única ao público-alvo.'
                }
              ]}
            />
            {/*<ButtonProject href="#0" className="mt-30">
              {" "}
              Visit Website{" "}
            </ButtonProject>
            */}
          </div>
          <div className="p-relative box-right order-md-1">
            <div className="box-im h-100 ">
              <Image
                className="cover-bg-img "
                src="/img/help-project.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
              />
            </div>
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative background-section section-padding"
        data-dsn-title="Gestão de Marcas"
      >
        <div className="container">
          <TitleSection
            className="text-center"
            description="Autonomia"
            defaultSpace={false}
          >
            Gestão de Marcas
          </TitleSection>
          <TitleSection
            className="mt-15 text-center"
            tag="p"
            dirDescription="after"
            classDesInner="max-w570"
            description="Capacitamos sua marca com estratégias e consultorias personalizadas para que possa crescer de forma independente e sustentável, mantendo sua identidade em constante evolução."
          />

          <DsnGrid
            className="background-main"
            col={2}
            colTablet={1}
            rowGapTablet={0}
            rowGapMobile={0}
          >
            <div className="p-relative box-padding box-left order-md-2">
              {/*}
              <TitleCover>Diesel</TitleCover>
              <TitleSection
                className="mb-15"
                defaultSpace={false}
                description="Project Manager"
              />
              <h4 className="mb-50">
                Get Dsn Grid today and start building next-generation websites
                in minutes!
              </h4>
        */}
              <ServiceGrid
                className="icon-left p-0 "
                rowGapTablet={30}
                rowGapMobile={30}
                iconOption={{
                  className: 'background-section p-15 align-self-center'
                }}
                data={[
                  {
                    icon: NakamaIcon,
                    title: 'Triagem e Diagnóstico',
                    description: ` Identificamos oportunidades de melhoria e áreas-chave para o crescimento da marca.`
                  },
                  {
                    icon: NakamaIcon,
                    title: 'Plano de Ação e Acompanhamento',
                    description: `Criamos estratégias e acompanhamos de perto sua implementação para garantir resultados eficazes. `
                  },
                  {
                    icon: NakamaIcon,
                    title: 'Consultoria e Gestão de Mídias Sociais',
                    description: `Oferecemos suporte contínuo para manter uma presença online consistente e eficaz. `
                  },
                  {
                    icon: NakamaIcon,
                    title: 'Coordenação de Terceiros',
                    description: `Gerenciamos e coordenamos serviços externos para garantir a coerência da marca em todas as interações.
                    `
                  }
                ]}
              />
            </div>
            <div className="p-relative box-right order-md-1">
              <div className="box-im h-100 ">
                <Image
                  className="cover-bg-img "
                  src="/img/corporate.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
                />
              </div>
            </div>
          </DsnGrid>
          <ServiceGrid
            className="mt-50 p-0 text-center"
            data={getServiceData().slice(0, 3)}
            col={3}
            colTablet={2}
            colGap={125}
          />
        </div>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*========== team Section ========== 
      <section
        className="container section-margin "
        data-dsn-title="Best Team Ever"
      >
        <TitleSection description={"Our Team"}>
          The Best Team Ever!
        </TitleSection>

        <Team
          data={getTeamData().slice(0, 3)}
          className={"team-classic"}
          col={3}
          colTablet={2}
        />
      </section>
      */}
      {/*========== End team Section ========== */}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Servicos;
