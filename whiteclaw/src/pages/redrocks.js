// core
import React, { useState, useEffect } from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import FlipCountdown from '@rumess/react-flip-countdown';
import { useLocation } from '@reach/router';

// components
import LayoutEmbeddedPage from '../components/LayoutEmbeddedPage'
import MicrositeHeader from '../components/microsites/MicrositeHeader'
import MicrositeFooter from '../components/microsites/MicrositeFooter'
import BuyNowCarousel from '../components/microsites/BuyNowCarousel'
import { Seo } from '../components/Seo'
import ImgWithFallback from '../components/ImgWithFallback'
import useWindowSize from "../hooks/useWindowSize";
import WishpondPage from "../components/WishpondPage";
import Content404 from '../components/Content404'

import { components } from '../slices/instagram-section'

import * as images from '../assets/images/microsites'

const WcRedrocksMicrositePage = ({data}) => {
  const pageContent = data.prismicMicrosite
  const { type, url } = pageContent
  const { width } = useWindowSize()
  const [contest404, setContest404] = useState(true)
  const [contestComingSoon, setContestComingSoon] = useState(false)
  const [contestLive, setContestLive] = useState(false)
  const [contestClosed, setContestClosed] = useState(false)
  const { meta_title, meta_description, social_card, body : slices } = data.prismicMicrosite.data
  const location = useLocation();
  const pageURL = location.href
  
  // console.log('contest ended', contestLive)

  const testTimers = false;
  const showTimers = false;

  const testTimerEndValues = {
    contest404: "2023-04-25 15:37:00",
    contestComingSoon: "2023-04-25 15:37:10",
    contestLive: "2023-04-25 15:37:20",
  }

  const actualTimerEndValues = {
    contest404: "2023-04-28 06:00:00",
    contestComingSoon: "2023-04-30 21:00:01",
    contestLive: "2023-07-31 20:59:59",
  }

  const isBrowser = typeof window !== "undefined"

  const alternateLanguages = pageContent.alternate_languages || []
  const lang = "en-us"

  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  const handleContest404EndCounter = () => {
    setContest404(false);
    setContestComingSoon(true);
    setContestLive(false);
    setContestClosed(false);
  }

  const handleContestComingSoonEndCounter = () => {
    setContest404(false);
    setContestComingSoon(false);
    setContestLive(true);
    setContestClosed(false);
  }

  const handleContestLiveEndCounter = () => {
    setContest404(false);
    setContestComingSoon(false);
    setContestLive(false);
    setContestClosed(true);
  }

  useEffect(() => {
    if(isBrowser) {
      if ((pageURL.includes("?") && pageURL.includes("dev.")) || (pageURL.includes("?") && pageURL.includes("localhost"))) {
        const splitURL = pageURL.split("?");
        const compState = splitURL[1];

        if (compState === "404") {
          setContest404(true);
          setContestComingSoon(false);
          setContestLive(false);
          setContestClosed(false);
        }

        if (compState === "comingsoon") {
          setContest404(false);
          setContestComingSoon(true);
          setContestLive(false);
          setContestClosed(false);
        }

        if (compState === "live") {
          setContest404(false);
          setContestComingSoon(false);
          setContestLive(true);
          setContestClosed(false);
        }

        if (compState === "closed") {
          setContest404(false);
          setContestComingSoon(false);
          setContestLive(false);
          setContestClosed(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBrowser])

  return (
    <LayoutEmbeddedPage>
      {!contest404 && 
        <>      
          <MicrositeHeader customPage="redrocks" />
          <Seo title={meta_title?.text} description={meta_description?.text} image={social_card?.url} />
        </>
      }
      {contest404 && (
        <>
          <div className={showTimers ? "" : "d-none"} style={showTimers ? {marginTop: '120px'} : null}>
            <FlipCountdown
              endAt={testTimers ? testTimerEndValues.contest404 : actualTimerEndValues.contest404}
              onTimeUp={() => handleContest404EndCounter()}
            />
          </div>
          <Content404
            Content404ActiveDocMeta={activeDoc}
            Content404CustomPage={true}
            Content404CurrentPage={"error-404"}
            Content404SeoMetaTitle={meta_title}
            Content404SeoMetaDescription={meta_description}
            Content404SeoImage={social_card}
            Content404H1Text={"Error 404"}
            Content404H4Text={"This page cannot be found. Probably out catching some White Claw® waves."}
            Content404LinkText={"Back to Home"}
          />
        </>
      )}
      {contestComingSoon && (
        <div id="coming-soon" className="us-site en ms-contest ms-contest--redrocks pb-0 mt-md-0">
          <section className="ms-contest-hero overflow-hidden">
            <div className="row">
              <div className="col-img col-12 col-lg-6 p-0 position-relative">
                <ImgWithFallback classNameImg="hero-logo-overlay" src={images.redRocksLogoOverlay} alt="Red Rocks Park and Amphitheatre" />
                <ImgWithFallback classNameImg="w-100" src={images.redRocksBg} alt="Red Rocks Park and Amphitheatre" />
              </div>
              <div className="col-content col-12 col-lg-6 p-lg-0">
                <div className="title-wrap animation-element">
                  <h1 className="pb-0">THE SHOW'S ABOUT TO START</h1>
                  <FlipCountdown
                    size={`${width > 991 ? "small" : "medium"}`}
                    theme="light"
                    titlePosition="bottom"
                    hideYear
                    hideMonth
                    dayTitle="Days"
                    hourTitle="Hours"
                    minuteTitle="Minutes"
                    secondTitle="Seconds"
                    endAt={testTimers ? testTimerEndValues.contestComingSoon : actualTimerEndValues.contestComingSoon}
                    onTimeUp={() => handleContestComingSoonEndCounter()}
                  />
                  <p className="countdown-tlt">While you get excited to see your favorite artists at Red Rocks, enjoy some White Claw® Hard Seltzer.</p>
                  <a href="https://shopus.whiteclaw.com/link/16794297989224b8c3234/ce98165d-7fc8-df23-247b-b4e5f4057eab?"  rel="noopener noreferrer" target="_blank" className="button-style-2">
                    BUY NOW
                  </a>
                  <ImgWithFallback classNamePicture="bottom-cans" classNameImg="bottom-cans__img" src={images.redRocksBottomCans} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-content col-content--below-hero col-12 col-lg-6 p-0">
                <div className="title-wrap animation-element">
                  <h1 className="pb-0">WIN A VIP CONCERT EXPERIENCE FOR TWO AT RED ROCKS</h1>
                  <p className="countdown-tlt">
                    White Claw® is your ticket to unreal experiences:
                    <br className="d-lg-none" /> this time, we're taking you to Red Rocks Amphitheatre, <br className="d-lg-none" />
                    the destination of the world's most iconic artists. Get ready to rock out like never before.
                  </p>
                </div>
              </div>
              <div className="col-img col-12 col-lg-6 p-0 position-relative">
                <ImgWithFallback classNameImg="w-100" src={images.redRocksWinRight} alt="Red Rocks Park and Amphitheatre" />
              </div>
            </div>
            <BuyNowCarousel customPage="redrocks" shopBuyLink={"https://shopus.whiteclaw.com/link/16794297989224b8c3234/ce98165d-7fc8-df23-247b-b4e5f4057eab?"} />
            <SliceZone slices={slices} components={components} />
          </section>
          <MicrositeFooter customPage="redrocks" />
        </div>
      )}
      {contestLive && (
        <>
          <div id="contest-page" className="us-site en ms-contest ms-contest--redrocks pb-0 mt-md-0">
            <div className={showTimers ? "" : "d-none"} style={showTimers ? {marginTop: '120px'} : null}>
              <FlipCountdown
                  endAt={testTimers ? testTimerEndValues.contestLive : actualTimerEndValues.contestLive}
                  onTimeUp={() => handleContestLiveEndCounter()}
                />
            </div>
            <section className="ms-contest-hero overflow-hidden">
              <div className="row">
                <div className="col-img col-12 col-lg-6 p-0 position-relative">
                  <ImgWithFallback classNameImg="hero-logo-overlay" src={images.redRocksLogoOverlay} alt="Red Rocks Park and Amphitheatre" />
                  <ImgWithFallback classNameImg="w-100" src={images.redRocksBg} alt="Red Rocks Park and Amphitheatre" />
                </div>
                <div className="col-content col-12 col-lg-6 p-lg-0">
                  <div className="title-wrap animation-element">
                    <h1 className="pb-0">GET READY TO ROCK</h1>
                    <p className="countdown-tlt">
                      Drumroll, please. You can now enter for your <br className="d-none d-lg-block" /> chance to win a trip to Red Rocks.
                    </p>
                    <a href="#enter-now" className="button-style-2">
                      ENTER NOW
                    </a>
                    <ImgWithFallback classNamePicture="bottom-cans" classNameImg="bottom-cans__img" src={images.redRocksBottomCans} alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-content col-content--below-hero col-12 col-lg-6 p-0">
                  <div className="title-wrap animation-element">
                    <h1 className="pb-0">WIN A VIP CONCERT EXPERIENCE FOR TWO AT RED ROCKS</h1>
                    <p className="countdown-tlt">
                      The hottest artists rocking out at one of the world's coolest
                      <br className="d-none d-lg-block" /> venues — get ready for a trip you'll never forget.
                    </p>
                    <h2>Grand prize winners will receive:</h2>
                    <ul className="prize-items">
                      <li>Lodging for 3 nights</li>
                      <li>Round-trip flights</li>
                      <li>VIP experience at Red Rocks</li>
                      <li>$2000 stipend for additional costs and exploration</li>
                    </ul>
                    <a href="#enter-now" className="button-style-2">
                      ENTER NOW
                    </a>
                  </div>
                </div>
                <div className="col-img col-img--below-hero col-12 col-lg-6 p-0 position-relative">
                  <ImgWithFallback classNameImg="w-100" src={images.redRocksWinRight} alt="Red Rocks Park and Amphitheatre" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <section className="wishpond-form">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
                    <a id="enter-now"></a>
                    <WishpondPage id="2737405" type={"form"} isMicrosite={true}/>
                  </section>
                </div>
              </div>
              <BuyNowCarousel customPage="redrocks" shopBuyLink={"https://shopus.whiteclaw.com/link/16794297989224b8c3234/ce98165d-7fc8-df23-247b-b4e5f4057eab?"} />
              <SliceZone slices={slices} components={components} />
            </section>
            <MicrositeFooter customPage="redrocks" />
          </div>
        </>
      )}
      {contestClosed && (
        <div id="contest-closed" className="us-site en ms-contest ms-contest--redrocks pb-0 mt-md-0">
          <section className="ms-contest-hero overflow-hidden">
            <div className="row">
              <div className="col-img col-12 col-lg-6 p-0 position-relative">
                <ImgWithFallback classNameImg="hero-logo-overlay" src={images.redRocksLogoOverlay} alt="Red Rocks Park and Amphitheatre" />
                <ImgWithFallback classNameImg="w-100" src={images.redRocksBgOver} alt="Red Rocks Park and Amphitheatre" />
              </div>
              <div className="col-content col-12 col-lg-6 p-lg-0">
                <div className="title-wrap animation-element">
                  <h1 className="pb-0">
                    THE SHOW
                    <br /> IS OVER
                  </h1>
                  <p className="countdown-tlt">
                    The promotion ended AT 11:59:59 PM EST ON 07/31/23, but with White Claw®, the thrills never stop. Grab your favorite flavor, and get hyped for the next exciting promotion.{" "}
                  </p>
                  <ImgWithFallback classNamePicture="bottom-cans" classNameImg="bottom-cans__img" src={images.redRocksBottomCans} alt="" />
                </div>
              </div>
            </div>
            <BuyNowCarousel customPage="redrocks" shopBuyLink={"https://shopus.whiteclaw.com/link/16794297989224b8c3234/ce98165d-7fc8-df23-247b-b4e5f4057eab?"} />
            <SliceZone slices={slices} components={components} />
          </section>
          <MicrositeFooter customPage="redrocksend" />
        </div>
      )}
    </LayoutEmbeddedPage>
  );
}

export const query = graphql`
  query RedRocksMicrositePageQuery {
  prismicMicrosite (uid: {eq: "redrocks"}) {
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
      body {
        ... on PrismicMicrositeDataBodyInstagramSection {
          id
          slice_type
          primary {
            title {
              text
            }
            description {
              text
            }
            container_class {
              text
            }
            background_color
            copy_color
            widget_view
          }
        }
      }
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
export default withPrismicPreview(WcRedrocksMicrositePage)