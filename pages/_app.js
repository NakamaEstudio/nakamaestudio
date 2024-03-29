import '@fancyapps/ui/dist/fancybox.css';
import 'flickr-justified-gallery/src/fjGallery.css';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/pagination';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import '../styles/style.scss';
import '../styles/output.css';

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
import EremiaMenu from '../components/header/menu/EremiaMenu';
import OptionTheme from '../components/option-theme/OptionTheme';
import RightScrollTop from '../components/option-theme/RightScrollTop';
import { checkMobile, parallaxIt } from '../hooks/helper';
import LoadingPage from '../layout/LoadingPage';
import { tdEnd } from '../hooks/transition/transitionDefalut';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import "yet-another-react-lightbox/styles.css";
import Script from 'next/script';
import { GA_TRACKING_ID, pageview } from '../utils/analytics';

import { useRouter } from 'next/router';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


dsnEffect.registerEffect(moveSection, fade, textAnimation);


gsap.config({
    nullTargetWarn: false
});
gsap.defaults({
    duration: 1,
    overwrite: "auto",
});

function MyApp({Component, pageProps}) {

    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
          pageview(url);
        };
    
        // Quando a rota muda, chama pageview
        router.events.on('routeChangeComplete', handleRouteChange);
    
        // Limpa o evento quando o componente é desmontado
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, [router.events]);


    const [creativeLine, setCreativeLine] = useState(true);
    //--> v-dark , v-light
    const [colorPage, setColorPage] = useState("v-dark");


    useEffect(() => {
        dsnEffect.registerEffect(tdEnd);
    });

    useEffect(() => {
        const scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = "width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;";
        document.body.appendChild(scrollDiv);
        
        document.body.removeChild(scrollDiv);


    }, []);

    useEffect(() => {
        if (creativeLine)
            document.body.classList.add("dsn-line-style");
        else
            document.body.classList.remove("dsn-line-style");
    }, [creativeLine]);

    useEffect(() => {
        if (checkMobile(true))
            return;

        const options = Object.assign({}, {
            speed: 0.5,
            move: 20
        });

        const parallaxHover = document.body.querySelectorAll("[data-dsn=\"parallax\"]");


        parallaxHover.forEach(item => {
            /**
             * Append Icon
             */
            const icon = document.createElement("div");
            icon.classList.add('icon-circle');
            icon.style.minWidth = "1px";
            item.appendChild(icon);

            /**
             *
             */
            item.removeAttribute('data-dsn');
            item.classList.add('dsn-parallax-hover');
            const scale = item.classList.contains("image-zoom");
            const moveIcon = item.classList.contains("move-circle");

            const mouseEnter = function (e) {
                if (scale)
                    gsap.to([item, icon], .3, {scale: 1.03});
            }

            const mouseLeave = function (e) {
                gsap.to([item, icon], 1, {x: 0, y: 0, scale: 1, ease: Back.easeOut.config(4)});
            }

            const mouseMove = function (e) {
                parallaxIt(e, item, options);
                if (moveIcon)
                    parallaxIt(e, icon, {...options, move: options.move * 2});
            }

            /**
             * Event
             */
            item.addEventListener('mouseenter', mouseEnter);
            item.addEventListener('mouseleave', mouseLeave);
            item.addEventListener('mousemove', mouseMove);

        });
    }, []);

  const getLayout = Component.getLayout || ((page => (
    <>
      <Head>
        
      <title>Estudio Nákama - Branding e Design</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link href="../styles/output.css" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.estudionakama.com.br/" />
        <meta
          name="description"
          content="Estudio Nákama, especializado em branding e design, oferece serviços inovadores para transformar a identidade e posicionamento da sua marca."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.estudionakama.com.br/" />
        <meta property="og:title" content="Estudio Nákama - Branding e Design" />
        <meta
          property="og:description"
          content="Estudio Nákama, especializado em branding e design, oferece serviços inovadores para transformar a identidade da sua marca."
        />
        <meta property="og:image" content="https://www.estudionakama.com.br/img/home/autonomia.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.estudionakama.com.br/" />
        <meta name="twitter:title" content="Estudio Nákama - Branding e Design" />
        <meta
          name="twitter:description"
          content="Estudio Nákama, especializado em branding e design, oferece serviços inovadores para transformar a identidade da sua marca."
        />
        <meta name="keywords" content="Estúdio NÁKAMA, branding estratégico, design de identidade visual, construção de marca, consultoria de gestão de marca, branding para pequenas empresas, desenvolvimento de logotipo, posicionamento de marca, marketing digital, estratégia de marca, reciprocidade em branding, design de experiência do cliente, consultoria de marca para startups, branding no Sudeste do Brasil, cultura de marca, desenvolvimento de pontos de contato da marca, criação de legado de marca, autenticidade de marca, estratégia de mídia social, design de embalagem, forjamento de marcas fortes, conceito de branding japonês, NÁKAMA Aura, NÁKAMA Ambiente, NÁKAMA Autonomia" />

        <meta name="twitter:image" content="https://www.estudionakama.com.br/img/home/autonomia.jpg" />
      </Head>
     
      <SpeedInsights/>
       {/* Script Global do Google Analytics */}
       <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
          <LoadingPage />
          <EremiaMenu hamburger />
          <Analytics />
          <Component {...pageProps} />
          <OptionTheme
            lineTheme={[creativeLine, setCreativeLine]}
            pageColor={[colorPage, setColorPage]}
          />
          <RightScrollTop options={{ duration: 1.5, ease: 'power4.inOut' }} />
          </>
  )));
          return(
          <Provider store={store}>
        <div id="__dsn_content" className={colorPage}>
        <Analytics />
        {getLayout(<Component {...pageProps} />)}
        </div>
      </Provider>
      );
    
  
}

export default MyApp;