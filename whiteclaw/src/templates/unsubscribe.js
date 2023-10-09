// core
import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from "../components/CommonPageBanner";

// data-layer
import {setUnsubscribeConfirmedEvent} from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'


const UnsubscribePage = ({ data }) => {
  const formContainer = useRef()
  const pageContent = data.prismicUnsubscribePage
  const pageData = data.prismicUnsubscribePage.data
  const oneTrustAccepted = useOneTrust()
  const [oneTrustAcceptedTrue, setOneTrustAcceptedTrue] = useState(false)

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  const unSubscriptionFormTitle = pageData.content_title.text
  const unSubscriptionFormCopy = pageData.content_description.text

  useEffect(()=>{
    const script = document.createElement("script")
    script.src = 'https://markanthonygroup.activehosted.com/f/embed.php?id=48'
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    const targetNode = formContainer.current
    const config = { childList: true, subtree: true }

    const setFormChangesListener = (mutationList) => {
      mutationList.forEach((mutation)=>{
        if (mutation.type === "childList") {

          const thankYou = document.querySelectorAll('._form-thank-you')

          if(thankYou[0].style.display !== 'none'){
            setOneTrustAcceptedTrue(true)
          }
        }
      })

    };

    const observer = new MutationObserver(setFormChangesListener);
    observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    }
  },[])
  
  useEffect(()=>{
    if(oneTrustAcceptedTrue) {
      setUnsubscribeConfirmedEvent(oneTrustAccepted)
    }
  },[oneTrustAcceptedTrue])


  return (
      <Layout currentPage="unsubscribe" activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title?.text}
            description={ pageData.meta_description?.text}
            image={pageData.social_card?.url}
        />

        <section id="unsubscribe" className="inside-content unsubscribe">
          <CommonPageBanner backgroundUrl={pageData.banner_background.url} />
          <div className="container-fluid inside-content-row">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1>{ unSubscriptionFormTitle }</h1>
                      <p>{ unSubscriptionFormCopy }</p>

                      {/* embedded ActiveCampaign form */}
                      <div className="_form_48" ref={formContainer}></div>

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
  query UnsubscribePageQuery($uid: String, $id: String, $lang: String){
    prismicUnsubscribePage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        content_title {
       
          text
        }
        content_description {
          text
        }
      }
    }
  }
`

export default withPrismicPreview(UnsubscribePage)