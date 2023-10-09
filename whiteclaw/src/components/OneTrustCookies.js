import React, { useEffect } from 'react'

const OneTrustCookies = () => {

  useEffect(()=>{
    // OneTrust Cookies Consent Notice start
    if(process.env.NODE_ENV !== 'development') {
      const scriptCdn = document.createElement("script")
      scriptCdn.src = "https://cdn-ukwest.onetrust.com/consent/593f0fc4-8558-4e1f-9e06-c4966a8330ba/OtAutoBlock.js"
      scriptCdn.type = "text/javascript"
      document.body.appendChild(scriptCdn)


      const scriptCdnUkwest = document.createElement("script")
      scriptCdnUkwest.src = "https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js"
      scriptCdnUkwest.setAttribute('data-domain-script', "593f0fc4-8558-4e1f-9e06-c4966a8330ba")
      scriptCdnUkwest.charset = "UTF-8"
      scriptCdnUkwest.type = "text/javascript"
      document.body.appendChild(scriptCdnUkwest)
      // function OptanonWrapper() { }}
    }
    // OneTrust Cookies Consent Notice end
  },[])

  return (<></>)
}

export default OneTrustCookies