import React from 'react'
import { useLocation } from "@reach/router";

//components
import ImgWithFallback from "../../components/ImgWithFallback";
import CustomLink from "../../components/CustomLink";

// data-layer
import { setBuyNowClickedEvent, setLearnMoreClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const PromoModule = ({ slice }) => {
  const location = useLocation()
  const promoItems = slice.items
  // console.log(slice)
  const {title} = slice.primary
  const oneTrustAccepted = useOneTrust()

  return (
      <section className='promo-module pb-5'>
          <div className='promo-module__content'>
            <h4 className='promo-module__title'>
              {title.text}
            </h4>
            <div className='row promo-module__cards'>
            {promoItems.map(({ image,
                               subtitle,
                               button_link,
                               button_text}) => {
              return <div key={subtitle.text} className='col-lg-4 col-sm-12 text-center'>
                < ImgWithFallback
                  classNameImg='w-100 promo-module__image'
                  src={image.url}
                  alt={image.alt}
                  fallbackSrc={image.url}
                />
                <div className='promo-module__content-wrap'>
                  <h5 className='promo-module__subtitle'>
                    {subtitle.text}
                  </h5>
                  <CustomLink
                      to={button_link.url || ''}
                      title={subtitle.text}
                      className="button-white promo-module__button"
                      onClick={()=>{

                        if( button_link.url.includes('locator') &&
                            button_link.link_type === "Web") {
                          setBuyNowClickedEvent({ flavor: '', category: '' }, oneTrustAccepted)
                        }

                        if(button_link.link_type === 'Document') {
                          const dl = {
                            url: button_link.url,
                            referrer: location.pathname,
                            name: button_text.text.toLowerCase()
                          }
                          setLearnMoreClickedEvent(dl, oneTrustAccepted)
                        }
                      }}
                  >
                    {button_text.text}
                  </CustomLink>
                </div>
              </div>
            })}
            </div>
          </div>
      </section>
  )
}