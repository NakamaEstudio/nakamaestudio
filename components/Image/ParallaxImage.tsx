import { CSSProperties, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';
import Image from 'next/image';

import { dsnCN } from '../../hooks/helper';

// @ts-ignore
export interface ParallaxImageProps extends ImageProps {
  speed?: number;
  parallax?: Object;
  overlay?: number;
  height?: string;
  heightTable?: string;
  heightMobile?: string;
  triggerHook?: string | 'top' | 'center' | 'bottom';
  animationActive?: boolean;
  caption?: string;
  asBackground?: boolean;
  parallaxFrom?: Object;
  loading?: string;
}

function ParallaxImage({
  speed,
  loading,
  parallax,
  overlay,
  height,
  heightTable,
  heightMobile,
  triggerHook,
  animationActive,
  caption,
  // @ts-ignore
  className,
  asBackground,
  parallaxFrom,
  ...restProps
}: ParallaxImageProps) {
  const target = useRef(null);
  const activeAnimateTrigger = useRef(null);
  const [active, setActive] = useState('');

  useEffect(() => {
    // @ts-ignore
    if (!restProps.src) return;
// @ts-ignore
    const img = { current: target.current.querySelector('.cover-bg-img') };

    if (triggerHook === 'bottom')
      gsap.set(img.current, { height: `+=${speed}%`, yPercent: `-=${speed}` });
    if (triggerHook === 'center')
      gsap.set(img.current, {
    // @ts-ignore
        height: `+=${speed / 4}%`,
        // @ts-ignore
        yPercent: `-=${speed / 2}`
      });

    if (parallaxFrom) gsap.set(img.current, parallaxFrom);

    if (animationActive)
    // @ts-ignore
      activeAnimateTrigger.current = ScrollTrigger.create({
        trigger: target.current,
        start: `top bottom`,
        onEnter: (self) => setActive('dsn-active')
      });

    const image = gsap.to(img.current, {
      ...parallax,
      yPercent: triggerHook === 'top' ? speed : 0,
      force3D: true,
      ease: 'none',
      scrollTrigger: {
        trigger: target.current,
        start: `top ${triggerHook}`,
        scrub: true
      }
    });

    return () => {
      gsap.set(img.current, { clearProps: 'height,yPercent' });
       // @ts-ignore
      image.scrollTrigger.kill();
      image.kill();
       // @ts-ignore
      activeAnimateTrigger.current?.kill();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (// @ts-ignore
    restProps.src && (
      <div
        className={dsnCN(
          'dsn-parallax-img',// @ts-ignore
          animationActive && 'dsn-animate',
          active,
          asBackground && 'dsn-bg-parallax',
          className
        )}
        data-overlay={overlay}
        ref={target}
        style={
          {
            '--height': height,
            '--height-table': heightTable,
            '--height-mobile': heightMobile
          } as CSSProperties
        }
         //@ts-ignore

      >
        
   
    <Image
          src={''} className="cover-bg-img p-absolute"
          fill
          alt={''}
          {...restProps}        />
        {caption && (
          <div className="cap">
            <span>{caption}</span>
          </div>
        )}
      </div>
    )
  );
}

ParallaxImage.defaultProps = {
  height: '100vh',
  heightTable: '80vh',
  heightMobile: '50vh',
  overlay: 0,
  triggerHook: 'bottom',
  animationActive: true,
  speed: 20,
  parallax: {}
};

export default ParallaxImage;
