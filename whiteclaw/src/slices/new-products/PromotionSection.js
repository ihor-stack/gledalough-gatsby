//core
import React, {useState,useEffect} from 'react'

//assets
import useWindowSize from '../../hooks/useWindowSize'

//components
import ImgWithFallback from "../../components/ImgWithFallback";


export const PromotionSection = ({ slice }) => {
  const [isMobile, setIsMobile] = useState(false)
  const { width } = useWindowSize()


  useEffect(()=>{

    if(!width){
      return
    }

   width <= 992 ? setIsMobile( true) : setIsMobile( false)

  }, [width])

  const sectionDescription  = slice.primary.description.richText

  const mobileImage = {
    png : slice.primary.product_image_mobile.url,
    alt : slice.primary.product_image_mobile.alt
  }

  const desktopImage = {
    png : slice.primary.product_image.url,
    alt : slice.primary.product_image.alt
  }

  const button  = {
    text: slice.primary.button_text.text,
    link: slice.primary.link.url
  }


  return (
      <section id='promotion' className="promotion">
        <div className="container promotion__container">
          <div className="row promotion__container-row">
            <div className="col-7 col-lg-7 promotion__content">
                <h3 className='promotion__description mb-3'>
                  { sectionDescription && sectionDescription.map((row) => {
                    return  <span key={row.text}>{row.text}<br/></span>
                  }) }
                </h3>
                <a href={button.link} className='button-white promotion__button'>
                  { button.text }
                </a>
            </div>
            <div className="col-5 col-lg-5 p-0 promotion__img">

              < ImgWithFallback
                classNameImg='w-100'
                src={ isMobile ? mobileImage.png : desktopImage.png}
                alt={ desktopImage.alt }
                fallbackSrc={isMobile ? mobileImage.png  : desktopImage.png}
                />

            </div>
          </div>
        </div>
      </section>
  )
}