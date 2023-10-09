// core
import React from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'

const PrivacyPolicy = ({data}) => {
    const pageContent = data.prismicPrivacyPolicyPage
    const pageData = data.prismicPrivacyPolicyPage.data
    // console.log('privacy pageContent ' , pageContent)
    
    const { lang, type, url } = pageContent
    const alternateLanguages = pageContent.alternate_languages || []
    const activeDoc = {
      lang,
      type,
      url,
      alternateLanguages,
    }

    return (
      <Layout currentPage="privacy-policy" activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title?.text }
            description={pageData.meta_description?.text}
            image={pageData.social_card?.url}
        />
        <section id="privacy-policy" className="inside-content privacy-policy">
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
                      {parse(pageData.page_content.text)}
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
query PrivacyPolicyPageQuery($uid: String, $id: String, $lang: String){
    prismicPrivacyPolicyPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
export default withPrismicPreview(PrivacyPolicy)