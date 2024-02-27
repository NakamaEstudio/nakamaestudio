import React from 'react';
import DsnGrid from '../../layout/DsnGrid';
import ParallaxImage from '../../components/Image/ParallaxImage';
import TitleCover from '../../components/heading/TitleCover';
import TitleSection from '../../components/heading/TitleSection';
import Accordion, { AccordionItem } from '../../components/accordion/Accordion';

const ServicesSection = () => {
  return (
    <section className="box-gallery-vertical section-margin container" data-dsn-title="Nossos serviços">
      <DsnGrid col={2} colTablet={1} colGap={0} rowGap={0} rowGapTablet={0} rowGapMobile={0}>
      <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute overlay-nakama">
              <ParallaxImage
                alt={'Camada de personalizada da marca'}
                loading="lazy"
                src={'/img/home/pilares.jpg'}
                overlay={1}
                height="100%"
                heightTable={'70vh'}
                heightMobile={'32vh'}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
              />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <DsnGrid className="box-info-inner" col={1} colGap={0}>
                <TitleCover>NÁKAMA</TitleCover>
                <TitleSection className={'text-uppercase'} description={'Serviços'} defaultSpace={false}>
                  Os 3 pilares do posicionamento
                </TitleSection>
                <Accordion>
                  <AccordionItem title="Aura - ID e Posicionamento de Marca" active number={1}>
                    <p>
                      Criamos a alma da sua marca, desde o diagnóstico inicial até o desenvolvimento do logotipo,
                      garantindo que sua identidade transmita a mensagem certa.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Ambiente - Pontos de Contato e Experiência da Marca" number={2}>
                    <p>
                      Desenvolvemos o ambiente onde sua marca interage com o público, seja por meio do design de
                      embalagens, do site e aplicativos, ou pela criação de estratégias de mídia social.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Autonomia - Consultoria de Gestão de Marcas" number={3}>
                    <p>
                      Oferecemos orientações estratégicas para o crescimento do seu negócio, desde o diagnóstico inicial
                      até o acompanhamento e medição dos resultados, garantindo que sua marca siga um caminho de
                      sucesso.
                    </p>
                  </AccordionItem>
                </Accordion>
              </DsnGrid>
            </div>
          </div>
      </DsnGrid>
    </section>
  );
};

export default ServicesSection;
