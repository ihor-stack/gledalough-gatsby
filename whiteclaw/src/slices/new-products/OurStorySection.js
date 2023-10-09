import React from 'react'
import { useLocation } from "@reach/router";
import { PrismicRichText } from "@prismicio/react";

// components
import CustomLink from "../../components/CustomLink";

// data-layer
import { setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const OurStorySection = ({ slice }) => {
  const location = useLocation()
  // console.log(slice)
  const titleRows = slice.primary.title.richText
  const descriptionRows = slice.primary.description.richText
  const oneTrustAccepted = useOneTrust()

  const button = {
    href: slice.primary.button.url || '',
    text: slice.primary.button_text.text || '',
  }

  return (
      <section className='our-story-section'>
          <div className='row our-story-section__content m-0'>
            <h2 className='our-story-section__title'>
              {titleRows && titleRows.map((row) => {
                return  <span key={row.text}><PrismicRichText field={[row]}/><br/></span>
              })}
            </h2>

            <p className='our-story-section__description'>
              {descriptionRows.length && descriptionRows.map((row, index)=>{
                return <span key={`paragraph-${index}`}><PrismicRichText field={[row]}/><br/></span>
              })}
            </p>

            <CustomLink
                to={button.href}
                title={button.text}
                className="button-white our-story-section__button"
                onClick={ ()=> {
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
          </div>
      </section>
  )
}