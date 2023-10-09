// core
import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

// components
import LayoutEmbeddedPage from '../components/LayoutEmbeddedPage'
import MicrositeHeader from '../components/microsites/MicrositeHeader'
import MicrositeFooter from '../components/microsites/MicrositeFooter'
import { Seo } from '../components/Seo'
import ImgWithFallback from '../components/ImgWithFallback'

import { components } from '../slices/instagram-section'

import * as images from '../assets/images/microsites'

const WcEpicMomentMicrositePage = ({data}) => {

  const { meta_title, meta_description, social_card, body : slices } = data.prismicMicrosite.data

  return (
      <LayoutEmbeddedPage >
        <MicrositeHeader customPage="wcepicmoment"/>
        <Seo
            title={meta_title?.text}
            description={ meta_description?.text}
            image={social_card?.url}

        />
        <div id="contest-closed" className="us-site en ms-contest  ms-contest--laketahoe pb-0">


          <section className="ms-contest-hero overflow-hidden">
            <div className="row">
              <div className="col-img col-12 col-lg-6 p-0">

                <ImgWithFallback
                    classNameImg='w-100'
                    src={images.heroPng}
                    alt='White Claw Cans'
                    fallbackSrc={images.heroWebp}
                />

              </div>
              <div className="col-content col-12 col-lg-6 py-5 py-lg-0 d-flex justify-content-center align-items-center text-center">
                <div className="title-wrap animation-element">
                  <h1 className="pb-0">
                    TIME FOR<br/>
                    THE NEXT<br/>
                    ADVENTURE
                  </h1>
                  <p className="ms-contest-hero__desc pt-4 mt-2 pb-0">The promotion ended at 11:59:59 PM EST on
                    2/28/23. </p>
                  <p className="ms-contest-hero__desc pt-4 pb-0">There’s always something exciting coming, so sip some
                    White Claw® Hard Seltzer while you wait for our next program.</p>
                </div>
              </div>
            </div>
            <SliceZone slices={ slices }  components={components} />
          </section>
          <MicrositeFooter customPage="wcepicmoment"/>
        </div>
      </LayoutEmbeddedPage>
  )
}

export const query = graphql`
  query LakeTahoeMicrositePageQuery {
  prismicMicrosite (uid: {eq: "wcepicmoment"}) {
    _previewable
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
export default withPrismicPreview(WcEpicMomentMicrositePage)