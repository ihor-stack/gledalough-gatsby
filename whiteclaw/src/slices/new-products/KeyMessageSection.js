import React from 'react'
import { PrismicRichText } from "@prismicio/react";

export const KeyMessageSection = ({ slice }) => {
  const titleRows = slice.primary.title.richText

  const bgImageUrl = {
    screen : slice.primary.background_image.url || ''
  }


  return (
      <section className='key-message'
               style={{backgroundImage: `url(${bgImageUrl.screen})`}}>
        <div className='container'>
          <div className='row key-message__content'>
            <h2>
              {titleRows && titleRows.map((row) => {
                return  <span key={row.text}><PrismicRichText field={[row]}/><br/></span>
              }) }
            </h2>
          </div>
        </div>
      </section>
  )
}