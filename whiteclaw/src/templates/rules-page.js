// core
import React from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'

const RulesPage = ({data}) => {
  const pageContent = data.prismicRulesPage
  // console.log('pageContent', pageContent)
  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  const pageUrl = data.prismicRulesPage.uid
  const { meta_title, meta_description, social_card, banner_background, page_content } = data.prismicRulesPage.data

  return (
      <Layout currentPage={pageUrl} activeDocMeta={activeDoc}>
        <Seo
            title={meta_title?.text}
            description={ meta_description?.text }
            image={ social_card?.url}
        />
        <section
            className="inside-content"
        >
          <CommonPageBanner
              backgroundUrl={banner_background?.url}
          />
          <div className="container-fluid inside-content-row">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      {parse(page_content?.text)}
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
query RulesPageQuery ($uid: String, $id: String, $lang: String) {
    prismicRulesPage (uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
export default withPrismicPreview(RulesPage)