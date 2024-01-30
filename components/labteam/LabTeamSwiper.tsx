import { dsnCN } from '../../hooks/helper';
import { ParallaxOption } from '../../type/DsnSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, SwiperOptions } from 'swiper';
import Image from 'next/image';

const data = [
  { src: '/img/lab/logotipocolor.png' },
  { src: '/img/lab/SEL.png' },
  { src: '/img/lab/strattax.png' },
  { src: '/img/lab/mais1cafe.png' },
  
];

export interface BrandTeamProps extends SwiperOptions {
  desktop?: {} | SwiperOptions;
  mobile?: {} | SwiperOptions;
  tablet?: {} | SwiperOptions;
  className?: string;
  parallaxContent?: Object | ParallaxOption;
  blur?: boolean;
}

function LabTeam({
  className,
  desktop,
  mobile,
  tablet,
  ...retsProps
}: LabTeamProps) {
  return (
    <Swiper
      modules={[Pagination, Parallax]}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        992: desktop,
        768: tablet,
        576: mobile
      }}
      className={dsnCN('brand-client wrapper-client', className)}
      {...retsProps}
    >
      {data &&
        data.map(($item, $index) => (
          <SwiperSlide key={$index}>
            <div className="logo-box">
              <div className="logo-box-inner p-relative">
                <Image src={$item?.src} alt={''} width={180} height={54} />
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

LabTeam.defaultProps = {
  desktop: {
    slidesPerView: 3
  },
  tablet: {
    slidesPerView: 2
  },
  mobile: {
    slidesPerView: 2
  }
};

export default LabTeam;
