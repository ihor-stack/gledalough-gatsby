import React from 'react'
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll'
import StoryPrimary from '../components/StoryPrimary'
import StorySecondary from '../components/StorySecondary'

import { CONTENT } from '../constants'
import { Layout } from '../components/Layout'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { graphql } from 'gatsby'

const StoryArticleTemplate = ({ data }) => {
  if (!data) return null
  const story = data.prismicStoryarticle || {}
  const topMenu = data.prismicTopMenu || {}

  const { lang, type, url } = story || {}
  const alternateLanguages = story.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  return (
    <Layout topMenu={topMenu.data} activeDocMeta={activeDoc}>
      <PageScroll width="100vw" height="100vh">
        {story?.data?.body?.[0]?.items?.map((slice, index) => {
          if (index === 0) {
            return (
              <StoryPrimary
                key={index}
                className="page"
                bgColor="cream"
                content={{
                  heading: story?.data?.heading?.text,
                  title: story?.data?.title?.text,
                  ...slice,
                }}
              />
            )
          }
          return (
            <StorySecondary
              key={index}
              className="page"
              bgColor={slice?.background_color}
              index={1}
              reverse={index % 2 === 1}
              content={slice}
            />
          )
        })}

        {/* <StorySecondary
          className="page"
          bgColor="cream"
          index={2}
          content={CONTENT.stories}
        />
        <StorySecondary
          className="page"
          bgColor="offwhite"
          index={3}
          reverse={true}
          content={CONTENT.stories}
        /> */}
      </PageScroll>
    </Layout>
  )
}

export const query = graphql`
  query StoryArticlePageQuery($uid: String, $id: String, $lang: String) {
    prismicStoryarticle(
      uid: { eq: $uid }
      id: { eq: $id }
      lang: { eq: $lang }
    ) {
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
        title {
          text
        }
        overview {
          text
        }
        meta_title {
          text
        }
        meta_description {
          text
        }
        heading {
          text
        }
        featured_image {
          url
          alt
        }
        body {
          ... on PrismicStoryarticleDataBodyStoryContent {
            id
            items {
              background_color
              content {
                richText
                raw
                html
              }
              content_title {
                text
              }
              image {
                url
                alt
              }
            }
            slice_label
            slice_type
          }
        }
      }
    }
  }
`

export default withPrismicPreview(StoryArticleTemplate)
