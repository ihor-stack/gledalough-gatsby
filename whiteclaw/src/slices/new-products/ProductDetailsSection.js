import React, { useRef} from 'react'
import { PrismicRichText } from "@prismicio/react";

// assets
import useWindowSize  from "../../hooks/useWindowSize";


//components
import ImgWithFallback from "../../components/ImgWithFallback";

// data-layer
import { setBuyNowClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/mousewheel';


export const ProductDetailsSection = ({ slice }) => {
  const { width } = useWindowSize()
  const refSection = useRef(null)
  const productCategory = slice.primary.product_type
  const oneTrustAccepted = useOneTrust()
  const bgImageUrl = {
    mobile : slice.primary.background_image_mobile.url || '',
    screen : slice.primary.background_image.url || ''
  }

  const onBuyNowClick = (product)=>{
    const dl = {
      flavor: product,
      category: productCategory
    }
    setBuyNowClickedEvent(dl, oneTrustAccepted)
  }

  const slides = slice.items
  return (
      <>
        <section id='new-product-details' className="new-product-details"  ref={refSection}>

          <div className='container new-product-details__container'>
            <div className=''>
                {slides && slides.map((
                    { title,
                      title_color,
                      aroma_description,
                      aroma_title,
                      taste_description,
                      taste_title,
                      finish_description,
                      finish_title,
                      button_text,
                      button_link,
                      product_image
                    })=> {
                  return <div key={title.text} className='w-100'>
                    <div className='slide position-relative'>
                      <div className='new-product-details__bgr-container'
                           style={{backgroundImage: `${ width <= 992 ? `url(${bgImageUrl.mobile})` : `url(${bgImageUrl.screen})`}`}}
                      ></div>

                      <div className='slide__content-container'>
                        <div className='slide__content-wrap col-sm-8 col-lg-7 w-100'>
                      <h4 className='slide__title' style={{color: title_color}}>
                        <PrismicRichText field={title.richText} />
                      </h4>
                      <div>
                        <h5 className='slide__subtitle'>{aroma_title}</h5>
                        <p className='slide__description'>
                          {aroma_description.text}
                        </p>

                        <h5 className='slide__subtitle'>{taste_title}</h5>
                        <p className='slide__description'>
                          {taste_description.text}
                        </p>

                        <h5 className='slide__subtitle'>{finish_title}</h5>
                        <p className='slide__description'>
                          {finish_description.text}
                        </p>
                      </div>
                      <a href={button_link.url} className='button-white slide__button-white ml-0'
                         onClick={() => {
                           onBuyNowClick(title.text.toLowerCase())
                         }}
                         target='_blank'
                         rel='noopener noreferrer'
                      >
                        {button_text.text}
                      </a>
                    </div>
                        <div className='slide__image-wrap w-100 col-sm-4 col-lg-5'>
                          <ImgWithFallback
                            classNameImg='slide__product'
                            src={product_image.url}
                            alt={product_image.alt}
                            fallbackSrc={product_image.url}
                        />
                    </div>
                      </div>
                    </div>

                    <a href={button_link.url}
                       className='btn button-black  slide__button-black slide__btn'
                       onClick={() => {
                         onBuyNowClick(title.text.toLowerCase())
                       }}
                       target='_blank'
                       rel='noopener noreferrer'
                    >
                      {button_text.text}
                    </a>
                  </div>
                })}


            </div>
          </div>
        </section>
      </>
  )
}


// import React, {useEffect, useRef, useState} from 'react'
//
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
//
// // import Swiper core and required modules
// import {Mousewheel, Pagination, Keyboard, Navigation} from 'swiper';
//
// // assets
// import useWindowSize  from "../../assets/js/useWindowSize";
// import useOnScreen from "../../assets/js/useOnScreen";
// import useScrollPosition from '../../assets/js/useScrollPosition'
// import useScrollDirection from "../../assets/js/useScrollDirection";
//
// //components
// import ImgWithFallback from "../../components/ImgWithFallback";
//
//
// // Import Swiper styles
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/mousewheel';
//
// export const ProductDetailsSection = ({ slice }) => {
//   const [btnLinks, setBtnLinks] = useState('')
//   const [btnTexts, setBtnTexts] = useState('')
//   const [currSlideInx, setCurrSlideInx] = useState(0)
//
//   const { width } = useWindowSize()
//   const scrollPosition = useScrollPosition()
//   const refSection = useRef(null)
//   const isIntersecting =  useOnScreen(refSection)
//   const scrollDir = useScrollDirection()
//
//
//   const bgImageUrl = {
//     mobile : slice.primary.background_image_mobile.url || '',
//     screen : slice.primary.background_image.url || ''
//   }
//
//   const slides = slice.items
//
//   useEffect(()=>{
//   const buttonLinks = slides.map((slide) => {
//     return slide.button_link.text
//   });
//   const buttonTexts = slides.map((slide) => {
//     return slide.button_text.text
//   });
//
//     setBtnLinks(buttonLinks);
//     setBtnTexts(buttonTexts);
//   },[slice.items])
//   //
//   //
//   //
//   //
//   // // scrolling up when element is intersecting
//   // useEffect(()=>{
//   //   // if(isIntersecting){
//   //   //
//   //   //   // disableScroll()
//   //   //   // document.body.style.overflowY = "hidden"
//   //   //   setTimeout(()=> {
//   //   //     document.querySelector('.new-product-details').classList.add('is-sticky')
//   //   //   }, 2000 )
//   //   //
//   //   //   // disableScroll()
//   //   //   if(currSlideInx === 2  || currSlideInx === 0 && scrollDir === 'up') {
//   //   //
//   //   //     setTimeout(()=>{
//   //   //
//   //   //       document.querySelector('.new-product-details').classList.remove('is-sticky')
//   //   //       // enableScroll()
//   //   //     //   document.body.style.overflowY = "visible"
//   //   //     //   document.body.style.overflowX = "hidden"
//   //   //     },300)
//   //   //   }
//   //   // } else {
//   //   //
//   //   // }
//   //   const  scrollTop = document.querySelector('.new-product-details').offsetTop - 80;
//   //   const scrollBottom = document.querySelector('.new-product-details').offsetHeight - 80;
//   //   console.log(Math.round(scrollPosition), scrollBottom)
//   //   if (scrollPosition > scrollTop){
//   //     document.querySelector('.new-product-details').classList.add('is-sticky')
//   //     disableScroll()
//   //   }
//   //
//   //   if(currSlideInx === 2){
//   //     enableScroll()
//   //     document.querySelector('.new-product-details').classList.remove('is-sticky')
//   //
//   //   }
//   //
//   //
//   //
//   // }, [scrollPosition])
//   //
//   //
//   // function disableScroll() {
//   //   // Get the current page scroll position
//   //   const  scrollTop = document.querySelector('.new-product-details').offsetTop - 80;
//   //   const  scrollLeft = document.querySelector('.new-product-details').offsetLeft;
//   //   window.scrollTo(scrollLeft, scrollTop)
//   //   window.onscroll = function() {window.scrollTo(scrollLeft, scrollTop)};
//   // }
//   //
//   // function enableScroll() {
//   //   window.onscroll = function() {};
//   // }
//   //
//   //
//
//
//   // useEffect(()=>{
//   //   const isPrevDisabled = document.querySelector('.new-product-details__swiper .swiper-button-prev').classList.contains('swiper-button-disabled')
//   //   const isNextDisabled = document.querySelector('.new-product-details__swiper .swiper-button-next').classList.contains('swiper-button-disabled')
//   //   const  scrollY =document && document.querySelector('.new-product-details').offsetTop - 80;
//   //   const  scrollX = document.querySelector('.new-product-details').offsetLeft;
//   //
//   //   if(isPrevDisabled || !isPrevDisabled){
//   //     document.querySelector('.new-product-details').classList.add('is-sticky')
//   //     document.querySelector('.about-new-product').classList.remove('is-sticky')
//   //   }
//   //
//   //
//   //   if(isNextDisabled){
//   //     document.querySelector('.new-product-details').classList.remove('is-sticky')
//   //     // window.scrollTo(scrollX, scrollY)
//   //     document.querySelector('.about-new-product').classList.add('is-sticky')
//   //
//   //   }
//   //
//   // }, [currSlideInx])
//
//
//   return (
//       <>
//         <section id='new-product-details' className="new-product-details"  ref={refSection}>
//         <div className='new-product-details__bgr-container'
//              style={{backgroundImage: `${ width <= 992 ? `url(${bgImageUrl.mobile})` : `url(${bgImageUrl.screen})`}`}}
//         ></div>
//         <div className='container new-product-details__container'>
//           <div>
//             <Swiper
//                 initialSlide={0}
//                 direction="vertical"
//                 keyboard={true}
//                 modules={[Pagination, Keyboard, Mousewheel, Navigation]}
//                 onSlideChange={(e) => {
//                   setCurrSlideInx(e.activeIndex)
//                 }}
//                 navigation={false}
//                 slidesPerView={1}
//                 spaceBetween={0}
//                 centeredSlides={false}
//                 mousewheel={{
//                   sensitivity: 1,
//                   releaseOnEdges: true,
//                 }}
//             >
//               {slides && slides.map((
//                   { title,
//                     title_color,
//                     aroma_description,
//                     taste_description,
//                     finish_description,
//                     button_text,
//                     button_link,
//                     product_image,
//                     product_image_webp
//                   })=> {
//                 return <SwiperSlide className='slide' key={title.text}>
//                         <div className='slide__content-wrap col-sm-8 col-lg-7 w-100'>
//                           <h4 className='slide__title' style={{color: title_color}}>
//                             { title.text }
//                           </h4>
//                           <div>
//                             <h5 className='slide__subtitle'>Aroma</h5>
//                             <p className='slide__description'>
//                               {aroma_description.text}
//                             </p>
//
//                             <h5 className='slide__subtitle'>Taste</h5>
//                             <p className='slide__description'>
//                               {taste_description.text}
//                             </p>
//
//                             <h5 className='slide__subtitle'>Finish</h5>
//                             <p className='slide__description'>
//                               {finish_description.text}
//                             </p>
//                           </div>
//                           <a href={button_link.url} className='button-white slide__button-white ml-0'>
//                             {button_text.text}
//                           </a>
//                         </div>
//                         <div className='slide__image-wrap w-100 col-sm-4 col-lg-5'>
//                           <ImgWithFallback
//                             classNameImg='slide__product'
//                             src={product_image.url}
//                             alt={product_image.alt}
//                             fallbackSrc={product_image_webp.url}
//                       />
//                       </div>
//                 </SwiperSlide>
//               })}
//             </Swiper>
//
//           </div>
//         </div>
//         <a href={btnLinks[currSlideInx]} className='btn button-style-2 slide__btn'>
//           { btnTexts[currSlideInx] }
//         </a>
//       </section>
//       </>
//   )
// }
//
