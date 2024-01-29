

import PADMenu from '../components/header/menu/PADmenu'
import { Back, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import dsnEffect, {
  moveSection,
  fade,
  textAnimation
} from '../animation/dsnEffect';
import { Provider } from 'react-redux';
import { store } from '../features/store';

import OptionTheme from '../components/option-theme/OptionTheme';
import RightScrollTop from '../components/option-theme/RightScrollTop';
import { checkMobile, parallaxIt } from '../hooks/helper';
import LoadingPAD from '../layout/LoadingPAD';
import { tdEnd } from '../hooks/transition/transitionDefalut';
import WhatsAppButton from '../components/whatsappbutton/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

dsnEffect.registerEffect(moveSection, fade, textAnimation);

gsap.config({
  nullTargetWarn: false
});
gsap.defaults({
  duration: 1,
  overwrite: 'auto'
});

function LABlayout({ Component, pageProps, children }) {
  
  const [creativeLine, setCreativeLine] = useState(true);
  //--> v-dark , v-light
  const [colorPage, setColorPage] = useState('pad-theme');

  useEffect(() => {
    dsnEffect.registerEffect(tdEnd);
  });

  useEffect(() => {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.cssText =
      'width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;';
    document.body.appendChild(scrollDiv);
   
    document.body.removeChild(scrollDiv);
  }, []);

  useEffect(() => {
    if (creativeLine) document.body.classList.add('dsn-line-style');
    else document.body.classList.remove('dsn-line-style');
  }, [creativeLine]);

  useEffect(() => {
    if (checkMobile(true)) return;

    const options = Object.assign(
      {},
      {
        speed: 0.5,
        move: 20
      }
    );

    const parallaxHover = document.body.querySelectorAll(
      '[data-dsn="parallax"]'
    );

    parallaxHover.forEach((item) => {
      /**
       * Append Icon
       */
      const icon = document.createElement('div');
      icon.classList.add('icon-circle');
      icon.style.minWidth = '1px';
      item.appendChild(icon);

      /**
       *
       */
      item.removeAttribute('data-dsn');
      item.classList.add('dsn-parallax-hover');
      const scale = item.classList.contains('image-zoom');
      const moveIcon = item.classList.contains('move-circle');

      const mouseEnter = function (e) {
        if (scale) gsap.to([item, icon], 0.3, { scale: 1.03 });
      };

      const mouseLeave = function (e) {
        gsap.to([item, icon], 1, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Back.easeOut.config(4)
        });
      };

      const mouseMove = function (e) {
        parallaxIt(e, item, options);
        if (moveIcon)
          parallaxIt(e, icon, { ...options, move: options.move * 2 });
      };

      /**
       * Event
       */
      item.addEventListener('mouseenter', mouseEnter);
      item.addEventListener('mouseleave', mouseLeave);
      item.addEventListener('mousemove', mouseMove);
    });
  }, []);

  return (
    <>
      <Head>
      <meta
  name="description"
  content="Programa que visa tornar empresas e marcas autoridade no digital com integração de profissionais especialistas em diversas áreas."
/>
      </Head>
      <Provider store={store}>
        <div id="__dsn_content" className={colorPage}>
          <WhatsAppButton />
          <LoadingPAD />
          <PADMenu hamburger />
          <OptionTheme
            lineTheme={[creativeLine, setCreativeLine]}
            pageColor={[colorPage, setColorPage]}
          />
          {children}
          
          <RightScrollTop options={{ duration: 1.5, ease: 'power4.inOut' }} />
        </div>
      </Provider>
    </>
  );
}

export default LABlayout;