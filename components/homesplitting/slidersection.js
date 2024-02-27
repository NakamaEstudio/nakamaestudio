import React from 'react';

import SliderPortfolio from '../slider-portfolio/SliderPortfolio';

const SliderSection = () => {
  return (
<section className="overlay-nakama">
        <SliderPortfolio
          priority={true}
          webgel
          loop={true}
          fullWidth
          loading={true}
          className={'align-items-end pb-80 overlay-nakama'}
          optionSlider={{     
    spaceBetween: 2,
    speed: 5000,
    parallax: true,         
          }}
          webgelOptions={{
            intensity: 1,
            priority: true,
            displacement: '/img/project/project1/14.jpg',
            speedIn: 3.5,
            loading: 'lazy'
          }}
          metaData={{ hasSeparator: true }}
        />
      </section>
      );
    };
    
    export default SliderSection;