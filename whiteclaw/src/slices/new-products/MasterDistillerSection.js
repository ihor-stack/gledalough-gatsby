import React from 'react'
import {PrismicRichText} from "@prismicio/react";
//assets
import useWindowSize from "../../hooks/useWindowSize";

//components
import ImgWithFallback from "../../components/ImgWithFallback";


export const MasterDistillerSection = ({ slice }) => {
  const { width } = useWindowSize()
  // console.log(slice)

  const image = {
    alt: slice.primary.image.alt,
    screenPng: slice.primary.image.url,
    mobilePng: slice.primary.image_mobile.url,
  }

  const content = {
    title: slice.primary.title.richText,
    subtitle: slice.primary.subtitle.text,
    descriptions: slice.items
  }

  return (<section className='distiller'>
        <div className='distiller__container position-relative'>
          <div className='row mr-0'>
            <div className='distiller__img-wrap col-12 col-lg-6'>

              < ImgWithFallback
                  classNameImg='distiller__img'
                  src={width <= 992 ? image.mobilePng : image.screenPng}
                  alt={image.alt}
                  fallbackSrc={width <= 992 ? image.mobilePng : image.screenPng}
              />

            </div>
            <div className='distiller__content-wrap col-12 col-lg-4'>

              <h4 className='pb-0 distiller__title'>
                {content.title.map((row) => {
                  return  <span key={row.text}>{row.text}<br/></span>
                }) }
              </h4>

              <h5 className='pb-0 distiller__subtitle'>
                {content.subtitle}
              </h5>

              {content.descriptions.map(({description_paragraph})=>{
                return <p className='distiller__description' key={description_paragraph.text}>
                     <PrismicRichText field={description_paragraph.richText} />
                </p> })}
            </div>
          </div>
        </div>
      </section>
  )
}


