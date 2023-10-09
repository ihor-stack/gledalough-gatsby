// core
import React, {useEffect, useState} from 'react'

// prop hasTrackAnonymousId = true if embedded script has class  'wp-container' and attr 'data-wishpond-script'
const WishpondPage = ({id, hasTrackAnonymousId = true, type, isMicrosite = false, wpHeight = '100vh', wpMarginTop}) => {
  const [wpHref, setWpHref] = useState('')

  const wpScript = "//cdn.wishpond.net/connect.js?merchantId=1484505&amp;writeKey=086605ba1b25"
  const wpCurHref = `https://embedded.wishpondpages.com/lp/${id}/`

  const isBrowser = typeof window !== "undefined"
  const analytics = isBrowser ? window.analytics : undefined

  const wpStyles = {}

  if(type !== "form" || undefined && wpHeight) {
    wpStyles.height = wpHeight
  }

  if(wpMarginTop) {
    wpStyles.marginTop = wpMarginTop
  }

  useEffect(() => {
    setWpHref(wpCurHref)

    //append WP script
    const script = document.createElement("script")
    script.src = wpScript
    script.async = true
    document.body.appendChild(script)

    //add scroll to embedded page
    if(!isMicrosite) {
      setTimeout(() => {
        const iframe = document.getElementById(`wp-page-${id}`);
        iframe.scrolling = 'yes';
      }, 2000);
    }
  },[wpCurHref, isMicrosite, id])


  useEffect(() => {
    // trackAnonymousId
    if(!analytics){
      return
    }

    // wait for wishpond page loading
    setTimeout(()=>{
      const  anonymous_id = analytics.hasOwnProperty('user')
              ? analytics.user().anonymousId() : analytics.group().hasOwnProperty('anonymousId')
              ? analytics.group().anonymousId() : ''

      if(hasTrackAnonymousId){
        const hrefWithAnonymousID =`${wpCurHref}?anonymous_id=${anonymous_id}`
        setWpHref(hrefWithAnonymousID)
      } else {
        const message = JSON.stringify({ anonymous_id });
        document.getElementById(`wp-page-${id}`)?.contentWindow.postMessage(message, "*");
      }

    }, 2500)

  },[analytics, hasTrackAnonymousId, id, wpCurHref])

  return (
      <div
          className="wishpond-campaign"
          data-wishpond-id={id}
          data-wishpond-href={wpHref}
          style={wpStyles}>
      </div>
  )
}

export default WishpondPage