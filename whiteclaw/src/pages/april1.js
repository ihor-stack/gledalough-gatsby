import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import { Seo } from '../components/Seo'

//preview
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

//assets
import whiteclawWaveVideo from '../assets/videos/white-claw-website-wave-cinemagraph.mp4';

const April1Page = ({ data }) => {
  const pageContent = data.prismicMicrosite
  const { meta_title, meta_description, social_card } = data.prismicMicrosite.data

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
      <Layout currentPage="april1" customPage={true} activeDocMeta={activeDoc}>
        <Seo title={meta_title?.text} description={meta_description?.text} image={social_card?.url }/>
        <section className="inside-content error-404">
          <div className="error-404__sign-wrapper position-relative">
            <video autoPlay={true} playsInline={true} muted={true} loop={true} >
              <source src={whiteclawWaveVideo} type="video/mp4" />
            </video>
            <svg id="Layer_2" data-name="Layer 2"
                 xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 801.5 459"
                  >
              <defs>
                <mask id="mask" x="0" y="0" width="100%" height="100%">
                  <rect x="0" y="0" width="100%" height="100%"></rect>
                  <g>
                    <path d="M327.5,292.8c19.3,0,35,15.7,35,35.4s-15.7,35-35,35s-35.4-15.7-35.4-35S308.6,292.8,327.5,292.8z"/>
                    <path d="M232.3,358.8H147v-45.1H11v-55.8L122.1,95.6h89.8L113.1,245h37v-40h82.2v39.9h35.8v68.7h-35.8L232.3,358.8L232.3,358.8 L232.3,358.8z"/>
                    <path d="M609.1,225.2c0,56.1-28.1,138.8-119.2,138.8s-118.8-82.7-118.8-138.8S398.8,90,489.9,90S609.1,170.7,609.1,225.2 L609.1,225.2z M520.1,225.4c0-15.8-2-64.4-29.9-64.4s-30.1,48.6-30.1,64.4s0,67.6,30.1,67.6S520.1,241.2,520.1,225.4z"/>
                    <path d="M782.7,359.2h-87.9V199.6l-28.4,15.7l-32-60L717,95.7h65.7V359.2L782.7,359.2L782.7,359.2z"/>
                  </g>
                </mask>
              </defs>
              <rect x="0" y="0" width="100%" height="100%"></rect>
            </svg>
          </div>
          <div className="container-fluid inside-content-row">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1>Error 4.01</h1>
                      <h4>This page cannot be found, you should probably check your calendar</h4>
                      <Link to="/" _target="self" className="button-style-1">
                        Back to home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
}

export default withPrismicUnpublishedPreview(April1Page)

export const query = graphql`
  query April1PageQuery {
    prismicMicrosite (uid: {eq: "april1"}) {
       _previewable
       data {
        meta_title {
            text
        }
        social_card{
          url
        }
        meta_description {
          text
        }
      }
      lang
      type
      alternate_languages {
       lang
      }
      url
    }
  }
 `


