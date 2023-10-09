// core
import React, {useEffect} from 'react'

const DjaPage = ({id, iframeSrc, scriptSrc}) => {

  useEffect(() => {

    //append DJA script
    const script = document.createElement("script")
    script.src = scriptSrc
    script.async = true
    document.body.appendChild(script)

  },[scriptSrc])

  return (
      <iframe id={id} title={id} src={iframeSrc} scrolling="no"></iframe>
  )
}

export default DjaPage