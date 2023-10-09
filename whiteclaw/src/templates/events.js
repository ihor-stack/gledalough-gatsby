// core
import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import CommonPageBanner from '../components/CommonPageBanner'

// data-layer
import { setEventSignUpClickedEvent, setEventViewedEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

const Events = ({data}) => {
    const eventsGalleryContainer = useRef()
    // console.log('data ' , data)
    const pageContent = data.prismicEventsPage
    // console.log('events pageContent', pageContent)
    const pageData = data.prismicEventsPage.data
    const oneTrustAccepted = useOneTrust()

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  // Elfsight append script tag
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://apps.elfsight.com/p/platform.js"
    script.defer = true
    document.body.appendChild(script)

    const targetNode = eventsGalleryContainer.current
    const config = { childList: true, subtree: true }

    // signUp button callback
    const clickSignUpButton = (e) => {

      const dl = {
        url:  '',
        name: e.target.dataset.name,
        location: e.target.dataset.location
      }

        setEventSignUpClickedEvent(dl, oneTrustAccepted)
      }

    // events gallery item callback
    const openEventPopUp = () => {

      // wait for pop-up open to get date
      setTimeout(()=> {
        const popUp = document.querySelector('.eapp-events-calendar-popup-item-inner')
        const eventName = popUp?.querySelector('.eapp-events-calendar-popup-item-name')?.innerText || ''
        const eventLocation = popUp?.querySelector('.eapp-events-calendar-popup-location-content > div')?.innerText || ''
        const eventDate = popUp?.querySelector('.eapp-events-calendar-popup-time-content > div')?.innerText || ''
        const signUpButton = popUp?.querySelector('.eapp-events-calendar-button-link')

        if(signUpButton){
          signUpButton.setAttribute('data-name', eventName)
          signUpButton.setAttribute('data-location', eventLocation)
          signUpButton.addEventListener('click', clickSignUpButton)
        }

        if(eventDate){
          const today = new Date()
          const todayDateInMs = Date.parse(`${today}`)
          const eventDateInMs = Date.parse(`${eventDate}`)
          const diff = eventDateInMs - todayDateInMs
          const eventStatus = diff > 0 ? "upcoming" : "past"

          const dl = {
            url: '',
            name: eventName,
            location: eventLocation,
            status: eventStatus
          }

            setEventViewedEvent(dl, oneTrustAccepted)
          }

      }, 150)

    }

    const setEventsEventListener = (mutationList) => {

      mutationList.forEach((mutation)=>{
        if (mutation.type === "childList") {

          const events = document.querySelectorAll('.eapp-events-calendar-masonry-item')

          if(events?.length){
            // sign up clicked on page
            events.forEach((event)=>{
              const signUpButton = event.querySelector('.eapp-events-calendar-button-link')
              const eventName = event.querySelector('.eapp-events-calendar-name-component')?.innerText || ''
              const eventLocation = event.querySelector('.eapp-events-calendar-location-text')?.innerText || ''


              if(signUpButton){
                signUpButton.setAttribute('data-name', eventName)
                signUpButton.setAttribute('data-location', eventLocation)
                signUpButton.addEventListener('click', clickSignUpButton)
              }

              event.addEventListener('click', openEventPopUp)
            })
          }
        }
      })

    };

    const observer = new MutationObserver(setEventsEventListener);
    observer.observe(targetNode, config);

      return () => {
        observer.disconnect();
      }
    },[oneTrustAccepted])

  return (
      <Layout currentPage="events" activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            image={pageData.social_card?.url}
        />
        <section id="events" className="inside-content events">
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
                    <div className="col-md-12 pr-3">
                      <h1>{pageData.content_header.text}</h1>
                    </div>
                    <div className="mx-auto mb-4 col-md-12 d-flex col-md row">
                      <div className="col-md-8 col-12"> {parse(pageData.page_content.text)}</div>
                      <div className="col-md-4 col-12 p-0">
                        <iframe className='mainstage-player'
                                src="https://open.spotify.com/embed/playlist/7mYrZC2ofYLSfXfaEpWXaa?utm_source=generator"
                                width="100%" height="352" frameBorder="0" allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"></iframe>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="elfsight-app-b62b66cc-4db7-4133-87bc-c79cb1c1160d" ref={eventsGalleryContainer}></div>
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
  query EventsPageQuery($uid: String, $id: String, $lang: String) {
    prismicEventsPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
`;
export default withPrismicPreview(Events)