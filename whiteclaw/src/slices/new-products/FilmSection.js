import React, { useState } from 'react'
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { PrismicRichText } from "@prismicio/react";

import ImgWithFallback from "../../components/ImgWithFallback";

// data-layer
import { setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

// assets
import * as images from "../../assets/images/icons";

export const FilmSection = ({ slice }) => {
  const location = useLocation()
  const [isPlay, setIsPlay] = useState(false)

  const title = slice.primary.section_title?.richText || []
  const description = slice.primary.section_description?.richText || []
  const backgroundImageThumb = slice.primary.background_image.url
  const youtubeSrc = slice.primary.youtube_src.text
  const oneTrustAccepted = useOneTrust()

  const ctaButton = {
    title: slice.primary.cta_button_title?.text || '',
    href: slice.primary.cta_button_link?.url || ''
  }

  const playButton = {
    text: slice.primary.button_text.text || '',
    textColor: slice.primary.play_button_text_color || "#fff",
    image: slice.primary.play_button_image?.url || images.playVideoBtnPng
  }

  return (
      <section id="film" className="film" >
        {slice.primary.section_title.text && <h3 className='film__title' >
          { title.map((row) => {
            return  <span key={row.text}>{row.text}<br/></span>})
          }
        </h3>}

        <div className="film__content-wrap" style={{ backgroundImage: isPlay && youtubeSrc ? "unset" : `url(${backgroundImageThumb})`}}>
          { !isPlay && <div className="film__content">
            <div>
              {slice.primary.section_title.text && <h3 className='film__title film__title--inner' >
                { title.map((row) => {
                  return  <span key={row.text}>{row.text}<br/></span>})
                }
              </h3>}
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions*/}
              <a className="film__video-btn" onKeyDown={() => { setIsPlay(true) }} onClick={() => { setIsPlay(true) }}>
                <ImgWithFallback
                    classNameImg='w-100'
                    src={playButton.image}
                    alt='Play button'
                    fallbackSrc={playButton.image}
                />
              </a>
              <p className="film__button-text"
                 style={{color: playButton.textColor}}>
                { playButton.text }
              </p>
            </div>
          </div>  }

          { isPlay && youtubeSrc && <div className="film__inline-video">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                  id="video"
                  title={youtubeSrc}
                  className="embed-responsive-item"
                  src={`${youtubeSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
              >
              </iframe>
            </div>
          </div> }
        </div>

        {slice.primary?.section_description?.text && <p className='film__description text-center' >
          { description.map((row) => {
            return  <span key={row.text}><PrismicRichText field={[row]}/><br/></span>})
          }
        </p>}

        {ctaButton.title && <Link
            to={ctaButton.href}
            target="_blank"
            title={ctaButton.title}
            className="button-white film__cta-button"> {ctaButton.title}
            onClick={()=>{
              const dl = {
                url: ctaButton.href,
                referrer: location.pathname,
                name: ctaButton.title.toLowerCase()
              }
                setLearnMoreClickedEvent(dl, oneTrustAccepted)
            }}
            </Link>
        }
      </section>
  )
}