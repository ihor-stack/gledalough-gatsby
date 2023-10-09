import React from 'react'
import { useLocation } from "@reach/router";

//assets
import useWindowSize from "../../hooks/useWindowSize";
import CustomLink from "../../components/CustomLink";

// data-layer
import { setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const HeroSection = ({ slice }) => {
  const location = useLocation()
  const { width } = useWindowSize()

  const campaignAdditionalClass = slice.primary.additional_class_name
  const oneTrustAccepted = useOneTrust()

  const button = {
    href: slice.primary.cta_button_link.url || '',
    text: slice.primary.cta_button_text.text || ''
  }

  const bg = {
    imageMobile: slice.primary.background_image_mobile.url,
    imageScreen: slice.primary.background_image.url,
    color: slice.primary.background_color
  }



  return (
      <section className={`campaign-hero hero-section__${campaignAdditionalClass} position-relative`}
               style={{backgroundColor: `${bg.color || null}`}}>
        <a href={button.href || ''}>
        <div className='campaign-hero__bg w-100'
             style={{backgroundImage: `${width <= 576 ? `url(${bg.imageMobile})` : `url(${bg.imageScreen})`}`}}>
        </div>
        </a>
        {button.href && <CustomLink
            to={button.href}
            title={button.text}
            className="button-white campaign-hero__button"
            onClick={()=> {
              const dl = {
                url: button.href,
                referrer: location.pathname,
                name: button.text.toLowerCase()
              }
              setLearnMoreClickedEvent(dl, oneTrustAccepted)
            }}
        >
          {button.text}
        </CustomLink> }
        {width <= 576 && button.href &&  <CustomLink
            to={button.href}
            title={button.text}
            className="button-black campaign-hero__button"
            onClick={()=> {
              const dl = {
                url: button.href,
                referrer: location.pathname,
                name: button.text.toLowerCase()
              }
              setLearnMoreClickedEvent(dl, oneTrustAccepted)
            }}
        >
          {button.text}
        </CustomLink>}
      </section>
  )
}