// core
import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import Fade from 'react-reveal/Fade';

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import * as images from '../assets/images/microsites/clawback'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import Swiper core and required modules
import { Navigation } from 'swiper';
import MicrositeHeader from '../components/microsites/MicrositeHeader'
import ImgWithFallback from '../components/ImgWithFallback'
import useWindowSize from "../hooks/useWindowSize";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ClawBack = ({data}) => {
  const pageContent = data.prismicMicrosite
  const { type, url } = pageContent
  const { meta_title, meta_description, social_card } = data.prismicMicrosite.data
  const [instaSection, setInstaSection] = useState(false)
  const { width } = useWindowSize()

  const alternateLanguages = pageContent.alternate_languages || []
  const lang = "en-us"

  const activeDoc = { 
    lang,
    type,
    url,
    alternateLanguages,
  }

  const prizesClosed = {
    chef: false,
    mansion: false,
    sailing: false,
    island: false
  }

  const clawBackData = {
    closedText: 'Winners chosen',
    deadlinePassed: 'DEADLINE PASSED',
    enterOnInstagram: 'FOLLOW TO ENTER',
    instagramURL: 'https://www.instagram.com/whiteclaw/',
    instagramURLCopy: 'FOLLOW FOR UPDATES',
    headline: {
      first: 'SUMMER ISN’T',
      second: 'GOING TO',
      third: 'ENJOY ITSELF.'
    },
    instagram: {
      h2first: 'We’re on a mission to ',
      h2second: 'help you take time off and ',
      h2third: 'CLAW™ Back Your Summer.',
      bodyfirst: 'Throughout the season, we’re giving away four epic escapes on our Instagram.',
      bodysecond: ' Follow along for chances to win big.',
      h2sub: 'WIN ESCAPES ALL SUMMER'
    },
    chef: {
      h2first: 'A night off with ',
      h2second: 'your own personal chef',
      bodyfirst: 'Your kitchen is closed for the night.',
      bodysecond: 'We’re sending a private chef to your place to prepare a five-course tasting menu inspired by your favorite White Claw® flavor for you and five friends.',
    },
    mansion: {
      h2: 'A day off mansion livin’',
      bodyfirst: 'Too many days on deserve a day off.',
      bodysecond: 'We’re renting a mansion for you and all of your friends for the day, complete with party staff, meals, transportation, and good vibes.',
    },
    sailing: {
      h2: 'A LONG WEEKEND OFF SAILING THE WAVES',
      bodyfirst: 'Sail away from your responsibilities. For real.',
      bodysecond: 'We’re giving away a three-day chartered sailing trip of a lifetime for you and a friend. Think snorkeling deep-sea fishing, and lounging in the sun.',
    },
    island: {
      h2first: 'A WEEK OFF-GRID',
      bodyfirst: 'Finally going on a getaway means getting away from work emails and your boss.',
      bodysecond: 'We’re giving away a weeklong, off-grid trip, so you can escape the notifications and get to living your best summer life.',
    }
  }

  useEffect(()=> {
    const htmlElement = document.querySelector('html')
    htmlElement.style.scrollBehavior = 'smooth'

    return () => htmlElement.style.scrollBehavior = 'unset'
  },[])

  return (
    <Layout currentPage="clawback" activeDocMeta={activeDoc}>
      <MicrositeHeader customPage="clawback" />
      <Seo title={meta_title?.text} description={meta_description?.text} image={social_card?.url} />
      <div className="cb-page-bg">
        <ImgWithFallback classNamePicture="cb-page-bg__img" src={images.cbPageBg} alt="" />
      </div>
      <section className="cb-hero" id="home">
        <div className="cb-hero__slide cb-hero__slide--yellow">
          <ImgWithFallback classNamePicture="cb-hero__logo" src={images.cbLogo} alt="" />
          <ImgWithFallback classNamePicture="cb-hero__bg" src={images.cbHeroBg} alt="" />
          <h1 className="cb-hero__text">
            <span className="cb-hero__text-first">{clawBackData.headline.first}</span>
            <span className="cb-hero__text-second">{clawBackData.headline.second}</span>
            <span className="cb-hero__text-third">{clawBackData.headline.third}</span>
          </h1>
        </div>
        <div className="cb-hero__slide">
          <ImgWithFallback classNamePicture="cb-hero__bg" src={images.cbHeroBg} alt="" />
        </div>
        <Fade duration={500} when={instaSection}>
          <div className="cb-hero__slide cb-hero__slide--final">
            <ImgWithFallback classNamePicture="cb-hero__bg" src={images.cbHeroBg} alt="" />
            <Fade bottom duration={300} delay={400} distance={"20px"} when={instaSection}>
              <ImgWithFallback classNamePicture="cb-hero__logo" src={images.cbLogo} alt="" />
            </Fade>
          </div>
        </Fade>
      </section>
      <Fade
        duration={0}
        onReveal={() => {
          if (width > 991) setInstaSection(!instaSection);
        }}
      >
        <section className="cb-text-image cb-text-image--instagram" id="instagram">
          <div className="cb-text-image__text">
            <h2>
              {clawBackData.instagram.h2first} <br className="d-none d-lg-block" />
              {clawBackData.instagram.h2second} <br className="d-none d-lg-block" />
              {clawBackData.instagram.h2third}
            </h2>
            <p>
            {clawBackData.instagram.bodyfirst}
              <br className="d-none d-lg-block" />{clawBackData.instagram.bodysecond}
            </p>
            <a href={clawBackData.instagramURL} target="_blank" className="cb-button">
              {clawBackData.instagramURLCopy}
            </a>
            <h2 className="cb-text-image__text-large">{clawBackData.instagram.h2sub}</h2>
          </div>
        </section>
      </Fade>
      {/* Desktop layout */}
      {width > 991 && (
        <>
          <Fade
            bottom
            duration={1000}
            delay={100}
            distance={"20px"}
            onReveal={() => {
              if (width <= 991) setInstaSection(!instaSection);
            }}
          >
            <section className="cb-text-image" id="chef">
              <div className={`cb-text-image__image ${prizesClosed.chef ? "cb-text-image__image--closed" : ""}`}>
                <ImgWithFallback src={images.cbChef} alt="" />
                {prizesClosed.chef && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
              <div className="cb-text-image__text">
                <h2><span className='text-nowrap'>{clawBackData.chef.h2first}</span><br/>{clawBackData.chef.h2second}</h2>
                <p>{clawBackData.chef.bodyfirst}</p>
                <p>{clawBackData.chef.bodysecond}</p>
                <a href={clawBackData.instagramURL} target="_blank" className={`cb-button ${prizesClosed.chef ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.chef ? clawBackData.deadlinePassed : clawBackData.enterOnInstagram}
                </a>
              </div>
            </section>
          </Fade>
          <Fade bottom duration={1000} delay={100} distance={"20px"}>
            <section className="cb-text-image cb-text-image--reverse" id="mansion">
              <div className="cb-text-image__text">
                <h2>{clawBackData.mansion.h2}</h2>
                <p>{clawBackData.mansion.bodyfirst}</p>
                <p>{clawBackData.mansion.bodysecond}</p>
                <a href={clawBackData.instagramURL} target="_blank" className={`cb-button ${prizesClosed.mansion ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.mansion ? clawBackData.deadlinePassed : clawBackData.enterOnInstagram}
                </a>
              </div>
              <div className={`cb-text-image__image ${prizesClosed.mansion ? "cb-text-image__image--closed" : ""}`}>
                <ImgWithFallback src={images.cbMansion} alt="" />
                {prizesClosed.mansion && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
            </section>
          </Fade>
          <Fade bottom duration={1000} delay={100} distance={"20px"}>
            <section className="cb-text-image cb-text-image--sailing" id="sailing">
              <div className={`cb-text-image__image ${prizesClosed.sailing ? "cb-text-image__image--closed" : ""}`}>
                <ImgWithFallback src={images.cbSailing} alt="" />
                {prizesClosed.sailing && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
              <div className="cb-text-image__text">
                <h2>{clawBackData.sailing.h2}</h2>
                <p>{clawBackData.sailing.bodyfirst}</p>
                <p>{clawBackData.sailing.bodysecond}</p>
                <a href={clawBackData.instagramURL} target="_blank" className={`cb-button ${prizesClosed.sailing ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.sailing ? clawBackData.deadlinePassed : clawBackData.enterOnInstagram}
                </a>
              </div>
            </section>
          </Fade>
          <Fade bottom duration={1000} delay={100} distance={"20px"}>
            <section className="cb-text-image cb-text-image--island cb-text-image--reverse" id="island">
              <div className="cb-anchor" id="enter"></div>
              <div className="cb-text-image__text">
                <h2 className='text-nowrap'>{clawBackData.island.h2first}</h2>
                <p>{clawBackData.island.bodyfirst}</p>
                <p>{clawBackData.island.bodysecond}</p>
                <Link to="/sweepstakes/whiteclawgear/" className={`cb-button cb-button--black ${prizesClosed.island ? "cb-button--disabled" : ""}`} onClick={() => document.querySelector('html').style.scrollBehavior = 'unset'}>
                  {prizesClosed.island ? clawBackData.deadlinePassed : "ENTER NOW"}
                </Link>
              </div>
              <div className={`cb-text-image__image ${prizesClosed.island ? "cb-text-image__image--closed" : ""}`}>
                <ImgWithFallback src={images.cbIsland} alt="" />
                {prizesClosed.island && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
            </section>
          </Fade>
        </>
      )}
      {/* Mobile layout */}
      {width <= 991 && (
        <Swiper
        initialSlide={0}
        slidesPerView={1}
        navigation={true} 
        modules={[Navigation]}
        id="enter"
        >
          <SwiperSlide>
            <section className="cb-text-image cb-text-image--chef" id="chef">
              <div className={`cb-text-image__image ${prizesClosed.chef ? "cb-text-image__image--closed" : ""}`}>
                <h2>{clawBackData.chef.h2first}<br/>{clawBackData.chef.h2second}</h2>
                <a href={clawBackData.instagramURL} target="_blank" className={`cb-button ${prizesClosed.chef ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.chef ? width <= 991 ? clawBackData.closedText : clawBackData.deadlinePassed : <><FontAwesomeIcon icon={faInstagram} className="fa-icons"/><span>{clawBackData.enterOnInstagram}</span></>}
                </a>
                <ImgWithFallback src={images.cbChefMobile} alt="" />
                {prizesClosed.chef && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
              <div className="cb-text-image__text">
                <p>{clawBackData.chef.bodyfirst}</p>
                <p>{clawBackData.chef.bodysecond}</p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="cb-text-image cb-text-image--mansion" id="mansion">
              <div className={`cb-text-image__image ${prizesClosed.mansion ? "cb-text-image__image--closed" : ""}`}>
                <h2>{clawBackData.mansion.h2}</h2>
                <a href={clawBackData.instagramURL} target="_blank" className={`cb-button ${prizesClosed.mansion ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.mansion ? width <= 991 ? clawBackData.closedText : clawBackData.deadlinePassed : <><FontAwesomeIcon icon={faInstagram} className="fa-icons"/><span>{clawBackData.enterOnInstagram}</span></>}
                </a>
                <ImgWithFallback src={images.cbMansionMobile} alt="" />
                {prizesClosed.mansion && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
              <div className="cb-text-image__text">
                <p>{clawBackData.mansion.bodyfirst}</p>
                <p>{clawBackData.mansion.bodysecond}</p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="cb-text-image cb-text-image--sailing" id="sailing">
              <div className={`cb-text-image__image ${prizesClosed.sailing ? "cb-text-image__image--closed" : ""}`}>
                <h2>{clawBackData.sailing.h2}</h2>
                <a href={clawBackData.instagramURL} target="_blank" className={`cb-button ${prizesClosed.sailing ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.sailing ? width <= 991 ? clawBackData.closedText : clawBackData.deadlinePassed : <><FontAwesomeIcon icon={faInstagram} className="fa-icons"/><span>{clawBackData.enterOnInstagram}</span></>}
                </a>
                <ImgWithFallback src={images.cbSailingMobile} alt="" />
                {prizesClosed.sailing && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
              <div className="cb-text-image__text">
                <p>{clawBackData.sailing.bodyfirst}</p>
                <p>{clawBackData.sailing.bodysecond}</p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="cb-text-image cb-text-image--island" id="island">
            <div className="cb-anchor"></div>
              <div className={`cb-text-image__image ${prizesClosed.island ? "cb-text-image__image--closed" : ""}`}>
                <h2>{clawBackData.island.h2first}</h2>
                <a href="/sweepstakes/whiteclawgear/" className={`cb-button cb-button--black ${prizesClosed.island ? "cb-button--disabled" : ""}`}>
                  {prizesClosed.island ? width <= 991 ? clawBackData.closedText : clawBackData.deadlinePassed : "ENTER NOW"}
                </a>
                <ImgWithFallback src={images.cbIslandMobile} alt="" />
                {prizesClosed.island && <div className="cb-text-image__closedtext">{clawBackData.closedText}</div>}
              </div>
              <div className="cb-text-image__text">
                <p>{clawBackData.island.bodyfirst}</p>
                <p>{clawBackData.island.bodysecond}</p>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      )}

      <section className="cb-gallery">
        <div className="cb-anchor" id="gallery"></div>
        <Fade bottom duration={1000} distance={"20px"}>
          <div className="cb-gallery__item">
            <div className="cb-gallery__card">
              <ImgWithFallback src={images.cbPhotoWoman} alt="" />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} delay={150} distance={"20px"}>
          <div className="cb-gallery__item">
            <div className="cb-gallery__card">
              <ImgWithFallback src={images.cbCouple} alt="" />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} delay={300} distance={"20px"}>
          <div className="cb-gallery__item">
            <div className="cb-gallery__card">
              <ImgWithFallback src={images.cbHeroBg} alt="" />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} delay={450} distance={"20px"}>
          <div className="cb-gallery__item">
            <div className="cb-gallery__card">
              <ImgWithFallback src={images.cbOceanPeople} alt="" />
            </div>
          </div>
        </Fade>
        {/* Desktop only card */}
        {width > 991 && 
          <Fade bottom duration={1000} delay={600} distance={"20px"}>
            <div className="cb-gallery__item">
              <div className="cb-gallery__card">
                <ImgWithFallback src={images.cbBeachPeople} alt="" />
              </div>
            </div>
          </Fade>
        }
      </section>
      <section className="cb-fineprint">
        <p>
          <strong>White Claw® Hard Seltzer Claw Back Your Summer Sweepstakes</strong>
          <br />
          <strong>NO PURCHASE NECESSARY</strong>. Void AK/HI and wherever prohibited by law. 21+ ONLY. The White Claw® Hard Seltzer Claw Back Summer Sweepstakes is sponsored by Mark Anthony Brands
          Inc., Chicago, IL. Open only to legal residents of the 48 contiguous U.S. and D.C., 21+. Begins at 12:00 a.m. ET on 8/3/23 and ends at 11:59:59 p.m. ET on 8/28/23. Alcohol is not included
          with prize. Subject to official rules at{" "}
          <Link to="/claw-back-summer-rules" target="_blank" onClick={() => document.querySelector('html').style.scrollBehavior = 'unset'}>
            https://www.whiteclaw.com/claw-back-summer-rules
          </Link>
          .
        </p>
        <p>
          <strong>White Claw® Hard Seltzer Gear Sweepstakes</strong>
          <br />
          <strong>NO PURCHASE NECESSARY</strong>. Legal residents of the U.S./D.C. Void A.K./H.I. and where prohibited by law. 21+ ONLY. Sweepstakes begins 8/1/2023 and ends 9/29/23 @ 11:59:59 p.m.
          ET, subject to weekly entry deadlines. Subject to official rules at{" "}
          <Link to="/whiteclawgear-rules" target="_blank" onClick={() => document.querySelector('html').style.scrollBehavior = 'unset'}>
            https://www.whiteclaw.com/whiteclawgear-rules
          </Link>
          . Sponsor: Mark Anthony Brands Inc., Chicago, IL. PLEASE DRINK RESPONSIBLY. HARD SELTZER WITH FLAVORS. All Registered Trademarks, used under license by White Claw Seltzer Works, Chicago, IL.
          Nutritional information available at White Claw® | Bring the Wave . Charges may apply when scanning QR Code®.{" "}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ClawBackPageQuery {
  prismicMicrosite (uid: {eq: "claw-back-summer"}) {
    _previewable
    url
    type
    id
    lang
    alternate_languages {
      id
      type
      lang
    }
    data {
      social_card{
        url
      }
      meta_description {
        text
      }
      meta_title {
        text
      }
    }
  }
}
`
export default withPrismicPreview(ClawBack)