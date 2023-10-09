// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'
import NewsLetterSignUp from '../components/NewsLetterSignUp'

// constants
import { SUBSCRIPTION_FORM } from "../constants/subscriptionFormLocation";

const SubscribePage = ({ data }) => {
  const pageContent = data.prismicSubscribePage
  const pageData = data.prismicSubscribePage.data

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  // console.log('subscribe activeDoc', activeDoc)
  // console.log('subscribe alternateLanguages', alternateLanguages)

  // Newsletter Signup Set Values
  const subscriptionFormTitle = pageData.content_header.text
  const subscriptionFormCopy = pageData.page_content.text
  const subscriptionFormName = SUBSCRIPTION_FORM.SUBSCRIBE_PAGE
  const ActiveCampaignTag = "WCUS-web-subscribe-signup"

  return (
    <Layout currentPage="subscribe" activeDocMeta={activeDoc}>
      <Seo
          title={pageData.meta_title?.text}
          description={ pageData.meta_description?.text}
          image={pageData.social_card?.url}
      />
      <section className="inside-content subscribe">
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
                    {/* Newsletter Signup */}
                    <NewsLetterSignUp
                    subscriptionFormTitle={subscriptionFormTitle}
                    subscriptionFormCopy={subscriptionFormCopy}
                    subscriptionFormName={subscriptionFormName}
                    ActiveCampaignTag={ActiveCampaignTag}
                    />
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

export default withPrismicPreview(SubscribePage)

export const query = graphql`
  query SubscribePagequery($uid: String, $id: String, $lang: String){
    prismicSubscribePage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        social_card {
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