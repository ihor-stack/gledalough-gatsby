// core
import React from 'react'
import { useLocation } from "@reach/router";
import { graphql, Link } from 'gatsby'
import parse from 'html-react-parser'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'
import ImgWithFallback from '../components/ImgWithFallback'

// data-layer
import { setLearnMoreClickedEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

const OurVodkaStory = ({data}) => {
    const location = useLocation()
    const pageContent = data.prismicOurStoryPage
    const pageData = data.prismicOurStoryPage.data
    // console.log('our story pageContent ' , pageContent)
    // console.log('our story pageData ' , pageData)
    const oneTrustAccepted = useOneTrust()
    
    const { lang, type, url } = pageContent
    const alternateLanguages = pageContent.alternate_languages || []
    const activeDoc = {
      lang,
      type,
      url,
      alternateLanguages,
    }

    return (
      <Layout currentPage="our-story" activeDocMeta={activeDoc}>
        <Seo
          title={pageData.meta_title?.text }
          description={pageData.meta_description?.text}
          image={pageData.social_card?.url}
        />
        <section id="our-story" className="inside-content our-story">
          <CommonPageBanner
            backgroundUrl={pageData.banner_background.url}
          />
          <div className="container-fluid inside-content-row">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className='our-story__title'>{pageData.page_title}</h1>
                      <h2 className='our-story__subtitle'>{parse(pageData.page_subtitle.text)}</h2>
                      {parse(pageData.text_above.text)}
                      {
                        pageData.text_image_section.map((element, index) => {
                          return (
                            <div className={`row our-story__section ${element.image_align_right ? 'our-story__section--right' : ''}`} key={index}>
                            <div className='col-lg-5 d-flex justify-content-center'>
                              <ImgWithFallback
                                classNamePicture={"our-story__image-pct"}
                                classNameImg={"our-story__image-img"}
                                src={element.text_image_img_png.url}
                                fallbackSrc={element.text_image_img_png.url}
                                alt={element.text_image_img_png.alt ? element.text_image_img_png.alt : ''}
                              />
                            </div>
                            <div className='col-lg-7'>
                              {parse(element.text_image_text.text)}
                            </div>
                          </div>
                          )
                        })
                      }
                      {parse(pageData.text_below.text)}
                      <div className='row'>
                        <div className='col-lg-7 offset-lg-5'>
                          <Link className='our-story__cta-button' to={pageData.learn_more_link.url} target="_self"
                                onClick={ ()=> {
                                  const dl = {
                                    url: pageData.learn_more_link.url,
                                    referrer: location.pathname,
                                    name: pageData.learn_more_text.toLowerCase()
                                  }
                                  setLearnMoreClickedEvent(dl, oneTrustAccepted)
                                }}
                          >{pageData.learn_more_text}</Link>
                        </div>
                      </div>
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

export const query = graphql`
query OurStoryPageQuery($uid: String, $id: String, $lang: String){
    prismicOurStoryPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
        _previewable
        url
        uid
        type
        id
        lang
        alternate_languages {
          id
          type
          lang
          uid
        }
        data {
            social_card {
               url
            }
            meta_description {
                text
            }
            meta_title {
                text
            }
            banner_background {
                alt
                url
            }
            page_title
            page_subtitle {
              html
              text
            }
            text_above {
              html
              text
            }
            text_image_section {
              image_align_right
              text_image_img_png {
                alt
                url
              }
              text_image_text {
                html
                text
              }
            }
            text_below {
              html
              text
            }
            learn_more_text
            learn_more_link {
              url
            }
        }
    }
}
`
export default withPrismicPreview(OurVodkaStory)