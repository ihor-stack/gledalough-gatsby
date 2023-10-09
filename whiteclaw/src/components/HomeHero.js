import React, {useEffect, useRef} from 'react'
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

// components
import ImgWithFallback from "./ImgWithFallback";
import  CustomLink  from "./CustomLink";

// data-layer
import { setLearnMoreClickedEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

//assets
import useWindowSize from "../hooks/useWindowSize";


const HomeHero = ({pageQuery}) => {
  const { width } = useWindowSize()
  const location = useLocation()
  const playerRef = useRef()
  const oneTrustAccepted = useOneTrust()

  const PAGE_KEY = {
    VODKA_SODA_LAUNCH : "vodka-soda-launch",
    JB_SMOOVE: "jb-smoove",
    THE_DIFFERENCE_IS_CLEAR: "the-difference-is-clear",
    CLAWBACK: "clawback-summer"
  }

  const pageKey = pageQuery.key
  const nutritionItems = pageQuery.nutrition_info

  const button = {
    href: pageQuery.button.url || '',
    text: pageQuery.button_text.text || ''
  }
  // console.log('home-hero', pageQuery)

  const bg = {
    imageMobile: pageQuery.banner_background_mobile.url,
    imageScreen: pageQuery.banner_background.url,
    color: pageQuery.background_color,
  }

  const contentImage = {
    png: pageQuery.content_image.url,
    alt: pageQuery.content_image.alt
  }

  const contentLogo = {
    png: pageQuery.content_logo.url || '',
    alt: pageQuery.content_logo.alt || ''
  }

  const video = {
    src: pageQuery.video_src.url || '',
    mobileSrc: pageQuery.video_mobile_src.url || ''
  }

  const textContent = {
    title: pageQuery.title.text || '',
    subTitle: pageQuery.subtitle.text || ''
  }

  useEffect(()=>{
    if (!playerRef?.current) return

    playerRef.current.addEventListener('suspend', () => {
      playerRef.current.play()
    });

  },[])

  return <>
    { pageKey === PAGE_KEY.VODKA_SODA_LAUNCH && <section
        className={`position-relative hero-section hero-section__${pageKey} animation-element-container bounce-up py-0`}
        style={{backgroundImage: `${ width < 768 ? `url(${bg.imageMobile})` : `url(${bg.imageScreen})`}`, backgroundColor: `${bg.color || '#000000'} `}}>
      <div className="hero-container">
        <div className="row hero-container-row">
          <div className="col-img col-12 col-md-4 p-0">

          </div>
          <div className="col-12 col-md-8 col-content">
            < ImgWithFallback
                classNameImg='hero-section__content-img'
                src={contentImage.png}
                alt={contentImage.alt}
                fallbackSrc={contentImage.png}
            />
            {width >= 768  && <Link
                to={button.href}
                target="_blank"
                title={button.text}
                className="button-black hero-section__button"
            >
              {button.text}
            </Link>}
            {nutritionItems && <ul className="row nutrition-info">
              {nutritionItems.map(({nutrition_item}) => {
                return <li key={nutrition_item.richText[0].text}>{nutrition_item.richText[0].text}</li>
              })}
            </ul>}
          </div>
        </div>
      </div>
      {width <= 767  && <Link
          to={button.href || ''}
          target="_blank"
          title={button.text}
          className="button-black hero-section__button"
      >
        {button.text}
      </Link>}
    </section> }

    { pageKey === PAGE_KEY.JB_SMOOVE && <section
        className={`position-relative hero-section hero-section__${pageKey} animation-element-container bounce-up py-0`}
        style={{backgroundImage: `${ width < 768 ? `url(${bg.imageMobile})` : `url(${bg.imageScreen})`}`, backgroundColor: `${bg.color || '#ffffff'} `}}>
      <div className="hero-container">
        <div className="row hero-container-row">
          <div className="col-12 col-md-7 col-content">
            < ImgWithFallback
                classNameImg='hero-section__content-img'
                src={contentImage.png}
                alt={contentImage.alt}
                fallbackSrc={contentImage.png}
            />
            {width >= 768  && <Link
                to={button.href}
                target="_blank"
                title={button.text}
                className='button-white hero-section__button'
            >
              {button.text}
            </Link>}
          </div>
          <div className="col-img col-12 col-md-5 p-0">
          </div>
        </div>
      </div>
      {width <= 767  && <Link
          to={button.href || ''}
          target="_blank"
          title={button.text}
          className="button-black hero-section__button"
      >
        {button.text}
      </Link>}
    </section> }

    { pageKey === PAGE_KEY.THE_DIFFERENCE_IS_CLEAR && <section className='video-hero-section'>
      <a href={button.href}>
      <video className='video-hero-section__video'
             ref={playerRef}
             src={`${ width <= 768 ? video.mobileSrc : video.src}`}
             width="100%"
             height="100%"
             playsInline
             autoPlay
             muted
             loop
             poster=""/>
      </a>
      <div className='helper-bottom'></div>
      <div className='helper-right'></div>
      <CustomLink
          to={button.href}
          title={button.text}
          className="button-white video-hero-section__button"
          onClick={()=> {
            const dl = {
              url: button.href,
              referrer: location.pathname,
              name: button.text.toLowerCase()
            }

            setLearnMoreClickedEvent(dl, oneTrustAccepted)
          } }
      >
        {button.text}
      </CustomLink>
    </section> }

    { pageKey === PAGE_KEY.CLAWBACK && <section
        className={`position-relative hero-section hero-section__${pageKey} animation-element-container bounce-up py-0`}
        style={{backgroundImage: `${ width < 768 ? `url(${bg.imageMobile})` : `url(${bg.imageScreen})`}`, backgroundColor: `${bg.color || '#000000'} `}}>
      <div className='hero-section__pill'>
          <div className='hero-section__pill-content'>
            <ImgWithFallback
              classNamePicture='hero-section__content-logo'
              src={contentLogo.png}
              alt={contentLogo.alt}
              fallbackSrc={contentLogo.png}
            />
            <h1 className='hero-section__pill-title'>{textContent.title}</h1>
            <p className='hero-section__pill-subtitle'>{textContent.subTitle}</p>
            {width > 767 &&
              <Link
                to={button.href}
                target="_blank"
                title={button.text}
                className="cb-button"
              >
                {button.text}
              </Link>
            }
          </div>
          <div className='hero-section__pill-bg'>
            <ImgWithFallback
              classNamePicture='hero-section__content-img'
              src={contentImage.png}
              alt={contentImage.alt}
              fallbackSrc={contentImage.png}
            />
          </div>
        </div>
      {width <= 767  && <Link
          to={button.href || ''}
          target="_blank"
          title={button.text}
          className="button-black hero-section__button"
      >
        {button.text}
      </Link>}
    </section> }
  </>
}

export default HomeHero