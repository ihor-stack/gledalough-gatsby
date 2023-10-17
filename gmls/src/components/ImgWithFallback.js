import React from 'react'

const ImgWithFallback = ({
  classNamePicture,
  classNameImg,
  src,
  alt,
  fallbackSrc,
  mediaType = 'image/webp',
  ...delegated
}) => {
  return (
    <picture className={classNamePicture}>
      <source srcSet={src} type={mediaType} />
      <img
        src={fallbackSrc}
        alt={alt}
        {...delegated}
        className={classNameImg}
      />
    </picture>
  )
}

export default ImgWithFallback
