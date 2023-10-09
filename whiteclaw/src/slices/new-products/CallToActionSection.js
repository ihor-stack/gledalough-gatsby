import React from 'react'
import { useLocation } from "@reach/router";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "gatsby";

//assets
import useWindowSize from "../../hooks/useWindowSize";

// data-layer
import { setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const CallToActionSection = ({ slice }) => {
  const location = useLocation()
  const { width } = useWindowSize()
  // console.log(slice)
  const titleRows = slice.primary.title.richText
  const descriptionRows = slice.primary.description.richText
  const oneTrustAccepted = useOneTrust()


  const button = {
    href: slice.primary.button.url,
    text: slice.primary.button_text.text,
  }

  const bgImageUrl = {
    mobile : slice.primary.background_image_mobile.url || '',
    screen : slice.primary.background_image.url || ''
  }


  return (
      <section className='cta-section'
               style={{backgroundImage: `${ width <= 992 ? `url(${bgImageUrl.mobile})` : `url(${bgImageUrl.screen})`}`}}>
        <div className='row cta-section__content m-0'>
          <h2 className='cta-section__title'>
            {titleRows && titleRows.map((row) => {
              return  <span key={row.text}>{row.text}<br/></span>
            }) }
          </h2>

          <p className='cta-section__description'>
            {descriptionRows.length && descriptionRows.map((row, index)=>{
              return <span key={`paragraph-${index}`}><PrismicRichText field={[row]}/><br/></span>
            })}
          </p>

          <Link
              to={button.href || ''}
              target="_blank"
              title={button.text}
              className="button-white cta-section__button"
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
          </Link>
        </div>
      </section>
  )
}