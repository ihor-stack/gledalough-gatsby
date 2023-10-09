import React, { useEffect, useRef } from 'react'
import { setSocialPostClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const InstagramSection = ({ slice }) => {
  const instagramContainer = useRef()
  const oneRowElfsightWidgetClass = 'elfsight-app-ff98a66f-bc18-4403-9dd4-56d8ccfd9a44';
  const twoRowsElfsightWidgetClass = 'elfsight-app-ee4484ec-e020-426a-b0d3-32b5fae6c664';
  const defaultNumberOfRows = '2 rows';

  const sectionTitle = slice.primary.title.text
  const sectionDescription = slice.primary.description.text
  const sectionBgColor = slice.primary.background_color
  const sectionTextColor = slice.primary.copy_color
  const containerClassName = slice.primary.widget_view === defaultNumberOfRows ? twoRowsElfsightWidgetClass : oneRowElfsightWidgetClass
  const oneTrustAccepted = useOneTrust()


  useEffect(() => {

    //append socials script
    const script = document.createElement("script")
    script.src = "https://apps.elfsight.com/p/platform.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    const targetNode = instagramContainer.current
    const config = { childList: true, subtree: true }

    const clickSocialPost = (e) => {
      const dl = {
        link: e.currentTarget.href,
        position:  e.currentTarget.dataset.position
      }

      setSocialPostClickedEvent(dl, oneTrustAccepted)
    }

    const setPostsEventListener = (mutationList) => {

      mutationList.forEach((mutation)=>{
        if (mutation.type === "childList") {

         const posts = document.querySelectorAll('.eapps-instagram-feed-posts-item-link')

          if(posts?.length){
           posts.forEach((post, index)=>{
             post.setAttribute('data-position', `${index + 1}`)
             post.addEventListener('click',clickSocialPost);
           })
          }
        }
      })

    };

    const observer = new MutationObserver(setPostsEventListener);
    observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    }
  },[oneTrustAccepted])

  return (
      <section id='instagram-section' className="ms-contest-social pt-5 animation-element-container" style={{ backgroundColor: sectionBgColor }}>
        <div className="text-center py-5">
          <h2 className="" style={{ color: sectionTextColor }}> { sectionTitle }</h2>
          <p className='py-0 my-0' style={{ color: sectionTextColor }}> { sectionDescription }</p>
          <div className={`${containerClassName} py-5`} ref={instagramContainer}></div>
        </div>
      </section>
  );
}
