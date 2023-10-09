// core
import React, {useState, useEffect} from 'react'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImgWithFallback from "../ImgWithFallback";
import * as images from '../../assets/images/buy-now-carousel';

const BuyNowCarousel = ({ shopBuyLink, customPage }) => {
  const [flavor, setFlavor] = useState('')

  useEffect(()=>{

    //set initial value
    setFlavor('White Claw® #1 Variety')
  },[])

  const setFlavorName = () => {
    const flavorName =  document.querySelector('.swiper-slide-next').getAttribute("data-flavor")
    setFlavor(flavorName);
  }

  const swiperBreakPoints = {
    0: {
      spaceBetweenSlides: 0,
    },
    500: {
      spaceBetweenSlides: 0,
    },
    992: {
      spaceBetweenSlides: 0
    }
  }

  const CUSTOMPAGES = {
    REDROCKS: 'redrocks',
  }

  return (
      <section className={`ms-contest-shop-wc ${customPage === CUSTOMPAGES.REDROCKS  ? `ms-contest-shop-wc--redrocks` : ''} overflow-hidden py-5 animation-element-container bounce-up`}>
        <div className="container pb-5 py-lg-5">
          <div className="row">
            <div className={customPage === CUSTOMPAGES.REDROCKS ? 'col-lg-8' : 'col-lg-7'}>

              <div className="ms-contest-shop-wc__content mobile-only text-center">
                <h2>SHOP<br/>WHITE CLAW<sup>&reg;</sup></h2>
              </div>

              <Swiper
                  initialSlide={0}
                  slidesPerView={3}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  onSlideChange={() => setFlavorName()}
                  breakpoints = { swiperBreakPoints }
              >
                <SwiperSlide data-flavor="White Claw® #1 Variety">
                   <ImgWithFallback
                      classNameImg='w-100'
                      src={images.vp1Png}
                      alt='White Claw #1 Variety'
                      fallbackSrc={images.vp1Webp}
                  />
                </SwiperSlide>
                <SwiperSlide  data-flavor="White Claw® #2 Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.vp2Png}
                      alt='White Claw #2 Variety'
                      fallbackSrc={images.vp2Png}
                  />
                </SwiperSlide>
                <SwiperSlide data-flavor="White Claw® #3 Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.vp3Png}
                      alt='White Claw #3 Variety'
                      fallbackSrc={images.vp3Png}
                  />
                </SwiperSlide>
                <SwiperSlide data-flavor="White Claw® Surge Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.surgeVpPng}
                      alt='White Claw Surge Variety'
                      fallbackSrc={images.surgeVpWebp}
                  />
                </SwiperSlide>
                <SwiperSlide data-flavor="White Claw® #1 Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.vp1Png}
                      alt='White Claw #1 Variety'
                      fallbackSrc={images.vp1Webp}
                  />
                </SwiperSlide>
                <SwiperSlide  data-flavor="White Claw® #2 Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.vp2Png}
                      alt='White Claw #2 Variety'
                      fallbackSrc={images.vp2Png}
                  />
                </SwiperSlide>
                <SwiperSlide data-flavor="White Claw® #3 Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.vp3Png}
                      alt='White Claw #3 Variety'
                      fallbackSrc={images.vp3Png}
                  />
                </SwiperSlide>
                <SwiperSlide data-flavor="White Claw® Surge Variety">
                  <ImgWithFallback
                      classNameImg='w-100'
                      src={images.surgeVpPng}
                      alt='White Claw Surge Variety'
                      fallbackSrc={images.surgeVpWebp}
                  />
                </SwiperSlide>
                </Swiper>
              <h4 className="ms-contest-shop-wc__flavor">{flavor}</h4>

            </div>
            <div className={`${customPage === CUSTOMPAGES.REDROCKS ? 'col-lg-4' : 'col-lg-5'} d-flex justify-content-center align-items-center text-center`}>

              <div className="ms-contest-shop-wc__content">
                <h2 className="screen-only">SHOP<br/>WHITE CLAW<sup>&reg;</sup></h2>

                <a href={shopBuyLink ? shopBuyLink : "https://shopus.whiteclaw.com/link/16679286068463bc1219f/e546102c-4961-ac71-940b-64995ef4939a"}
                  rel="noreferrer noopener" target="_blank" className="button-style-2 my-3">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BuyNowCarousel