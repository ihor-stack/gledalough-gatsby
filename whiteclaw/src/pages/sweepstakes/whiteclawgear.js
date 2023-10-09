// core
import React, { useEffect } from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql, Link } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import Jump from 'react-reveal/Jump';

// components
import Layout from '../../components/Layout'
import { Seo } from '../../components/Seo'
import * as images from '../../assets/images/microsites/clawback'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import MicrositeHeader from '../../components/microsites/MicrositeHeader'
import ImgWithFallback from '../../components/ImgWithFallback'
import WishpondPage from "../../components/WishpondPage";
import { components } from '../../slices/instagram-section'
import useWindowSize from "../../hooks/useWindowSize";


const WhiteClawGear = ({data}) => {
  const pageContent = data.prismicMicrosite
  const { type, url } = pageContent
  const { meta_title, meta_description, social_card, body : slices } = data.prismicMicrosite.data
  const { width } = useWindowSize()

  const alternateLanguages = pageContent.alternate_languages || []
  const lang = "en-us"

  const activeDoc = { 
    lang,
    type,
    url,
    alternateLanguages,
  }

  useEffect(()=> {
    const htmlElement = document.querySelector('html')
    htmlElement.style.scrollBehavior = 'smooth'

    return () => htmlElement.style.scrollBehavior = 'unset'
  },[])

  return (
    <Layout currentPage="whiteclawgear" activeDocMeta={activeDoc}>
      <MicrositeHeader customPage="whiteclawgear" />
      <Seo title={meta_title?.text} description={meta_description?.text} image={social_card?.url} />
      <div className='cb-page-bg'>
        <ImgWithFallback classNamePicture="cb-page-bg__img" src={images.cbPageBg} alt="" />
      </div>
      <section className="cb-hero cb-hero--wcg">
        <div className='cb-hero__slide'>
          <ImgWithFallback classNamePicture="cb-hero__bg" src={width > 991 ? images.cbHeroBgWcg : images.cbHeroBgWcgMobile} alt="" />
          <div className='cb-hero-pill'>
            <ImgWithFallback classNamePicture={`cb-hero-pill__bg ${width > 991 ? 'cb-hero-pill__bg--desktop' : 'cb-hero-pill__bg--mobile'}`} src={images.cbRetailPrize} alt="" />
            <div className='cb-hero-pill__text-block'>
              <ImgWithFallback classNamePicture="cb-hero__logo" src={images.cbLogo} alt="" />
              <h1>WIN A WEEK OFF-GRID <br/>AND WHITE CLAW GEAR</h1>
              <p>Finally going on a getaway means getting away from work emails and your boss. We’re giving away a weeklong, off-grid trip for two, so you can escape the notifications and get to living your best summer life. When you enter you’ll also be in the drawing for weekly drops of summery White Claw® gear.</p>
                <Link
                  to="#enter"
                  target="_self"
                  className="cb-hero__arrow cb-hero__arrow--white"
                  >
                  <Jump forever={true}>
                    <FontAwesomeIcon icon={faChevronDown} className="fa-solid"/>
                  </Jump>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cb-wishpond">
        <span id='enter'></span>
        <WishpondPage id="2750342" type={"form"} isMicrosite={true}/>
      </section>
      <section className="cb-text-image cb-text-image--shop">
        <div className="cb-text-image__image">
          <ImgWithFallback src={images.cbShopWcgCan} alt="" />
        </div>
        <div className="cb-text-image__text">
          <h2>SHOP WHITE CLAW®</h2>
          <a href="https://locator.whiteclaw.com/" target="_blank" className="cb-button">BUY NOW</a>
        </div>
      </section>
      <SliceZone slices={slices} components={components} />
      <section className="cb-fineprint">
        <p><strong>NO PURCHASE NECESSARY</strong>. Legal residents of the U.S./D.C. Void A.K./H.I. and where prohibited by law. 21+ ONLY. Sweepstakes begins 8/1/2023 and ends 9/29/23 @ 11:59:59 p.m. ET, subject to weekly entry deadlines.  Subject to official rules at <Link to="/whiteclawgear-rules" target="_blank" onClick={() => document.querySelector('html').style.scrollBehavior = 'unset'}>https://www.whiteclaw.com/whiteclawgear-rules</Link>. Sponsor: Mark Anthony Brands Inc., Chicago, IL. PLEASE DRINK RESPONSIBLY. HARD SELTZER WITH FLAVORS. All Registered Trademarks, used under license by White Claw Seltzer Works, Chicago, IL. Nutritional information available at whiteclaw.com. Charges may apply when scanning QR Code®.</p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query WhiteClawGearPageQuery {
  prismicMicrosite (uid: {eq: "whiteclawgear"}) {
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
export default withPrismicPreview(WhiteClawGear)