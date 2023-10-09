import React, {useEffect, useRef} from 'react'
import { useLocation } from "@reach/router";
import * as desktopVideo from '../../../static/videos/desktop'
import * as mobileVideo from '../../../static/videos/mobile'

// constants

import { LANG } from "../../constants/languages";

//assets
import useWindowSize from "../../hooks/useWindowSize";
import CustomLink from "../../components/CustomLink";

// data-layer
import { setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const HeroVideoSection = ({ slice }) => {
  const location = useLocation()
  const { width } = useWindowSize();
  const playerRef = useRef()
  const oneTrustAccepted = useOneTrust()
  const button = {
    href: slice.primary.button_link.url || '',
    text: slice.primary.button_text.text || '',
  }

  const video = {
    desktop: slice.primary.page_language === LANG.EN ? desktopVideo.tdicEn : desktopVideo.tdicEs,
    mobile: slice.primary.page_language === LANG.EN ? mobileVideo.tdicEn : mobileVideo.tdicEs
  }

  useEffect(()=>{
    if (!playerRef?.current) return

    playerRef.current.addEventListener('suspend', () => {
      playerRef.current.play()
    });

  },[])

  return (
      <section className='campaign-video-hero'>
        <a href={button.href || ''}>
        <video className='campaign-video-hero__video'
               ref={playerRef}
               src={`${ width <= 768 ? video.mobile : video.desktop}`}
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
            className="button-white campaign-video-hero__button"
            onClick={()=>{
                const dl = {
                  url: button.href,
                  referrer: location.pathname,
                  name: button.text.toLowerCase()
                }
                setLearnMoreClickedEvent(dl, oneTrustAccepted)
            }}
        >
          {button.text}
        </CustomLink>
      </section>
  )
}
