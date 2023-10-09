// core
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import { Seo } from '../components/Seo'
import WishpondPage from "../components/WishpondPage";
import Layout from "../components/Layout";

const Sxsw = ({data}) => {
  const pageData = data.prismicFullscreenEmbeddedPage.data


  const pageContent = data.prismicFullscreenEmbeddedPage

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  useEffect(() => {

    //append segment analytics script
    const instagramScript = document.createElement("script")
    instagramScript.src = 'https://apps.elfsight.com/p/platform.js'
    instagramScript.defer = true
    instagramScript.async = true
    document.body.appendChild(instagramScript)

  },[])


  return (
      <Layout currentPage='sxsw' activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            social_card={pageData.social_card?.url}
        />
        <section className='wishpond-section'>
          <WishpondPage id="2733112"/>
        </section>
        <section className='instagram-section'>
          <h2 className='text-center pt-5 '> #whiteclawsxsw </h2>
          <p className='pt-0 my-0 pb-5' >Follow @whiteclaw and post with #WHITECLAWSXSW</p>
          <div className="elfsight-app-ee4484ec-e020-426a-b0d3-32b5fae6c664"></div>
        </section>
      </Layout>
  )
}

export const query = graphql`
  query SxswQuery {
    prismicFullscreenEmbeddedPage (uid: {eq: "sxsw"}) {
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
      uid
    }
  }
 `

export default withPrismicPreview(Sxsw)

