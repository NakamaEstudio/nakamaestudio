import React from 'react';

import TitleSection from '../../components/heading/TitleSection';

import SwiperPagination from '../swiper-pagination/SwiperPagination';
import PortfolioSwiper from '../portfolio/PortfolioSwiper';

const PortfolioSection = () => {
  return (
    <section className="section-margin" data-dsn-title="Cases de Sucesso">
    <TitleSection className={`align-items-center container text-center`} description={'Cases de Sucesso'}>
      Hall da fama do
      <br />
      Estúdio Nákama
    </TitleSection>
    <PortfolioSwiper
      grabCursor
      desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
      tablet={{ spaceBetween: 0, slidesPerView: 1.3 }}
      mobile={{ slidesPerView: 1 }}
      stylePortfolio="work-section"
      className="v-dark-head title-inherit h4 text-left"
      centeredSlides
      loop
      blur
      autoHeight={true}
      parallax
      speed={1200}
      watchSlidesProgress
      loopedSlides={2}
      parallaxImage={{ 'data-swiper-parallax-scale': '0.85' }}
      parallaxContent={{ 'data-swiper-parallax-opacity': '0' }}
    >
      <SwiperPagination autoHeight={true} className={`justify-content-between dsn-container mt-30`} />
    </PortfolioSwiper>
  </section>
  );
};

export default PortfolioSection;
