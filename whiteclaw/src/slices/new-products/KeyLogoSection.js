import React from 'react'

//components
import ImgWithFallback from "../../components/ImgWithFallback";

export const KeyLogoSection = ({ slice }) => {

  const desktopImage = {
    png : slice.primary.image.url,
    alt : slice.primary.image.alt,
  }

  return (
      <section className='key-logo'>
        <div className='container'>
          <div className='row key-logo__content'>
            <h1 className='pb-0'>
              < ImgWithFallback
                  classNameImg='w-100'
                  src={desktopImage.png}
                  alt={desktopImage.alt}
                  fallbackSrc={desktopImage.png}
              />
            </h1>
          </div>
        </div>
      </section>
  )
}