// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'
import DsarForm from '../components/dsarPageComponents/DsarForm'

// DATA SUBJECT ACCESS REQUEST PAGE
const DsarRequestPage = ({ data }) => {
  // console.log('data ' , data)
  const pageContent = data.prismicDsarPage
  const pageData = data.prismicDsarPage.data
  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
      <Layout currentPage="" activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title.text}
            description={pageData.meta_description.text}
            image={pageData.social_card.url}
        />
        <section className="inside-content contact-us">
          <CommonPageBanner backgroundUrl={pageData.banner.url}/>
          <div className="container-fluid inside-content-row">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <h1>{pageData.title.text}</h1>
                  <p>
                    In certain states (such as California, Colorado, Connecticut and Virginia),
                    you may submit this form to make certain requests regarding your personal information.
                    Your requests will be processed in accordance with our <a href='/privacy' target='_blank' title='Privacy Policy'>Privacy Policy</a> and the law applicable to your request.
                    In certain circumstances, we may require additional information if we are unable to verify your request based on the information
                    you provided. The information submitted on this form will be used for the purpose of processing your request.
                    <br/>
                    <br/>

                    Residents of California, Colorado, and Connecticut may designate an authorized agent to submit
                    a request on your behalf to access or delete your Personal Information.
                    To do so, you must: (1) provide that authorized agent written and signed permission to submit such request;
                    and (2) verify your own identity directly with us. Please note, we may deny a request from an authorized agent
                    that does not submit proof that they have been authorized by you to act on your behalf.
                  </p>
                  {/* Contact Us Form */}
                  <DsarForm activeDocMeta={activeDoc}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}

export const query = graphql`
  query DsarPageQuery($uid: String, $id: String, $lang: String){
    prismicDsarPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      uid
      type
      id
      lang
      url
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        banner {
          alt
          url
        }
        title {
          text
          richText
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
export default withPrismicPreview(DsarRequestPage)