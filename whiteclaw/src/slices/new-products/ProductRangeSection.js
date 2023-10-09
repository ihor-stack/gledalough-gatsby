import React from 'react'
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

// assets
import useWindowSize  from "../../hooks/useWindowSize";

// components
import ImgWithFallback from "../../components/ImgWithFallback";

// data-layer
import { setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const ProductRangeSection = ({ slice }) => {
  const location = useLocation()
  const { width } = useWindowSize()

  const titleRows = slice.primary.title.richText
  const productItems = slice.items
  const oneTrustAccepted = useOneTrust()

  const button = {
    href: slice.primary.cta_button.url || '',
    text: slice.primary.cta_button_text.text || ''
  }

  const bgImageUrl = {
    mobile: slice.primary.background_image_mobile.url,
    screen: slice.primary.background_image.url
  }

  return (
      <section className='range'
               style={{backgroundImage: `${ width && width <= 992 ? `url(${bgImageUrl.mobile})` : `url(${bgImageUrl.screen})`}`}}
      >
        <div className='container range__container'>
          <div className='range__content'>
            <div className='range__title-container'>
              <h3 className='range__title pb-0'>
                {titleRows && titleRows.map((row) => {
                  return  <span key={row.text}>{row.text}<br/></span>
                }) }
              </h3>
            </div>
            <div className='range__items-container'>
              {productItems?.length && productItems.map(({product_image}) => {
                return < ImgWithFallback
                    classNameImg='range__item'
                    src={product_image.url}
                    alt={product_image.alt}
                    fallbackSrc={product_image.url}
                    key={product_image.url}
                />
              })}
            </div>
            <div className='pt-5'>
              { button.href && <Link
                  to={`${button.href}#vodka`}
                  className='button-white'
                  onClick={()=> {
                    const dl = {
                      url: button.href + "#vodka",
                      referrer: location.pathname,
                      name: button.text.toLowerCase()
                    }
                    setLearnMoreClickedEvent(dl, oneTrustAccepted)
                  }}
              >
                {button.text}
              </Link> }
            </div>
          </div>
        </div>
      </section>
  )
}