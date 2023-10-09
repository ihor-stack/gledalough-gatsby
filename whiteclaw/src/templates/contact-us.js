// core
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'
import ContactUsForm from '../components/contactPageComponents/ContactUsForm'

const ContactUsPage = ({ data }) => {
  // console.log('data ' , data)
  const pageContent = data.prismicContactUsPage
  const pageData = data.prismicContactUsPage.data
  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  useEffect(() => {

    //append script
    // const script = document.createElement("script")
    // script.src = '//fw-cdn.com/5160686/3192025.js'
    // script.chat='true'
    // document.head.appendChild(script)
  },[])

  return (
    <Layout currentPage="contact-us" activeDocMeta={activeDoc}>
      <Seo
        title={pageData.meta_title?.text}
        description={pageData.meta_description?.text}
        image={pageData.social_card?.url}
      />
      <section className="inside-content contact-us">
        <CommonPageBanner
          title={pageData.banner_title.text}
          backgroundUrl={pageData.banner_background.url}
          subtitle={pageData.banner_subtitle.text}
          description={pageData.banner_description.html}
        />
        <div className="container-fluid inside-content-row">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1>{pageData.content_header.text}</h1>
                    {/* Contact Us Form */}
                    <ContactUsForm activeDocMeta={activeDoc}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ContactUsPageQuery($uid: String, $id: String, $lang: String){
    prismicContactUsPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        banner_background {
          alt
          url
        }
        banner_description {
          text
        }
        banner_subtitle {
          text
        }
        banner_title {
          text
        }
        content_header {
          text
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
        page_content {
          html
          text
        }
      }
    }
  }
`
export default withPrismicPreview(ContactUsPage)