import React, { useRef } from 'react'
import {PrismicRichText} from "@prismicio/react";
// assets
import useWindowSize  from "../../hooks/useWindowSize";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/mousewheel';
import {setBuyNowClickedEvent} from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'


export const AboutProductSection = ({ slice }) => {
  const refSection = useRef(null)
  const { width } = useWindowSize()
  const oneTrustAccepted = useOneTrust()


  const slides = slice.items
  // console.log(slides)
  const slide = {
    buttonText: slides[0].button_text.text,
    link: slides[0].button_link.url,
    title: slides[0].slide_title.richText,
    titleColor: slides[0].slide_title_color,
  }
  // console.log(slides[0])

  const videoUrl = {
    mobile : slice.primary.video_link_mobile.url || '',
    screen : slice.primary.video_link.url || ''
  }

  return (
      <section className='about-new-product'
               ref={refSection}
      >
        <div className='container about-new-product__container'>
          { width <= 992 && <div className='slide__title'>
            <h4 style={{color: slide.titleColor}}>
              <PrismicRichText field={[slide.title]}/>
            </h4>
          </div> }
          <div className='d-flex align-items-center flex-column about-new-product__items'>
              {slides && slides.map((
                  { slide_title,
                    slide_title_color,
                    slide_description,
                    button_text,
                    button_link,
                    slide_image
                  }, index)=> {
                return <div key={`${slide_title.text+index}`} className="w-100 slide__item">
                  <div className='slide'>
                    <div className='slide__content-wrap col-lg-7'>

                      <div>
                        <p className='slide__description'>
                          { slide_description.text }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              })}
          </div>
          <div className='slide__video-wrap w-100 col-sm-8 col-lg-8 p-0'>
            <div className='slide__video-sticky-container'>
              <div style={{overflow: "hidden"}}>
                { width > 992 && <div className='slide__title'>
                  <h4 style={{color: slide.titleColor}}>
                    <PrismicRichText field={slide.title}/>
                  </h4>
                </div> }
                { width > 992 && <div className='slide__button'>
                  <a href={slide.link} className='button-white slide__button-white  ml-0'
                     target='_blank'
                     rel='noopener noreferrer'
                     onClick={()=> {

                       const dl = {
                         flavor: 'white claw™ premium vodka',
                         category: 'vodka'
                       }

                       setBuyNowClickedEvent(dl, oneTrustAccepted)
                     } }
                  >
                  { slide.buttonText }
                  </a>
                </div> }

                <video autoPlay playsInline muted loop={true}>
                  <source src={width <= 992 ? videoUrl.mobile : videoUrl.screen}  type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
          <a  href={slide.link} className='btn button-black slide__button-black'
              target='_blank'
              rel='noopener noreferrer'
              onClick={()=> {

                const dl = {
                  flavor: 'white claw™ premium vodka',
                  category: 'vodka'
                }

                setBuyNowClickedEvent(dl, oneTrustAccepted)
              } }
          >
            {slide.buttonText}
          </a>
        </div>
      </section>
  )
}
