import React from 'react';
import SwiperPagination from '../swiper-pagination/SwiperPagination';
import Testimonial from '../testimonial/Testimonial';

const TestimonialsSection = () => {
  return (
    <section className="section-margin" data-dsn-title="O que falam">
        <Testimonial
          className="section-margin container"
          title="O que falam sobre nós."
          skin={['testimonials-half']}
          backgroundColor={'background-section'}
          desktop={{ slidesPerView: 2 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          loopedSlides={2}
          parallax
          parallaxImage={{ 'data-swiper-parallax-scale': 0.7 }}
          parallaxContent={{
            'data-swiper-parallax-opacity': 0,
            'data-swiper-parallax': '30%'
          }}
        >
          <SwiperPagination className={`justify-content-between dsn-container mt-30`} />
        </Testimonial>
      </section>
  );
};

export default TestimonialsSection;
