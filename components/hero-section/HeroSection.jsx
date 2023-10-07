import React from 'react'

import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";
import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";


const HeroContent = {
    title: "Olá, somos <br/>  Estúdio Nákama",
    subtitle: `"Saber o que não somos, é tão importante quanto
    a clareza do que devemos ser".`,
    description: `Fundada em 2022, a Nákama não é uma agência, é um Estudio de Branding. <span class="mb-10 d-block" ></span>
    Não fazemos marketing digital,
    construimos marcas e
    gerenciamos seu posicionamento
    no mercado em todos canais. (O digital é apenas um dos canais
        a ser explorado.)`,
    authorTitle: "Luffy",
    authorJob: "One Piece",
    experienceNumber: "20",
    experienceDescription: `YEARS OF \nDIGITAL EXPERIENCE`,
    heroImage: '/img/about-intro.jpg',
    awards: [
        {number: 37, description: `Parceiros de <br/> negócios`},
        {number: 19, description: `Clientes <br/> Satisfeitos`},
        {number: 43, description: `Inimigos de <br/> negócios`},
        {number: 1422, description: `Clientesss <br/> Satisfeitos`},
    ]
};


function HeroSection({className, ...restProps}) {


    return (
        <section className={dsnCN(`about-section p-relative`, className)} {...restProps}>
            <DsnGrid col={2} colTablet={1} colGap={50} rowGap={40}>
                <div className="box-info pt-60 pb-60">
                    <MoveTrigger from={{y: 0}} to={{y: -70}} tablet={false} mobile={false}>
                        {(ref) => <h2 className="section-title title-move mb-30 text-uppercase"
                                      dangerouslySetInnerHTML={{__html: HeroContent.title}} ref={ref}/>}
                    </MoveTrigger>
                    <FadeUpTrigger>
                        {(ref) => <>
                            <h6 className="title-block border-bottom pb-30 mb-30" ref={ref}>{HeroContent.subtitle}</h6>
                            <p className="mb-30" ref={ref} style={{maxWidth: 570}} dangerouslySetInnerHTML={{__html: HeroContent.description}}/>
                            <h5 className="sm-title-block line-shape line-shape-after mb-10" ref={ref}>{HeroContent.authorTitle}</h5>
                            <span className="sub-heading line-bg-left" ref={ref}>{HeroContent.authorJob}</span>
                            <DsnGrid className="box-awards pt-30" col={2} colTablet={2} colGap={15} rowGap={15}>
                                {HeroContent.awards.map(
                                    (item, index) =>
                                        <div className="box-awards_item has-border " key={index}
                                             ref={ref}>
                                            <div className={`box-awards_inner background-section`}>
                                                <span className="has-animate-number title">{item.number}</span>
                                                <h5 className="sm-title-block"
                                                    dangerouslySetInnerHTML={{__html: item.description}}/>
                                            </div>

                                        </div>
                                )}


                            </DsnGrid>
                        </>}
                    </FadeUpTrigger>


                </div>

                <div className="background-mask p-relative over-hidden">
                    <div className="p-absolute p-20 h-100 w-100">
                        <div className="line line-top"/>
                        <div className="line line-bottom"/>
                        <div className="line line-left"/>
                        <div className="line line-right"/>

                        <div className="img-box h-100">
                            <ParallaxImage src={HeroContent.heroImage} alt={"about"} height="100%" overlay={4}
                                           sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
                        </div>


                        <div
                            className="box-awards-item p-absolute big-number v-dark-head left-0 bottom-0 ml-40 mb-40 z-index-1 border-style">
                            <h5 className="number p-20">
                                    <span className="has-animate-number title"
                                          style={{fontSize: "110px", lineHeight: "120px"}}>
                                        {HeroContent.experienceNumber}
                                    </span>
                                {HeroContent.experienceDescription && <span className="sm-title-block d-block" dangerouslySetInnerHTML={{__html : HeroContent.experienceDescription}} />}

                            </h5>
                        </div>
                    </div>
                </div>
            </DsnGrid>
        </section>
    )
}


export default HeroSection;